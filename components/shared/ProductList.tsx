import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function BentoGridDemo({ items }: { items: { name: string, price: number, image: string, description: string }[] }) {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
