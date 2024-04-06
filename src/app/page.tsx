"use client"

import { useState } from "react";
import CreditCard from "./components/CreditCard";

export default function Home() {

  const [creditCardSize, setCreditCardSize] = useState("250");

  return (
    <div className="bg-white flex justify-center">
      <CreditCard cardSize={creditCardSize} />
      <input 
        type="range" 
        id="credit-card"
        name="credit-card"
        min={200}
        max={300} 
        defaultValue={250}
        className="range mt-16"
        onChange={(value) => setCreditCardSize(value.currentTarget.value)} 
      />          
    </div>  
  );
}
