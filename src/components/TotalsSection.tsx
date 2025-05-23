
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GemstoneItem } from "./GemstoneTable";

interface TotalsSectionProps {
  gemstones: GemstoneItem[];
  shipping: number;
  tax: number;
  onShippingChange: (value: number) => void;
  onTaxChange: (value: number) => void;
}

const TotalsSection: React.FC<TotalsSectionProps> = ({
  gemstones,
  shipping,
  tax,
  onShippingChange,
  onTaxChange,
}) => {
  const calculateSubTotal = () => {
    return gemstones.reduce((sum, item) => {
      return sum + item.carat * item.pricePerCt;
    }, 0);
  };

  const subTotal = calculateSubTotal();
  const total = subTotal + shipping + tax;

  return (
    <div className="w-full flex flex-col md:flex-row mb-4">
      <div className="w-full md:w-1/2 border border-black print:border-1 print:border-black">
        <div className="p-4 h-40">
          <h3 className="font-bold">COMMENTS</h3>
          <Textarea 
            className="w-full h-28 mt-2 border-none focus:ring-0 p-0 resize-none bg-transparent" 
            placeholder="Enter your comments here..."
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <table className="w-full border-collapse border border-black print:border-1 print:border-black">
          <tbody>
            <tr>
              <td className="w-1/2 p-2 text-right font-bold">SUB TOTAL</td>
              <td className="w-1/2 border border-black p-2 text-right print:border-1 print:border-black">
                ${subTotal.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 p-2 text-right font-bold">SHIPPING</td>
              <td className="w-1/2 border border-black p-2 print:border-1 print:border-black">
                <Input
                  type="number"
                  value={shipping || ""}
                  onChange={(e) => onShippingChange(parseFloat(e.target.value) || 0)}
                  className="w-full border-none focus:ring-0 p-0 text-right bg-transparent"
                />
              </td>
            </tr>
            <tr>
              <td className="w-1/2 p-2 text-right font-bold">TAX</td>
              <td className="w-1/2 border border-black p-2 print:border-1 print:border-black">
                <Input
                  type="number"
                  value={tax || ""}
                  onChange={(e) => onTaxChange(parseFloat(e.target.value) || 0)}
                  className="w-full border-none focus:ring-0 p-0 text-right bg-transparent"
                />
              </td>
            </tr>
            <tr>
              <td className="w-1/2 p-2 text-right font-bold">TOTAL</td>
              <td className="w-1/2 border border-black p-2 text-right print:border-1 print:border-black">
                ${total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalsSection;
