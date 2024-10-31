import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
}) => {
  return (
    <div className="bg-[#fbfbfb] rounded-lg p-4 flex flex-col max-w-[250px] h-[375px] items-center justify-center gap-3">
      <Image
        src={imageUrl}
        width={200}
        height={200}
        alt="logo"
        className="rounded-md"
      />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm text-center">
        {description}
      </p>
    </div>
  );
};
