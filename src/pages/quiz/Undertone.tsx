
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { InfoPopover } from "@/components/quiz/InfoPopover";
import { undertones } from "@/lib/data";
import { Undertone as UndertoneType } from "@/lib/types";
import { useChromatique } from "@/lib/context";

const UndertonePage = () => {
  const navigate = useNavigate();
  const { setUserQuizData } = useChromatique();
  const [selectedUndertone, setSelectedUndertone] = useState<UndertoneType | null>(null);
  
  const handleNext = () => {
    if (selectedUndertone) {
      setUserQuizData({ undertone: selectedUndertone });
      navigate("/quiz/eye-color");
    }
  };
  
  return (
    <QuizLayout
      title="What's your skin's undertone?"
      description="This helps determine which colors will complement your complexion"
      step={2}
      totalSteps={3}
    >
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-medium">Not sure? </h3>
        <InfoPopover 
          title="How to determine your undertone" 
          content={
            <div className="space-y-3">
              <p>Look at the veins on your wrist:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Green veins = Warm undertone</li>
                <li>Blue/purple veins = Cool undertone</li>
                <li>Both colors = Neutral undertone</li>
                <li>Green with a hint of gray = Olive undertone</li>
              </ul>
              <p>Or consider how your skin reacts to sun:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tans easily = Typically warm or olive</li>
                <li>Burns easily = Typically cool</li>
              </ul>
            </div>
          } 
        />
      </div>
      
      <RadioGroup className="gap-4">
        {undertones.map((undertone) => (
          <div key={undertone.value} className="flex">
            <Card
              className={`w-full cursor-pointer transition-all ${
                selectedUndertone === undertone.value
                  ? "border-chromatique-rose ring-2 ring-chromatique-rose ring-offset-2"
                  : "hover:border-chromatique-taupe"
              }`}
              onClick={() => setSelectedUndertone(undertone.value as UndertoneType)}
            >
              <CardContent className="p-4 flex items-center gap-4">
                <RadioGroupItem 
                  value={undertone.value} 
                  id={undertone.value}
                  checked={selectedUndertone === undertone.value}
                  className="data-[state=checked]:border-chromatique-rose data-[state=checked]:text-chromatique-rose"
                />
                <div>
                  <Label htmlFor={undertone.value} className="text-base font-medium">
                    {undertone.label}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {undertone.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </RadioGroup>
      
      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleNext}
          disabled={!selectedUndertone}
          className="bg-chromatique-rose hover:bg-chromatique-shallow"
        >
          Continue
        </Button>
      </div>
    </QuizLayout>
  );
};

export default UndertonePage;
