
import React from "react";
import CompanyLogo from "./CompanyLogo";
import { Input } from "@/components/ui/input";

interface MemoHeaderProps {
  memoTo: string;
  memoToAddress1: string;
  memoToAddress2: string;
  memoToAddress3: string;
  memoToPhone: string;
  onMemoToChange: (value: string) => void;
  onMemoToAddress1Change: (value: string) => void;
  onMemoToAddress2Change: (value: string) => void;
  onMemoToAddress3Change: (value: string) => void;
  onMemoToPhoneChange: (value: string) => void;
}

const MemoHeader: React.FC<MemoHeaderProps> = ({
  memoTo,
  memoToAddress1,
  memoToAddress2,
  memoToAddress3,
  memoToPhone,
  onMemoToChange,
  onMemoToAddress1Change,
  onMemoToAddress2Change,
  onMemoToAddress3Change,
  onMemoToPhoneChange
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between mb-4">
      <div className="flex flex-col items-center md:items-start">
        <CompanyLogo />
        <div className="text-center md:text-left mt-2">
          <h2 className="font-bold text-xl">AURORA GEMS AND JEWELS INC</h2>
          <p className="text-sm italic">ENDLESS POSSIBILITIES, LIMITLESS OPPORTUNITIES</p>
          <p className="text-xs">550 S. Hill St., Suite 605, Los Angeles, CA 90013</p>
          <p className="text-xs">Tel: 408-771-8135 Wp: 747-366-2296</p>
          <p className="text-xs">E-mail: auroragemsjewels@gmail.com</p>
        </div>
      </div>
      <div className="text-center md:text-right mt-4 md:mt-0">
        <h1 className="text-3xl font-bold tracking-wider mb-6">MEMORANDUM</h1>
        <div className="border border-black p-4">
          <div className="grid grid-cols-7 gap-2">
            <div className="col-span-1 font-bold text-center flex flex-col">
              <span>M</span>
              <span>E</span>
              <span>M</span>
              <span>O</span>
              <br />
              <span>T</span>
              <span>O</span>
            </div>
            <div className="col-span-6">
              <Input
                className="font-bold border-none p-0 h-auto"
                value={memoTo}
                onChange={(e) => onMemoToChange(e.target.value)}
              />
              <Input 
                className="text-sm border-none p-0 h-auto" 
                value={memoToAddress1}
                onChange={(e) => onMemoToAddress1Change(e.target.value)}
              />
              <Input 
                className="text-sm border-none p-0 h-auto" 
                value={memoToAddress2}
                onChange={(e) => onMemoToAddress2Change(e.target.value)}
              />
              <Input 
                className="text-sm border-none p-0 h-auto" 
                value={memoToAddress3}
                onChange={(e) => onMemoToAddress3Change(e.target.value)}
              />
              <Input 
                className="text-sm border-none p-0 h-auto" 
                value={memoToPhone}
                onChange={(e) => onMemoToPhoneChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoHeader;
