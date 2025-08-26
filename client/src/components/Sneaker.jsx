import React from "react";
import Card from "./Card";
import { useAuthContext } from "../context/AuthContext";

const Sneaker = ({ sneakers }) => {
  if (!Array.isArray(sneakers) || sneakers.length === 0) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>No Sneaker available.</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {sneakers.map((s) => (
          <Card
            key={s.id}
            id={s.id}
            name={s.name}
            type={s.type}
            imageUrl={s.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Sneaker;
