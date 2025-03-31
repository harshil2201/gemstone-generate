
import React, { useState, useRef } from "react";
import MemoHeader from "@/components/MemoHeader";
import MemoInfo from "@/components/MemoInfo";
import CustomerInfo from "@/components/CustomerInfo";
import GemstoneTable, { GemstoneItem } from "@/components/GemstoneTable";
import TotalsSection from "@/components/TotalsSection";
import BankDetails from "@/components/BankDetails";
import ActionButtons from "@/components/ActionButtons";

const Index = () => {
  // State for memo information
  const [memoTo, setMemoTo] = useState("RISH DIAMOND");
  const [memoToAddress1, setMemoToAddress1] = useState("550 S Hill 💎");
  const [memoToAddress2, setMemoToAddress2] = useState("SUITE 812");
  const [memoToAddress3, setMemoToAddress3] = useState("LOS ANGELES, CA 90013");
  const [memoToPhone, setMemoToPhone] = useState("213-926-6262");
  const [memoDate, setMemoDate] = useState<Date>(new Date());
  const [memoNumber, setMemoNumber] = useState("10396");
  
  // State for customer information
  const [customer, setCustomer] = useState("1001");
  const [dueDate, setDueDate] = useState("03/29/2023");
  
  // State for gemstone table
  const [gemstones, setGemstones] = useState<GemstoneItem[]>([
    {
      id: "1",
      no: 1,
      lotNumber: "IV41-333",
      carat: 2.01,
      description: "LG660479905 PRN 2.01 E VVS2 IGI WITH CERT",
      pricePerCt: 134,
    },
    {
      id: "2",
      no: 2,
      lotNumber: "IV57-757",
      carat: 2.03,
      description: "LG681580153 HRT 2.03 E VS1 IGI WITH CERT",
      pricePerCt: 140,
    },
    {
      id: "3",
      no: 3,
      lotNumber: "IV59-186",
      carat: 2.03,
      description: "LG681580536 HRT 2.03 E VS1 IGI WITH CERT",
      pricePerCt: 140,
    },
  ]);
  
  // State for totals section
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  
  // Ref for the memo preview
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white p-8 shadow-lg print:shadow-none" ref={previewRef} id="memo-preview">
          <MemoHeader 
            memoTo={memoTo}
            memoToAddress1={memoToAddress1}
            memoToAddress2={memoToAddress2}
            memoToAddress3={memoToAddress3}
            memoToPhone={memoToPhone}
            onMemoToChange={setMemoTo}
            onMemoToAddress1Change={setMemoToAddress1}
            onMemoToAddress2Change={setMemoToAddress2}
            onMemoToAddress3Change={setMemoToAddress3}
            onMemoToPhoneChange={setMemoToPhone}
          />
          
          <MemoInfo 
            memoTo={memoTo}
            memoDate={memoDate}
            memoNumber={memoNumber}
            onMemoToChange={setMemoTo}
            onMemoDateChange={(date) => date && setMemoDate(date)}
            onMemoNumberChange={setMemoNumber}
          />
          
          <CustomerInfo 
            customer={customer}
            terms="NET 7 DAYS"
            shipVia="DELIVERY"
            purchaseOrder=""
            sp="OF"
            dueDate={dueDate}
            onCustomerChange={setCustomer}
            onDueDateChange={setDueDate}
          />
          
          <GemstoneTable 
            gemstones={gemstones}
            onGemstonesChange={setGemstones}
          />
          
          <TotalsSection 
            gemstones={gemstones}
            shipping={shipping}
            tax={tax}
            onShippingChange={setShipping}
            onTaxChange={setTax}
          />
          
          <BankDetails />
        </div>
        
        <ActionButtons 
          memoData={{
            memoTo,
            memoDate,
            memoNumber,
            customer,
            dueDate,
            gemstones,
            shipping,
            tax
          }}
          previewRef={previewRef}
        />
      </div>
    </div>
  );
};

export default Index;
