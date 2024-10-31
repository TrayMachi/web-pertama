"use client";
import React, { useState } from "react";
import { Card } from "@/components/Card";

interface Meal {
  title: string;
  imageUrl: string;
  description: string;
}

const page = () => {
  const [makanan, setMakanan] = useState<Meal | null>(null);

  const Generate = async () => {
    const makanan = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const response = await makanan.json();
    const data = response.meals[0];
    console.log(data);
    setMakanan(
      data
        ? {
            title: data.strMeal,
            imageUrl: data.strMealThumb,
            description: data.strArea,
          }
        : null
    );
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl text-white">Random Food</h1>
      {makanan && (
        <Card
          title={makanan.title}
          description={makanan.description}
          imageUrl={makanan.imageUrl}
        />
      )}
      <button
        onClick={() => Generate()}
        className="text-center bg-orange-400 px-6 py-4 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default page;
