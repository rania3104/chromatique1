
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { PlanCard } from "@/components/subscription/PlanCard";
import { SubscriptionFeature } from "@/components/subscription/SubscriptionFeature";
import { subscriptionPlans } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Circle, 
  Gift, 
  Lock, 
  Star, 
  Unlock, 
  Palette, 
  Scissors, 
  MessageSquare,
  Calendar,
  User
} from "lucide-react";
import { useChromatique } from "@/lib/context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dialog,
  DialogContent, 
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { seasons } from "@/lib/data";

const Subscription = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isPremiumUser, setIsPremiumUser, user } = useChromatique();
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("features");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedStylist, setSelectedStylist] = useState<number | null>(null);
  const [currentPlan, setCurrentPlan] = useState(() => {
    const storedSubscription = localStorage.getItem("chromatique-subscription");
    if (storedSubscription) {
      const subscription = JSON.parse(storedSubscription);
      return subscription?.planId || "free";
    }
    return "free";
  });
  
  // Dummy stylists data
  const stylists = [
    { id: 1, name: "Emma Wilson", specialty: "Color Analysis Expert", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", availability: "Mon, Wed, Fri" },
    { id: 2, name: "Michael Chen", specialty: "Wardrobe Styling", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", availability: "Tue, Thu, Sat" },
    { id: 3, name: "Sophia Rodriguez", specialty: "Personal Shopper", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", availability: "Wed, Fri, Sun" }
  ];
  
  const handleSelectPlan = (planId: string) => {
    if (currentPlan === planId) return;
    
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentPlan(planId);
      
      if (planId === "free") {
        setIsPremiumUser(false);
        localStorage.setItem(
          "chromatique-subscription",
          JSON.stringify({ planId, status: "active" })
        );
        
        toast({
          title: "You're on the Basic Plan",
          description: "You can upgrade anytime to access premium features.",
        });
      } else {
        // Update premium status
        setIsPremiumUser(true);
        
        // In a real app, this would integrate with a payment processor
        localStorage.setItem(
          "chromatique-subscription",
          JSON.stringify({ planId, status: "active" })
        );
        
        toast({
          title: `Subscription Activated!`,
          description: `Thank you for subscribing to Chromatique ${planId === "premium" ? "Premium" : "VIP"}.`,
        });
      }
      
      // Stay on the subscription page instead of redirecting to results
      window.location.reload();
    }, 1500);
  };
  
  const handleCancelPlan = () => {
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Reset to free plan
      setCurrentPlan("free");
      setIsPremiumUser(false);
      
      localStorage.setItem(
        "chromatique-subscription",
        JSON.stringify({ planId: "free", status: "active" })
      );
      
      toast({
        title: "Subscription Cancelled",
        description: "You've been downgraded to the Basic Plan.",
      });
      
      // Reload the page to show updated plan
      window.location.reload();
    }, 1000);
  };
  
  const handleBookConsultation = () => {
    if (selectedStylist !== null) {
      setIsConsultationOpen(false);
      toast({
        title: "Consultation Booked!",
        description: `Your consultation with ${stylists.find(s => s.id === selectedStylist)?.name} has been scheduled. Check your email for details.`,
      });
      setSelectedStylist(null);
    } else {
      toast({
        title: "Please select a stylist",
        description: "You need to select a stylist to book a consultation.",
      });
    }
  };
  
  const isVipUser = currentPlan === "vip";
  const hasPremiumAccess = currentPlan === "premium" || currentPlan === "vip";
  const userSeason = user?.season;
  
  // Get the user's season data for recommendations
  const seasonData = userSeason ? seasons[userSeason] : null;
  const bestColors = seasonData?.bestColors || [];
  
  // For makeup colors, let's use season-appropriate colors
  const getMakeupColors = () => {
    if (!seasonData) return [];
    
    // Create makeup recommendations based on the season type
    if (userSeason?.includes("winter")) {
      return [
        { name: "Berry", hexCode: "#8A2BE2" },
        { name: "Plum", hexCode: "#8E4585" },
        { name: "Ruby", hexCode: "#E0115F" },
        { name: "Ice Pink", hexCode: "#FFD1DC" },
        { name: "Navy", hexCode: "#000080" },
        { name: "Silver", hexCode: "#C0C0C0" }
      ];
    } else if (userSeason?.includes("summer")) {
      return [
        { name: "Rose Pink", hexCode: "#FF66CC" },
        { name: "Soft Mauve", hexCode: "#D8B2D1" },
        { name: "Powder Blue", hexCode: "#B0E0E6" },
        { name: "Periwinkle", hexCode: "#CCCCFF" },
        { name: "Dusty Rose", hexCode: "#DCAE96" },
        { name: "Lavender", hexCode: "#E6E6FA" }
      ];
    } else if (userSeason?.includes("spring")) {
      return [
        { name: "Peach", hexCode: "#FFE5B4" },
        { name: "Coral", hexCode: "#FF7F50" },
        { name: "Warm Pink", hexCode: "#FF69B4" },
        { name: "Turquoise", hexCode: "#40E0D0" },
        { name: "Mint", hexCode: "#98FB98" },
        { name: "Light Gold", hexCode: "#FFD700" }
      ];
    } else if (userSeason?.includes("autumn")) {
      return [
        { name: "Copper", hexCode: "#B87333" },
        { name: "Terracotta", hexCode: "#E2725B" },
        { name: "Rust", hexCode: "#B7410E" },
        { name: "Olive", hexCode: "#808000" },
        { name: "Bronze", hexCode: "#CD7F32" },
        { name: "Warm Brown", hexCode: "#964B00" }
      ];
    }
    
    // Default fallback palette if season can't be determined
    return [
      { name: "Plum", hexCode: "#8E4585" },
      { name: "Mauve", hexCode: "#E0B0FF" },
      { name: "Taupe", hexCode: "#483C32" },
      { name: "Copper", hexCode: "#B87333" },
      { name: "Bronze", hexCode: "#CD7F32" },
      { name: "Berry", hexCode: "#8A2BE2" }
    ];
  };
  
  // Get complementary hair colors based on season
  const getHairColors = () => {
    if (!seasonData) return { primary: "#000000", secondary: "#333333" };
    
    if (userSeason?.includes("winter")) {
      return { 
        primary: "#1A1110", // Almost black
        secondary: "#534B4F" // Cool charcoal
      };
    } else if (userSeason?.includes("summer")) {
      return { 
        primary: "#4E4E4E", // Cool medium ash brown
        secondary: "#A59C94" // Light ash blonde
      };
    } else if (userSeason?.includes("spring")) {
      return { 
        primary: "#8B5A2B", // Golden brown
        secondary: "#DAA520" // Golden blonde
      };
    } else if (userSeason?.includes("autumn")) {
      return { 
        primary: "#5C3317", // Warm chocolate brown
        secondary: "#D4A76A" // Golden honey
      };
    }
    
    // Default fallback
    return {
      primary: "#2C1A1D", // Cool dark brown
      secondary: "#A79E8B" // Cool ash tone
    };
  };
  
  const makeupColors = getMakeupColors();
  const hairColors = getHairColors();
  
  return (
    <>
      <Header />
      <main className="container px-4 py-8 animate-in">
        {currentPlan !== "free" && (
          <div className="bg-gradient-to-r from-chromatique-rose/80 to-chromatique-deep/80 text-white p-4 rounded-lg mb-10 text-center">
            <h2 className="text-xl font-medium">
              You're currently on Chromatique {currentPlan === "premium" ? "Premium" : "VIP"}
            </h2>
            <p className="mt-2">Enjoy all our exclusive features for personalized style recommendations</p>
          </div>
        )}
        
        <section className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Elevate Your Style Journey
          </h1>
          <p className="text-lg text-chromatique-taupe">
            Choose the plan that fits your style needs
          </p>
        </section>
        
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                isActive={currentPlan === plan.id}
                onSelect={() => handleSelectPlan(plan.id)}
                onCancel={currentPlan === plan.id ? handleCancelPlan : undefined}
              />
            ))}
          </div>
          
          {isProcessing && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="animate-spin w-12 h-12 border-4 border-chromatique-rose border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-lg">Processing your subscription...</p>
              </div>
            </div>
          )}
        </section>
        
        {user?.season && (
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-serif text-center mb-6">Your Style Features</h2>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="premium" disabled={!hasPremiumAccess}>
                  {!hasPremiumAccess && <Lock className="h-3 w-3 mr-1" />}
                  Beauty
                </TabsTrigger>
                <TabsTrigger value="consultation" disabled={!isVipUser}>
                  {!isVipUser && <Lock className="h-3 w-3 mr-1" />}
                  Consultation
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="animate-in">
                <div className="grid md:grid-cols-3 gap-8">
                  <SubscriptionFeature
                    icon={<Circle className="h-6 w-6" />}
                    title="Color Analysis"
                    description="Get personalized color palette based on your natural features."
                    premium={false}
                  />
                  <SubscriptionFeature
                    icon={<Unlock className="h-6 w-6" />}
                    title="Basic Recommendations"
                    description="See clothing recommendations that match your color season."
                    premium={false}
                  />
                  <SubscriptionFeature
                    icon={<Star className="h-6 w-6" />}
                    title="Wishlist Creation"
                    description="Save your favorite items to view them later."
                    premium={false}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="premium" className="animate-in">
                <div className="grid md:grid-cols-3 gap-8">
                  <SubscriptionFeature
                    icon={<Palette className="h-6 w-6" />}
                    title="Makeup Recommendations"
                    description="Get personalized makeup suggestions that complement your seasonal color palette."
                    premium={true}
                  />
                  <SubscriptionFeature
                    icon={<Scissors className="h-6 w-6" />}
                    title="Hair Color & Style Advice"
                    description="Discover the most flattering hair colors and styles for your features."
                    premium={true}
                  />
                  <SubscriptionFeature
                    icon={<Gift className="h-6 w-6" />}
                    title="Jewelry Selection"
                    description="Find the perfect metals and gemstones that enhance your natural beauty."
                    premium={true}
                  />
                </div>
                
                {hasPremiumAccess && seasonData && (
                  <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-4 text-center">Your {seasonData.name} Recommendations</h3>
                    
                    <div className="grid md:grid-cols-3 gap-8 mt-6">
                      {/* Makeup Recommendations */}
                      <div className="space-y-3">
                        <h4 className="font-medium flex items-center"><Palette className="h-4 w-4 mr-2" /> Makeup Colors</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {makeupColors.slice(0, 6).map((color, idx) => (
                            <div key={idx} className="text-center">
                              <div 
                                className="w-12 h-12 rounded-full mx-auto mb-1" 
                                style={{ backgroundColor: color.hexCode }}
                              ></div>
                              <span className="text-xs">{color.name}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Best makeup shades: {makeupColors.slice(0, 3).map(c => c.name).join(', ')}
                        </p>
                      </div>
                      
                      {/* Hair Recommendations */}
                      <div className="space-y-3">
                        <h4 className="font-medium flex items-center"><Scissors className="h-4 w-4 mr-2" /> Hair Colors</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: hairColors.primary }}></div>
                            <span>Base color</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: hairColors.secondary }}></div>
                            <span>Highlight tones</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {seasonData.characteristics.includes('Warm') 
                            ? 'Warm hair colors with golden undertones work best for your season.' 
                            : 'Cool hair colors with ashy undertones work best for your season.'}
                        </p>
                      </div>
                      
                      {/* Jewelry Recommendations */}
                      <div className="space-y-3">
                        <h4 className="font-medium flex items-center"><Gift className="h-4 w-4 mr-2" /> Jewelry Metals</h4>
                        <div className="space-y-2">
                          {seasonData.characteristics.includes('Warm') ? (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(45deg, #D4AF37, #FBF5E0)' }}></div>
                                <span>Gold</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(45deg, #B87333, #FBE9DB)' }}></div>
                                <span>Copper & Bronze</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(45deg, #C0C0C0, #E8E8E8)' }}></div>
                                <span>Silver & White Gold</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(45deg, #8AB4F8, #C7DCFF)' }}></div>
                                <span>Platinum</span>
                              </div>
                            </>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {seasonData.characteristics.includes('Warm') 
                            ? 'Warm metals enhance your natural coloring.' 
                            : 'Cool metals complement your natural coloring.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentPlan === "free" && (
                  <div className="text-center mt-8">
                    <Button 
                      onClick={() => handleSelectPlan("premium")}
                      className="bg-chromatique-rose hover:bg-chromatique-deep"
                    >
                      Upgrade to Premium
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="consultation" className="animate-in">
                <div className="max-w-2xl mx-auto bg-gradient-to-r from-chromatique-rose/10 to-chromatique-deep/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-medium mb-3">Personal Style Consultation</h3>
                  <p className="mb-6">
                    Connect with our professional stylists for a personalized 1-on-1 consultation session
                  </p>
                  
                  {isVipUser ? (
                    <Button 
                      variant="outline"
                      onClick={() => setIsConsultationOpen(true)}
                    >Book Your Consultation</Button>
                  ) : (
                    <Button 
                      onClick={() => handleSelectPlan("vip")}
                      className="bg-chromatique-rose hover:bg-chromatique-deep"
                    >
                      Upgrade to VIP for Consultations
                    </Button>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}
        
        <section className="mt-16 text-center">
          <Button
            variant="outline"
            onClick={() => navigate("/results")}
          >
            Return to My Results
          </Button>
        </section>
      </main>
      
      {/* Consultation Booking Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Book Your Style Consultation</DialogTitle>
            <DialogDescription>
              Select a stylist for your personalized one-on-one consultation session
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {stylists.map(stylist => (
              <div 
                key={stylist.id}
                className={`p-4 border rounded-lg transition-all cursor-pointer ${
                  selectedStylist === stylist.id ? 'border-chromatique-deep bg-chromatique-rose/10' : 'hover:border-chromatique-rose'
                }`}
                onClick={() => setSelectedStylist(stylist.id)}
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3">
                  <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-medium text-center">{stylist.name}</h4>
                <p className="text-sm text-muted-foreground text-center">{stylist.specialty}</p>
                <div className="flex items-center justify-center mt-2 gap-1">
                  <Calendar className="h-4 w-4 text-chromatique-rose" />
                  <span className="text-xs">{stylist.availability}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setIsConsultationOpen(false)}>Cancel</Button>
            <Button 
              onClick={handleBookConsultation}
              disabled={selectedStylist === null}
              className="bg-chromatique-rose hover:bg-chromatique-deep"
            >
              Book Consultation
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Subscription;
