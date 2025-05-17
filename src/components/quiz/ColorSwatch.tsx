
import { cn } from "@/lib/utils";

type ColorSwatchProps = {
  color: string;
  label: string;
  selected?: boolean;
  onClick: () => void;
};

export function ColorSwatch({ color, label, selected, onClick }: ColorSwatchProps) {
  return (
    <div 
      className="flex flex-col items-center space-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div 
        className={cn(
          "w-16 h-16 rounded-full transition-all duration-200 border-2",
          selected ? "border-chromatique-rose scale-110 shadow-md" : "border-transparent hover:scale-105"
        )}
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
