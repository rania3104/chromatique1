
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SeasonInfoDialog } from "./SeasonInfoDialog";

type SeasonCardProps = {
  season: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  characteristics: string[];
  className?: string;
};

export function SeasonCard({ 
  season, 
  description, 
  colors, 
  characteristics,
  className,
}: SeasonCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div 
        className="h-2" 
        style={{ 
          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.accent})` 
        }}
      />
      <CardHeader>
        <CardTitle className="text-2xl">{season}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {characteristics.map((trait, i) => (
            <Badge key={i} variant="secondary" className="bg-chromatique-cream">
              {trait}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <div
            className="w-8 h-8 rounded-full border border-border"
            style={{ backgroundColor: colors.primary }}
          />
          <div
            className="w-8 h-8 rounded-full border border-border"
            style={{ backgroundColor: colors.secondary }}
          />
          <div
            className="w-8 h-8 rounded-full border border-border"
            style={{ backgroundColor: colors.accent }}
          />
        </div>
        <SeasonInfoDialog season={season}>
          <Button variant="ghost">Learn More</Button>
        </SeasonInfoDialog>
      </CardFooter>
    </Card>
  );
}
