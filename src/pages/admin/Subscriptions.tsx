import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { CreditCard, User, CheckCircle, XCircle } from "lucide-react";
import { SubscriptionCharts } from "@/components/admin/SubscriptionCharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/lib/supabaseClient";

const planAmounts: Record<string, number> = {
  free: 0,
  premium: 9.99,
  vip: 24.99,
};

const AdminSubscriptions = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptionData, setSubscriptionData] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalRevenue: "0.00",
    activeSubscribers: 0,
    conversionRate: "0.0",
    freeUsers: 0,
    premiumUsers: 0,
    vipUsers: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const adminData = localStorage.getItem("chromatique-admin");
      if (!adminData) return navigate("/admin/login");

      try {
        const { isAdmin } = JSON.parse(adminData);
        if (!isAdmin) return navigate("/admin/login");
        setIsAdmin(true);

        // Fetch user_profiles and subscriptions
        const { data: profiles, error: profilesError } = await supabase
          .from("user_profiles")
          .select("id, email, name");

        const { data: subs, error: subsError } = await supabase
          .from("subscriptions")
          .select("*");

        if (profilesError || subsError) throw profilesError || subsError;

        const userMap = new Map(profiles.map((u: any) => [u.id, u]));

        const subscribers = subs.map((sub: any) => {
          const user = userMap.get(sub.user_id);
          return {
            id: sub.id,
            user: user?.name || user?.email?.split("@")[0] || "Unknown",
            email: user?.email || "Unknown",
            plan: sub.plan_id || "free",
            amount: planAmounts[sub.plan_id] || 0,
            status: sub.status,
            startDate: sub.created_at,
            endDate:
              sub.plan_id === "free"
                ? "N/A"
                : new Date(
                    new Date(sub.created_at).setFullYear(
                      new Date(sub.created_at).getFullYear() + 1
                    )
                  ).toISOString(),
          };
        });

        const freeUsers = subscribers.filter((s) => s.plan === "free").length;
        const premiumUsers = subscribers.filter((s) => s.plan === "premium").length;
        const vipUsers = subscribers.filter((s) => s.plan === "vip").length;
        const paidCount = premiumUsers + vipUsers;
        const totalRevenue = subscribers.reduce((sum, s) => sum + s.amount, 0);
        const conversionRate = ((paidCount / subscribers.length) * 100).toFixed(1);

        setSubscriptionData(subscribers);
        setStats({
          totalRevenue: totalRevenue.toFixed(2),
          activeSubscribers: paidCount,
          conversionRate: isNaN(+conversionRate) ? "0.0" : conversionRate,
          freeUsers,
          premiumUsers,
          vipUsers,
        });
      } catch (err) {
        console.error("Admin auth error:", err);
        navigate("/admin/login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-pulse">
          <p className="text-xl text-chromatique-taupe">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <div className="hidden md:block w-64 border-r bg-background">
          <AdminSidebar />
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden absolute top-4 left-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <span className="sr-only">Toggle Menu</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1.5 7C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle>Admin Navigation</SheetTitle>
            </SheetHeader>
            <AdminSidebar />
          </SheetContent>
        </Sheet>
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-serif mb-6">Subscriptions</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${stats.totalRevenue}</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeSubscribers}</div>
                  <p className="text-xs text-muted-foreground">
                    +18.2% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.conversionRate}%</div>
                  <p className="text-xs text-muted-foreground">
                    +5.4% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
                <TabsTrigger value="plans">Plans</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <SubscriptionCharts />
              </TabsContent>
              <TabsContent value="subscribers">
                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Details</CardTitle>
                    <CardDescription>
                      List of all subscribers and their plans
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-md">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">Start Date</TableHead>
                            <TableHead className="hidden md:table-cell">End Date</TableHead>
                            <TableHead>Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {subscriptionData.length > 0 ? (
                            subscriptionData.map((subscription) => (
                              <TableRow key={subscription.id}>
                                <TableCell>
                                  <div>
                                    <p className="font-medium">{subscription.user}</p>
                                    <p className="text-xs text-muted-foreground">{subscription.email}</p>
                                  </div>
                                </TableCell>
                                <TableCell>{subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1)}</TableCell>
                                <TableCell>
                                  {subscription.status === "active" ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      Active
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                      Cancelled
                                    </span>
                                  )}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  {new Date(subscription.startDate).toLocaleDateString()}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  {subscription.endDate === "N/A"
                                    ? "N/A"
                                    : new Date(subscription.endDate).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                  ${subscription.amount.toFixed(2)}
                                </TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={6} className="text-center py-8">
                                No subscribers found.
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <div className="text-sm text-muted-foreground">
                      Showing {subscriptionData.length} subscriptions
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Previous</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="plans">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Free Plan Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <CardDescription>
                        Basic color analysis and recommendations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">$0</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Color analysis quiz</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Seasonal color palette</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Basic clothing recommendations</span>
                        </div>
                        <div className="flex items-center">
                          <XCircle className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-gray-500">Makeup recommendations</span>
                        </div>
                        <div className="flex items-center">
                          <XCircle className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-gray-500">Hair color suggestions</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full">
                        <p className="text-sm font-medium mb-2">Current users: {stats.freeUsers}</p>
                        <p className="text-xs text-muted-foreground">Conversion rate to premium: {stats.activeSubscribers > 0 ? ((stats.premiumUsers / (stats.freeUsers + stats.premiumUsers + stats.vipUsers)) * 100).toFixed(1) : "0.0"}%</p>
                      </div>
                    </CardFooter>
                  </Card>
                  {/* Premium Plan Card */}
                  <Card className="border-2 border-chromatique-rose/30">
                    <CardHeader>
                      <CardTitle>Premium</CardTitle>
                      <CardDescription>
                        Complete style recommendations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">$9.99<span className="text-sm font-normal">/month</span></div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Color analysis quiz</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Seasonal color palette</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Basic clothing recommendations</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Makeup recommendations</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Hair color suggestions</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full">
                        <p className="text-sm font-medium mb-2">Current users: {stats.premiumUsers}</p>
                        <p className="text-xs text-muted-foreground">Monthly revenue: ${(stats.premiumUsers * 9.99).toFixed(2)}</p>
                      </div>
                    </CardFooter>
                  </Card>
                  {/* VIP Plan Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>VIP</CardTitle>
                      <CardDescription>
                        Premium features plus personal consultation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">$24.99<span className="text-sm font-normal">/month</span></div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>All Premium features</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Personal style consultation</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Custom wardrobe planning</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Seasonal updates</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Priority support</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full">
                        <p className="text-sm font-medium mb-2">Current users: {stats.vipUsers}</p>
                        <p className="text-xs text-muted-foreground">Monthly revenue: ${(stats.vipUsers * 24.99).toFixed(2)}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSubscriptions;
