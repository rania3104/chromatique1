
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
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { CreditCard, User, CheckCircle, XCircle } from "lucide-react";
import { SubscriptionCharts } from "@/components/admin/SubscriptionCharts";
import { getRealUserData, getSubscriptionStats } from "@/lib/imageUtils";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const AdminSubscriptions = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [stats, setStats] = useState({
    totalRevenue: "0.00",
    activeSubscribers: 0,
    conversionRate: "0.0"
  });
  
  useEffect(() => {
    // Check if user is admin
    const adminData = localStorage.getItem("chromatique-admin");
    if (!adminData) {
      navigate("/admin/login");
      return;
    }
    
    try {
      const { isAdmin } = JSON.parse(adminData);
      setIsAdmin(isAdmin);
      
      // Get real subscription data
      const users = getRealUserData();
      const subscriptionStats = getSubscriptionStats();
      
      // Filter users with subscriptions
      const subscriberData = users.map(user => ({
        id: user.id,
        user: user.name || user.email.split('@')[0],
        email: user.email,
        plan: user.subscription,
        amount: user.subscription === "premium" ? 9.99 : user.subscription === "vip" ? 24.99 : 0,
        status: user.status,
        startDate: new Date().toISOString().split('T')[0],
        endDate: user.subscription === "free" ? "N/A" : new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ).toISOString().split('T')[0],
      }));
      
      // Use real data if available, otherwise use sample data
      setSubscriptionData(subscriberData.length > 0 ? subscriberData : []);
      setStats({
        totalRevenue: subscriptionStats.totalRevenue,
        activeSubscribers: subscriptionStats.premiumUsers + subscriptionStats.vipUsers,
        conversionRate: subscriptionStats.conversionRate
      });
      
    } catch (error) {
      navigate("/admin/login");
    }
    
    setIsLoading(false);
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
  
  if (!isAdmin) {
    return null; // Will redirect in the useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      
      <div className="flex flex-1">
        {/* Sidebar for larger screens */}
        <div className="hidden md:block w-64 border-r bg-background">
          <AdminSidebar />
        </div>
        
        {/* Mobile sidebar */}
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
        
        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-serif mb-6">Subscriptions</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Total Revenue Card */}
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
              
              {/* Active Subscribers Card */}
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
              
              {/* Conversion Rate Card */}
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
                {/* Subscription Charts Component */}
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
                                No subscribers found. Create an account and complete the quiz to see subscribers here.
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
                        <p className="text-sm font-medium mb-2">Current users: {getSubscriptionStats().freeUsers || 325}</p>
                        <p className="text-xs text-muted-foreground">Conversion rate to premium: 24.3%</p>
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
                        <p className="text-sm font-medium mb-2">Current users: {getSubscriptionStats().premiumUsers || 210}</p>
                        <p className="text-xs text-muted-foreground">Monthly revenue: ${(getSubscriptionStats().premiumUsers * 9.99).toFixed(2)}</p>
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
                        <p className="text-sm font-medium mb-2">Current users: {getSubscriptionStats().vipUsers || 65}</p>
                        <p className="text-xs text-muted-foreground">Monthly revenue: ${(getSubscriptionStats().vipUsers * 24.99).toFixed(2)}</p>
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
