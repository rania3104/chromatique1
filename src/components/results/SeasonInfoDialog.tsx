
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { seasons } from "@/lib/data";
import { Season } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { InfoIcon } from "lucide-react";

type SeasonInfoDialogProps = {
  season: string;
  children: React.ReactNode;
};

export function SeasonInfoDialog({ season, children }: SeasonInfoDialogProps) {
  const { toast } = useToast();
  // Extract the season key from the format "Cool Winter" -> "cool-winter"
  const seasonKey = season
    .toLowerCase()
    .replace(/\s+/g, '-') as Season;
  
  // Get season info or fallback to winter if not found
  const seasonInfo = seasons[seasonKey] || seasons["cool-winter"];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif flex items-center gap-2">
            <InfoIcon className="h-5 w-5 text-chromatique-rose" />
            {seasonInfo.name}
          </DialogTitle>
          <DialogDescription className="pt-2">{seasonInfo.description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row gap-6 py-4">
          <div className="md:flex-1">
            <h3 className="font-medium mb-2">Key Characteristics:</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {seasonInfo.characteristics.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </div>
          
          <div className="md:flex-1">
            <h3 className="font-medium mb-2">Recommended Colors:</h3>
            <div className="grid grid-cols-2 gap-2">
              {seasonInfo.bestColors.map((color, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded-full border border-border"
                    style={{ backgroundColor: color.hexCode }}
                  />
                  <span className="text-sm">{color.name} <span className="text-xs text-muted-foreground">{color.hexCode}</span></span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:flex-1">
            <h3 className="font-medium mb-2">Colors to Avoid:</h3>
            <div className="grid grid-cols-2 gap-2">
              {seasonInfo.avoidColors.map((color, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded-full border border-border"
                    style={{ backgroundColor: color.hexCode }}
                  />
                  <span className="text-sm">{color.name} <span className="text-xs text-muted-foreground">{color.hexCode}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
