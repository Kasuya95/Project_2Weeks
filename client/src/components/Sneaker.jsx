import React from 'react'
import  Card  from './Card'
import { useAuthContext } from "../context/AuthContext";


const Sneaker = (Sneakers) => {

    if (!Array.isArray(Sneaker)) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>No Sneaker available.</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {Sneakers.map((Sneaker) => (
          <Card
            key={Sneaker.id}
            id={Sneaker.id}
            name={Sneaker.name}
            type={Sneaker.type}
            imageUrl={Sneaker.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
export default Sneaker;
