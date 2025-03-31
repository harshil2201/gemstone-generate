
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash } from "lucide-react";

export interface GemstoneItem {
  id: string;
  no: number;
  lotNumber: string;
  carat: number;
  description: string;
  pricePerCt: number;
}

interface GemstoneTableProps {
  gemstones: GemstoneItem[];
  onGemstonesChange: (gemstones: GemstoneItem[]) => void;
}

const GemstoneTable: React.FC<GemstoneTableProps> = ({
  gemstones,
  onGemstonesChange,
}) => {
  const addRow = () => {
    const newGemstone: GemstoneItem = {
      id: crypto.randomUUID(),
      no: gemstones.length + 1,
      lotNumber: "",
      carat: 0,
      description: "",
      pricePerCt: 0,
    };
    onGemstonesChange([...gemstones, newGemstone]);
  };

  const deleteRow = (id: string) => {
    const updatedGemstones = gemstones
      .filter((item) => item.id !== id)
      .map((item, index) => ({ ...item, no: index + 1 }));
    onGemstonesChange(updatedGemstones);
  };

  const updateGemstone = (id: string, field: keyof GemstoneItem, value: string) => {
    const updatedGemstones = gemstones.map((item) => {
      if (item.id === id) {
        if (field === "carat" || field === "pricePerCt") {
          return { ...item, [field]: parseFloat(value) || 0 };
        }
        return { ...item, [field]: value };
      }
      return item;
    });
    onGemstonesChange(updatedGemstones);
  };

  const calculateAmount = (carat: number, pricePerCt: number) => {
    return (carat * pricePerCt).toFixed(2);
  };

  const totalCarat = gemstones.reduce((sum, item) => sum + item.carat, 0);

  return (
    <div className="w-full mb-4">
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2 w-[7%]">NO</th>
            <th className="border border-black p-2 w-[20%]">LOT NUMBER</th>
            <th className="border border-black p-2 w-[10%]">CARAT</th>
            <th className="border border-black p-2 w-[33%]">DESCRIPTION</th>
            <th className="border border-black p-2 w-[10%]">PRICE/CT</th>
            <th className="border border-black p-2 w-[15%]">AMOUNT</th>
            <th className="border border-black p-2 w-[5%]"></th>
          </tr>
        </thead>
        <tbody>
          {gemstones.map((gemstone) => (
            <tr key={gemstone.id}>
              <td className="border border-black p-2 text-center">
                {gemstone.no}
              </td>
              <td className="border border-black p-2">
                <Input
                  type="text"
                  value={gemstone.lotNumber}
                  onChange={(e) =>
                    updateGemstone(gemstone.id, "lotNumber", e.target.value)
                  }
                  className="w-full border-none focus:ring-0 p-0"
                />
              </td>
              <td className="border border-black p-2">
                <Input
                  type="number"
                  value={gemstone.carat || ""}
                  onChange={(e) =>
                    updateGemstone(gemstone.id, "carat", e.target.value)
                  }
                  className="w-full border-none focus:ring-0 p-0 text-right"
                />
              </td>
              <td className="border border-black p-2">
                <Input
                  type="text"
                  value={gemstone.description}
                  onChange={(e) =>
                    updateGemstone(gemstone.id, "description", e.target.value)
                  }
                  className="w-full border-none focus:ring-0 p-0"
                />
              </td>
              <td className="border border-black p-2">
                <Input
                  type="number"
                  value={gemstone.pricePerCt || ""}
                  onChange={(e) =>
                    updateGemstone(gemstone.id, "pricePerCt", e.target.value)
                  }
                  className="w-full border-none focus:ring-0 p-0 text-right"
                />
              </td>
              <td className="border border-black p-2 text-right">
                ${calculateAmount(gemstone.carat, gemstone.pricePerCt)}
              </td>
              <td className="border border-black p-2 text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteRow(gemstone.id)}
                  className="h-6 w-6 p-0"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="border border-black p-2"></td>
            <td className="border border-black p-2"></td>
            <td className="border border-black p-2 text-right font-bold">
              {totalCarat.toFixed(2)}
            </td>
            <td className="border border-black p-2"></td>
            <td className="border border-black p-2"></td>
            <td className="border border-black p-2"></td>
            <td className="border border-black p-2"></td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-2">
        <Button onClick={addRow} className="flex items-center gap-1">
          <Plus className="h-4 w-4" /> Add Row
        </Button>
      </div>
    </div>
  );
};

export default GemstoneTable;
