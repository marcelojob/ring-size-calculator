"use client"

import { useState } from "react";
import CreditCard from "./components/CreditCard";

export default function Home() {

  const [cardSize, setCardSize] = useState("250");
  const [cardValidated, setCardValidated] = useState(false);

  return (
    <div className="bg-white flex justify-center">
      <div>
        <CreditCard cardSize={cardSize} />
        <input 
          type="range" 
          id="credit-card"
          name="credit-card"
          min={200}
          max={400} 
          defaultValue={250}
          className="range mt-16"
          onChange={(value) => setCardSize(value.currentTarget.value)} 
        />
        <button 
          className="btn btn-wide"
          onClick={() => setCardValidated(true)}
        >
            Calibrar
        </button>       
      </div>
    </div>    
  );
}
