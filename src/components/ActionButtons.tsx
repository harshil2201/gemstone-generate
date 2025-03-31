
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Printer, FileText } from "lucide-react";
import { GemstoneItem } from "./GemstoneTable";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface ActionButtonsProps {
  memoData: {
    memoTo: string;
    memoDate: Date;
    memoNumber: string;
    customer: string;
    dueDate: string;
    gemstones: GemstoneItem[];
    shipping: number;
    tax: number;
  };
  previewRef: React.RefObject<HTMLDivElement>;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ memoData, previewRef }) => {
  const handlePreview = () => {
    const element = document.getElementById("memo-preview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Memorandum-${memoData.memoNumber || 'draft'}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8 mb-8">
      <Button 
        onClick={handlePreview} 
        className="bg-blue-600 hover:bg-blue-700"
      >
        <FileText className="mr-2 h-4 w-4" /> Preview
      </Button>
      <Button 
        onClick={handleDownload} 
        className="bg-green-600 hover:bg-green-700"
      >
        <Download className="mr-2 h-4 w-4" /> Download PDF
      </Button>
      <Button 
        onClick={handlePrint} 
        className="bg-purple-600 hover:bg-purple-700"
      >
        <Printer className="mr-2 h-4 w-4" /> Print
      </Button>
    </div>
  );
};

export default ActionButtons;
