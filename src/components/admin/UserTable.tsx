
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { getRealUserData } from "@/lib/imageUtils";

type User = {
  id: string;
  name?: string;
  email: string;
  date: string;
  status: "active" | "inactive";
  subscription: "free" | "premium" | "vip";
  season?: string;
};

export function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Get real user data
    const userData = getRealUserData();
    setUsers(userData.length > 0 ? userData : []);
    setFilteredUsers(userData.length > 0 ? userData : []);
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    if (searchQuery) {
      const filtered = users.filter(
        user => 
          user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [searchQuery, users]);
  
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Loading users...</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search users..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Filter</Button>
          <Button variant="outline" size="sm">Export</Button>
        </div>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Join Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Subscription</TableHead>
              <TableHead>Color Season</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name || "N/A"}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(user.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {user.subscription !== "free" && (
                        <Star className="mr-1 h-3 w-3 text-yellow-400" />
                      )}
                      <span className={user.subscription !== "free" ? "font-medium" : ""}>
                        {user.subscription.charAt(0).toUpperCase() + user.subscription.slice(1)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {user.season ? user.season.split("-").map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(" ") : "Not set"}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No users found. Create an account and complete the quiz to see users here.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
