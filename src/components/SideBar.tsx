import {
  GlobeAltIcon,
  ArrowLeftEndOnRectangleIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import SideBarItem from "./SideBarItem";
import CollapseIcon from "./icons/CollapseIcon";
import CollapseButton from "./CollapseButton";
import CollapsedIcon from "./icons/CollapsedIcon";

export default function SideBar() {
  const [active, setActive] = useState<number>(0);
  const [collapsed, isCollapsed] = useState(false);

  const toggleCollapse = () => {
    isCollapsed(!collapsed);
  };

  return (
    <aside className="flex flex-col p-4 space-y-4 bg-primary">
      {!collapsed && (
        <h1 className="text-xl font-bold text-center cursor-pointer text-stone-50 font-custom">
          Aqua Academy
        </h1>
      )}
      <div className="flex flex-col justify-between h-full bg-primary">
        <div className="first-item">
          <SideBarItem
            title="Home"
            collapsed={collapsed}
            active={active}
            setActive={setActive}
            index={0}
            icon={<GlobeAltIcon className="w-6 h-6" />}
          />
          <SideBarItem
            collapsed={collapsed}
            title="Lessen"
            active={active}
            setActive={setActive}
            index={1}
            icon={<BookOpenIcon className="w-6 h-6" />}
          />
          <SideBarItem
            title="Quizzes"
            collapsed={collapsed}
            active={active}
            setActive={setActive}
            index={2}
            icon={<AcademicCapIcon className="w-6 h-6" />}
          />
        </div>
        <div className="flex justify-between">
          {collapsed ? null : (
            <SideBarItem
              title="Uitloggen"
              active={active}
              setActive={setActive}
              index={3}
              icon={
                <ArrowLeftEndOnRectangleIcon className="w-6 h-6 text-light" />
              }
            />
          )}

          <CollapseButton
            icon={
              !collapsed ? (
                <CollapseIcon className="w-6 h-6 text-light" />
              ) : (
                <CollapsedIcon className="w-6 h-6 text-light" />
              )
            }
            onClick={toggleCollapse}
          />
        </div>
      </div>
    </aside>
  );
}
