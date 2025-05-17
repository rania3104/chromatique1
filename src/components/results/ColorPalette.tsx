
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type ColorSwatchProps = {
  color: string;
  name: string;
  hexCode: string;
};

function ColorSwatchItem({ color, name, hexCode }: ColorSwatchProps) {
  const [showHex, setShowHex] = useState(false);
  
  return (
    <div 
      className="flex flex-col items-center gap-2"
      onClick={() => setShowHex(!showHex)}
    >
      <div 
        className="w-12 h-12 rounded-full shadow-sm cursor-pointer transition-transform hover:scale-110"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs font-medium">{showHex ? hexCode : name}</span>
    </div>
  );
}

type ColorPaletteProps = {
  season: string;
  description: string;
  bestColors: ColorSwatchProps[];
  avoidColors: ColorSwatchProps[];
  className?: string;
};

export function ColorPalette({ 
  season, 
  description, 
  bestColors, 
  avoidColors,
  className
}: ColorPaletteProps) {
  return (
    <Card className={cn("shadow-md", className)}>
      <CardHeader>
        <CardTitle className="text-xl">Your Color Palette: {season}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="wear">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="wear">Colors to Wear</TabsTrigger>
            <TabsTrigger value="avoid">Colors to Avoid</TabsTrigger>
          </TabsList>
          <TabsContent value="wear" className="animate-in">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
              {bestColors.map((color, i) => (
                <ColorSwatchItem key={i} {...color} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="avoid" className="animate-in">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
              {avoidColors.map((color, i) => (
                <ColorSwatchItem key={i} {...color} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
