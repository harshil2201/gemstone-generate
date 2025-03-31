
import React from "react";
import { Input } from "@/components/ui/input";

interface CustomerInfoProps {
  customer: string;
  terms: string;
  shipVia: string;
  purchaseOrder: string;
  sp: string;
  dueDate: string;
  onCustomerChange: (value: string) => void;
  onDueDateChange: (value: string) => void;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  customer,
  terms,
  shipVia,
  purchaseOrder,
  sp,
  dueDate,
  onCustomerChange,
  onDueDateChange,
}) => {
  return (
    <div className="w-full mb-4">
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2 w-1/6">CUSTOMER</th>
            <th className="border border-black p-2 w-1/6">TERMS</th>
            <th className="border border-black p-2 w-1/6">SHIP VIA</th>
            <th className="border border-black p-2 w-1/6">PURCHASE ORDER</th>
            <th className="border border-black p-2 w-1/6">SP</th>
            <th className="border border-black p-2 w-1/6">DUE DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">
              <Input 
                type="text" 
                value={customer} 
                onChange={(e) => onCustomerChange(e.target.value)} 
                className="w-full border-none focus:ring-0 p-0 text-center" 
              />
            </td>
            <td className="border border-black p-2 text-center">{terms}</td>
            <td className="border border-black p-2 text-center">{shipVia}</td>
            <td className="border border-black p-2 text-center">{purchaseOrder}</td>
            <td className="border border-black p-2 text-center">{sp}</td>
            <td className="border border-black p-2">
              <Input 
                type="text" 
                value={dueDate} 
                onChange={(e) => onDueDateChange(e.target.value)} 
                className="w-full border-none focus:ring-0 p-0 text-center" 
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full text-xs mt-1">
        <p className="text-justify">
          The merchandise described in this memorandum is provided solely for examination and inspection by potential buyers and remains the exclusive property of <strong>Aurora Gems & Jewels Inc</strong>. You assume full responsibility for any risks, including loss or damage, regardless of the cause, and agree to return the merchandise in its original condition upon request. Until it is received back by us, you bear full liability, and in case of loss or damage—whether caused by you, your employees, agents, customers or any third party—you agree to pay the full invoice value. The merchandise must be returned upon demand without deposit authorization from <strong>Aurora Gems & Jewels Inc</strong>. No credit is extended, and a sale is recognized only when a separate invoice is issued. Partial sales do not alter the terms governing the remaining items. By accepting the merchandise, you acknowledge and agree to these binding terms, which cannot be modified by oral statements, prior transactions, or trade customs. <strong>This memorandum is not an invoice or a bill of sale.</strong>
        </p>
        <p className="text-center font-bold mt-1">SOLD GOODS ARE NOT REFUNDABLE</p>
      </div>
    </div>
  );
};

export default CustomerInfo;
