
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { ColorSwatch } from "@/components/quiz/ColorSwatch";
import { eyeColors } from "@/lib/data";
import { EyeColor as EyeColorType } from "@/lib/types";
import { useChromatique } from "@/lib/context";

const EyeColorPage = () => {
  const navigate = useNavigate();
  const { setUserQuizData } = useChromatique();
  const [selectedColor, setSelectedColor] = useState<EyeColorType | null>(null);
  
  const handleComplete = () => {
    if (selectedColor) {
      setUserQuizData({ eyeColor: selectedColor });
      navigate("/results");
    }
  };
  
  return (
    <QuizLayout
      title="What's your eye color?"
      description="Select the option that best matches your natural eye color"
      step={3}
      totalSteps={3}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-4">
        {eyeColors.map((color) => (
          <ColorSwatch
            key={color.value}
            color={color.color}
            label={color.label}
            selected={selectedColor === color.value}
            onClick={() => setSelectedColor(color.value as EyeColorType)}
          />
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleComplete}
          disabled={!selectedColor}
          className="bg-chromatique-rose hover:bg-chromatique-shallow"
        >
          View My Results
        </Button>
      </div>
    </QuizLayout>
  );
};

export default EyeColorPage;
