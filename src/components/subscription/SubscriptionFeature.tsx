
import { cn } from "@/lib/utils";
import { useChromatique } from "@/lib/context";
import { Badge } from "@/components/ui/badge";

type SubscriptionFeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  premium?: boolean;
  vipOnly?: boolean;
};

export function SubscriptionFeature({ 
  icon, 
  title, 
  description,
  className,
  premium = false,
  vipOnly = false,
}: SubscriptionFeatureProps) {
  const { isPremiumUser } = useChromatique();
  
  // Get subscription details from localStorage to check if user is VIP
  const storedSubscription = localStorage.getItem("chromatique-subscription");
  const currentPlan = storedSubscription ? JSON.parse(storedSubscription).planId : "free";
  
  const isVipFeature = vipOnly || title.toLowerCase().includes("consultation");
  const isPremiumFeature = premium || isVipFeature;
  
  const isFeatureAvailable = isVipFeature 
    ? currentPlan === "vip" 
    : (isPremiumFeature ? (currentPlan === "premium" || currentPlan === "vip") : true);
  
  return (
    <div className={cn(
      "flex flex-col items-center text-center p-4 relative rounded-lg", 
      !isFeatureAvailable ? "opacity-70" : "",
      isFeatureAvailable ? "bg-white shadow-sm" : "bg-gray-50",
      className
    )}>
      <div className={cn(
        "mb-4 p-3 rounded-full", 
        isFeatureAvailable ? "bg-chromatique-shallow text-white" : "bg-chromatique-cream text-chromatique-rose"
      )}>
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">
        {title}
        {isPremiumFeature && !isVipFeature && (
          <Badge className={cn(
            "ml-2", 
            isFeatureAvailable ? "bg-chromatique-shallow" : "bg-chromatique-taupe"
          )}>
            {isFeatureAvailable ? "Unlocked" : "Premium"}
          </Badge>
        )}
        {isVipFeature && (
          <Badge className={cn(
            "ml-2", 
            currentPlan === "vip" ? "bg-chromatique-shallow" : "bg-chromatique-taupe"
          )}>
            VIP
          </Badge>
        )}
      </h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      
      {!isFeatureAvailable && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[1px] rounded-lg">
          <Badge variant="outline" className="border-chromatique-rose text-chromatique-shallow px-3 py-2">
            {isVipFeature ? "VIP Feature" : "Premium Feature"}
          </Badge>
        </div>
      )}
    </div>
  );
}
