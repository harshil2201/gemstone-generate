
import React from "react";
import { Input } from "@/components/ui/input";
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
    <div className="w-full flex mb-4">
      <div className="w-1/2 border border-black">
        <div className="p-4 h-40">
          <h3 className="font-bold">COMMENTS</h3>
        </div>
      </div>
      <div className="w-1/2">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="w-1/2 p-2 text-right font-bold">SUB TOTAL</td>
              <td className="w-1/2 border border-black p-2 text-right">
                ${subTotal.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 p-2 text-right font-bold">SHIPPING</td>
              <td className="w-1/2 border border-black p-2">
                <Input
                  type="number"
                  value={shipping || ""}
                  onChange={(e) => onShippingChange(parseFloat(e.target.value) || 0)}
                  className="w-full border-none focus:ring-0 p-0 text-right"
                />
              </td>
            </tr>
            <tr>
              <td className="w-1/2 p-2 text-right font-bold">TAX</td>
              <td className="w-1/2 border border-black p-2">
                <Input
                  type="number"
                  value={tax || ""}
                  onChange={(e) => onTaxChange(parseFloat(e.target.value) || 0)}
                  className="w-full border-none focus:ring-0 p-0 text-right"
                />
              </td>
            </tr>
            <tr>
              <td className="w-1/2 p-2 text-right font-bold">TOTAL</td>
              <td className="w-1/2 border border-black p-2 text-right">
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
