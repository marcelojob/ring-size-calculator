"use client"

import { useState } from "react";
import CreditCard from "./components/CreditCard";
import { Hashmap } from "./models";

export default function Home() {

  const [size, setSize] = useState("10");
  const [cardSize, setCardSize] = useState(300);
  const [cardValidated, setCardValidated] = useState(false);

  const convertedSize: Hashmap<number> = {
    "10": cardSize / 3.53333333333,
    "11": cardSize / 3.50993377483,
    "12": cardSize / 3.48684210526,
    "13": cardSize / 3.3125,
    "14": cardSize / 3.29192546584,
    "15": cardSize / 3.11764705882,
    "16": cardSize / 3.09941520468,
    "17": cardSize / 3.08139534884,
    "18": cardSize / 3.02857142857,
    "19": cardSize / 2.94444444444,
    "20": cardSize / 2.86486486486,
    "21": cardSize / 2.81914893617,
    "22": cardSize / 2.78947368421,
    "23": cardSize / 2.76041666667,
  }

  return (
    <div className="bg-white flex justify-center">
      {cardValidated ? (
        <div>
          <div 
            style={{ width: convertedSize[size], height: convertedSize[size]}} 
            className="flex rounded-full bg-white mb-24 items-center justify-center border-solid border-2 border-sky-500"
          >
            <h2 className="text-gray-950">{size}</h2>
          </div>
          <input 
            type="range" 
            id="ring-size"
            name="ring-size"
            min={10} 
            max={23} 
            className="range w-48" 
            step={1} 
            defaultValue={10}
            onChange={(value) => setSize(value.currentTarget.value)} 
          />
        </div>
      ) : (
        <div>
          <CreditCard cardSize={cardSize} />
          <input 
            type="range" 
            id="card-size"
            name="card-size"
            min={200}
            max={400} 
            defaultValue={300}
            className="range mt-16"
            onChange={(value) => setCardSize(Number(value.currentTarget.value))} 
          />
          <button 
            className="btn btn-wide"
            onClick={() => setCardValidated(true)}
          >
             Calibrar
          </button>       
        </div>
      )}
    </div>    
  );
}
