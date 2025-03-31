
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
      // Add a temporary class for better PDF rendering
      previewRef.current.classList.add("generating-pdf");
      
      // Improved html2canvas settings
      const canvas = await html2canvas(previewRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: "#ffffff",
        windowWidth: 1200, // Set a fixed width for consistency
        onclone: (document, element) => {
          // Make specific styling adjustments in the cloned element before rendering
          const cloned = element as HTMLElement;
          
          // Make all inputs and textareas look like plain text
          const inputs = cloned.querySelectorAll('input, textarea');
          inputs.forEach(input => {
            input.style.border = "none";
            input.style.padding = "0";
            input.style.background = "none";
          });
          
          // Ensure proper memo header alignment
          const memoHeader = cloned.querySelector('.memo-header');
          if (memoHeader) {
            memoHeader.classList.add('pdf-memo-header');
          }
        }
      });
      
      // Remove the temporary class
      previewRef.current.classList.remove("generating-pdf");
      
      // Create PDF with proper dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Create PDF with proper orientation
      const pdf = new jsPDF({
        orientation: imgHeight > pageHeight ? 'portrait' : 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      // Add image to PDF with proper positioning
      pdf.addImage(
        canvas.toDataURL('image/png', 1.0), 
        'PNG', 
        0, 
        0, 
        imgWidth, 
        imgHeight
      );
      
      // Save the PDF
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
