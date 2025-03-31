
import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface MemoInfoProps {
  memoTo: string;
  memoDate: Date;
  memoNumber: string;
  onMemoToChange: (value: string) => void;
  onMemoDateChange: (date: Date | undefined) => void;
  onMemoNumberChange: (value: string) => void;
}

const MemoInfo: React.FC<MemoInfoProps> = ({
  memoTo,
  memoDate,
  memoNumber,
  onMemoToChange,
  onMemoDateChange,
  onMemoNumberChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-4">
      <div className="w-full md:w-1/2">
        <div className="flex justify-end items-center mb-2">
          <label className="w-32 text-right pr-2 font-medium">Memo Date:</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[180px] justify-start text-left font-normal",
                  !memoDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {memoDate ? format(memoDate, "MM/dd/yyyy") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={memoDate}
                onSelect={onMemoDateChange}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex justify-end items-center">
          <label className="w-32 text-right pr-2 font-medium">Memo Number:</label>
          <Input
            type="text"
            value={memoNumber}
            onChange={(e) => onMemoNumberChange(e.target.value)}
            className="w-[180px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MemoInfo;
