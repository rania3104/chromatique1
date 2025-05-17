
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type QuizLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
  step: number;
  totalSteps: number;
  onBack?: () => void;
  hideBack?: boolean;
};

export function QuizLayout({
  children,
  title,
  description,
  step,
  totalSteps,
  onBack,
  hideBack,
}: QuizLayoutProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 animate-in">
      <Progress value={(step / totalSteps) * 100} className="h-1 mb-8" />
      
      <div className="mb-6">
        {!hideBack && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="text-chromatique-taupe hover:text-chromatique-shallow mb-2"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
        )}
        <h1 className="text-3xl font-serif font-medium">{title}</h1>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
      
      <Card className="p-1">
        <div className="p-4">
          {children}
        </div>
      </Card>
    </div>
  );
}
