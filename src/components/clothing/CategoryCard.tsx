
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type CategoryCardProps = {
  id: string;
  name: string;
  image: string;
  className?: string;
};

export function CategoryCard({ id, name, image, className }: CategoryCardProps) {
  const navigate = useNavigate();
  
  return (
    <Card 
      className={cn(
        "overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1",
        className
      )}
      onClick={() => navigate(`/category/${id}`)}
    >
      <div className="aspect-[4/5] relative">
        <img 
          src={image} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <CardContent className="p-4">
            <h3 className="text-white font-serif text-xl font-medium">{name}</h3>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
