import React from "react";

export default function SideBarItem({
  title,
  active,
  setActive,
  icon,
  index,
}: {
  title: string;
  active: number;
  setActive: any;
  icon: any;
  index: number
}) {
  return (
    <div
      onClick={() => setActive(index)}
      className={`space-x-4 flex ${
        active == index && "bg-sky-200"
      } bg rounded-full font-bold p-2 cursor-pointer`}
    >
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  );
}
