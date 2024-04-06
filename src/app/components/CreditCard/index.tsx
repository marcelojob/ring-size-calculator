import { CreditCardProps } from './models';
import './style.css';
import React  from 'react';

const CreditCard: React.FC<CreditCardProps> = ({ cardSize }) =>  {

  return (
    <div style={{ width: cardSize, height: "300px" }} className="card-part flex-col flex rounded-lg p-4 -mt-6">
    </div>
  )
}

export default CreditCard;

