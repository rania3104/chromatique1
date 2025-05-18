
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type PlanFeature = {
  name: string;
  included: boolean;
};

type PlanCardProps = {
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  isActive?: boolean;
  onSelect: () => void;
  onCancel?: () => void;
  className?: string;
};

export function PlanCard({
  name,
  price,
  description,
  features,
  isPopular,
  isActive,
  onSelect,
  onCancel,
  className,
}: PlanCardProps) {
  return (
    <Card className={cn(
      "relative",
      isActive && "border-2 border-chromatique-shallow ring-2 ring-chromatique-rose/30",
      className
    )}>
      {isPopular && !isActive && (
        <Badge className="absolute top-4 right-4 bg-chromatique-rose hover:bg-chromatique-rose/90">
          Most Popular
        </Badge>
      )}
      
      {isActive && (
        <Badge className="absolute top-4 right-4 bg-chromatique-shallow hover:bg-chromatique-shallow">
          Your Plan
        </Badge>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className={cn(
                "mr-2 h-4 w-4", 
                feature.included ? "text-chromatique-rose" : "text-muted-foreground"
              )} />
              <span className={cn(
                "text-sm",
                !feature.included && "text-muted-foreground line-through"
              )}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {isActive ? (
          <Button 
            onClick={onCancel}
            variant="outline"
            className="w-full border-chromatique-shallow text-chromatique-shallow hover:bg-chromatique-shallow/10"
          >
            Cancel Plan
          </Button>
        ) : (
          <Button 
            onClick={onSelect} 
            className={cn(
              "w-full", 
              isPopular ? "bg-chromatique-rose hover:bg-chromatique-shallow" : ""
            )}
          >
            Choose Plan
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
