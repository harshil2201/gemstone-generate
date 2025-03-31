
import React from "react";

const BankDetails = () => {
  return (
    <div className="w-full mb-4">
      <div className="text-sm">
        <h3 className="font-bold">PAYMENT BANK DETAIL</h3>
        <p>COMPANY NAME: AURORA GEMS & JEWELS INC</p>
        <p>BANK NAME: BANK OF AMERICA</p>
        <p>COMPNAY A/C NO.: 325194179823</p>
        <p>ROUTING ACH: 121000358</p>
        <p>ROUTING WIRE: 026009593</p>
        <p>ZELLE: BVKHUNT6@GMAIL.COM</p>
      </div>
      <div className="mt-8">
        <p className="font-bold">AUTHORISED SIGNATORY:</p>
        <div className="border-b border-black w-64 h-8 mt-1"></div>
      </div>
    </div>
  );
};

export default BankDetails;
