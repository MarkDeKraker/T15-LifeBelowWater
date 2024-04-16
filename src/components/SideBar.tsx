import { GlobeAltIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  const [active, setActive] = useState<number>(0);

  return (
    <aside className="bg-sky-500 p-5">
      <h1 className="text-white font-bold font-custom cursor-pointer">
        Aqua Academy
      </h1>
      <div className="p-2 w-44 space-y-4">
        <SideBarItem
          title="Home"
          active={active}
          setActive={setActive}
          icon={<GlobeAltIcon className="w-6 h-6" />}
          index={0}
        />
        <SideBarItem
          title="Lessen"
          active={active}
          setActive={setActive}
          icon={<GlobeAltIcon className="w-6 h-6" />}
          index={1}
        />
        <SideBarItem
          title="Quizzes"
          active={active}
          setActive={setActive}
          icon={<GlobeAltIcon className="w-6 h-6" />}
          index={2}
        />
      </div>
    </aside>
  );
}
