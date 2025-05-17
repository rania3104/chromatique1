
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";

const AdminSettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState({
    siteName: "Chromatique",
    siteDescription: "Your personal color analysis and fashion guide",
    enableNewSignups: true,
    requireEmailVerification: true,
    allowSocialAuth: false,
    smtpHost: "smtp.example.com",
    smtpPort: "587",
    smtpUser: "noreply@chromatique.com",
    smtpPass: "••••••••••••",
    adminEmail: "admin@chromatique.com",
    notifyOnNewUsers: true,
    weeklyReports: true,
    maintenanceMode: false,
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
    } catch (error) {
      navigate("/admin/login");
    }
    
    setIsLoading(false);
  }, [navigate]);
  
  const handleSaveGeneralSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your general settings have been updated successfully.",
    });
  };
  
  const handleSaveEmailSettings = () => {
    toast({
      title: "Email settings saved",
      description: "Your email configuration has been updated successfully.",
    });
  };
  
  const handleSaveNotificationSettings = () => {
    toast({
      title: "Notification settings saved",
      description: "Your notification preferences have been updated successfully.",
    });
  };
  
  const handleEnableMaintenanceMode = (enabled: boolean) => {
    setSettings({...settings, maintenanceMode: enabled});
    toast({
      title: enabled ? "Maintenance mode enabled" : "Maintenance mode disabled",
      description: enabled 
        ? "The site is now in maintenance mode. Only admins can access it." 
        : "The site is now accessible to all users.",
    });
  };
  
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
            <h1 className="text-3xl font-serif mb-6">Settings</h1>
            
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>
                      Configure the basic settings for your application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => { e.preventDefault(); handleSaveGeneralSettings(); }}>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="site-name" className="text-sm font-medium">
                              Site Name
                            </label>
                            <Input 
                              id="site-name" 
                              value={settings.siteName}
                              onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                            />
                            <p className="text-xs text-muted-foreground">
                              The name of your application
                            </p>
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="site-description" className="text-sm font-medium">
                              Site Description
                            </label>
                            <Input 
                              id="site-description"
                              value={settings.siteDescription}
                              onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                            />
                            <p className="text-xs text-muted-foreground">
                              A brief description of your application
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <label className="text-sm font-medium">Enable New Sign-ups</label>
                              <p className="text-xs text-muted-foreground">
                                Allow new users to create an account
                              </p>
                            </div>
                            <Switch 
                              checked={settings.enableNewSignups}
                              onCheckedChange={(checked) => setSettings({...settings, enableNewSignups: checked})}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <label className="text-sm font-medium">Require Email Verification</label>
                              <p className="text-xs text-muted-foreground">
                                Require users to verify their email before accessing the app
                              </p>
                            </div>
                            <Switch 
                              checked={settings.requireEmailVerification}
                              onCheckedChange={(checked) => setSettings({...settings, requireEmailVerification: checked})}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <label className="text-sm font-medium">Allow Social Authentication</label>
                              <p className="text-xs text-muted-foreground">
                                Enable sign-in with Google, Facebook, etc.
                              </p>
                            </div>
                            <Switch 
                              checked={settings.allowSocialAuth}
                              onCheckedChange={(checked) => setSettings({...settings, allowSocialAuth: checked})}
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit">Save Changes</Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="email">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Configuration</CardTitle>
                    <CardDescription>
                      Configure the email settings for your application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => { e.preventDefault(); handleSaveEmailSettings(); }}>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="smtp-host" className="text-sm font-medium">
                              SMTP Host
                            </label>
                            <Input 
                              id="smtp-host" 
                              value={settings.smtpHost}
                              onChange={(e) => setSettings({...settings, smtpHost: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="smtp-port" className="text-sm font-medium">
                              SMTP Port
                            </label>
                            <Input 
                              id="smtp-port" 
                              value={settings.smtpPort}
                              onChange={(e) => setSettings({...settings, smtpPort: e.target.value})}
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="smtp-user" className="text-sm font-medium">
                              SMTP Username
                            </label>
                            <Input 
                              id="smtp-user" 
                              value={settings.smtpUser}
                              onChange={(e) => setSettings({...settings, smtpUser: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="smtp-pass" className="text-sm font-medium">
                              SMTP Password
                            </label>
                            <Input 
                              id="smtp-pass" 
                              type="password" 
                              value={settings.smtpPass}
                              onChange={(e) => setSettings({...settings, smtpPass: e.target.value})}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="admin-email" className="text-sm font-medium">
                            Admin Email
                          </label>
                          <Input 
                            id="admin-email" 
                            type="email" 
                            value={settings.adminEmail}
                            onChange={(e) => setSettings({...settings, adminEmail: e.target.value})}
                          />
                          <p className="text-xs text-muted-foreground">
                            Admin notifications will be sent to this email
                          </p>
                        </div>
                        
                        <div className="flex justify-between">
                          <Button variant="outline" type="button" onClick={() => {
                            toast({
                              title: "Test email sent",
                              description: "A test email has been sent to the admin email.",
                            });
                          }}>
                            Send Test Email
                          </Button>
                          <Button type="submit">Save Changes</Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Configure when and how you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => { e.preventDefault(); handleSaveNotificationSettings(); }}>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <label className="text-sm font-medium">New User Notifications</label>
                              <p className="text-xs text-muted-foreground">
                                Receive a notification when a new user signs up
                              </p>
                            </div>
                            <Switch 
                              checked={settings.notifyOnNewUsers}
                              onCheckedChange={(checked) => setSettings({...settings, notifyOnNewUsers: checked})}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <label className="text-sm font-medium">Weekly Reports</label>
                              <p className="text-xs text-muted-foreground">
                                Receive weekly usage and analytics reports
                              </p>
                            </div>
                            <Switch 
                              checked={settings.weeklyReports}
                              onCheckedChange={(checked) => setSettings({...settings, weeklyReports: checked})}
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit">Save Changes</Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="maintenance">
                <Card>
                  <CardHeader>
                    <CardTitle>Maintenance Mode</CardTitle>
                    <CardDescription>
                      Put the application into maintenance mode to perform updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <label className="text-sm font-medium">Enable Maintenance Mode</label>
                          <p className="text-xs text-muted-foreground">
                            When enabled, only administrators can access the site
                          </p>
                        </div>
                        <Switch 
                          checked={settings.maintenanceMode}
                          onCheckedChange={handleEnableMaintenanceMode}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2">Database Operations</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" type="button" onClick={() => {
                            toast({
                              title: "Backup created",
                              description: "A database backup has been created successfully.",
                            });
                          }}>
                            Create Backup
                          </Button>
                          <Button variant="outline" type="button" onClick={() => {
                            toast({
                              title: "Cache cleared",
                              description: "The application cache has been cleared successfully.",
                            });
                          }}>
                            Clear Cache
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSettings;
