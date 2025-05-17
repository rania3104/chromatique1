
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HelpCircle } from "lucide-react";

type InfoPopoverProps = {
  title: string;
  content: React.ReactNode;
};

export function InfoPopover({ title, content }: InfoPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full h-7 w-7">
          <HelpCircle className="h-4 w-4" />
          <span className="sr-only">Info</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium text-base">{title}</h4>
          <div className="text-sm text-muted-foreground">{content}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
