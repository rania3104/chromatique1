
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { ColorSwatch } from "@/components/quiz/ColorSwatch";
import { skinTones } from "@/lib/data";
import { SkinTone as SkinToneType } from "@/lib/types";
import { useChromatique } from "@/lib/context";

const SkinTonePage = () => {
  const navigate = useNavigate();
  const { setUserQuizData } = useChromatique();
  const [selectedTone, setSelectedTone] = useState<SkinToneType | null>(null);
  
  const handleNext = () => {
    if (selectedTone) {
      setUserQuizData({ skinTone: selectedTone });
      navigate("/quiz/undertone");
    }
  };
  
  return (
    <QuizLayout
      title="What's your skin tone?"
      description="Select the option that best matches your natural skin color"
      step={1}
      totalSteps={3}
      hideBack
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-4">
        {skinTones.map((tone) => (
          <ColorSwatch
            key={tone.value}
            color={tone.color}
            label={tone.label}
            selected={selectedTone === tone.value}
            onClick={() => setSelectedTone(tone.value as SkinToneType)}
          />
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleNext}
          disabled={!selectedTone}
          className="bg-chromatique-rose hover:bg-chromatique-shallow"
        >
          Continue
        </Button>
      </div>
    </QuizLayout>
  );
};

export default SkinTonePage;
