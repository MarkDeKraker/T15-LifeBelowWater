import { useState } from "react";

type Props = {
  children: React.ReactNode;
  expandedText: React.ReactNode;
  buttonStyle?: "primary" | "secondary" | "tertiary";
};

export function ExpandButton(props: Props) {
  const { expandedText } = props;
  const [collapsed, isCollapsed] = useState(false);

  const toggleCollapse = () => {
    isCollapsed(!collapsed);
  };

  return (
    <>
      <button
        onClick={toggleCollapse}
        className={`text-black hover:underline px-4 py-2 mt-5 rounded-full caption-top transition duration-200 ease-in-out focus:ring-opacity-50`}
      >
        {props.children}
      </button>
      {collapsed && <div className="mt-3 text-[#666] max-w-xl font-custom">{expandedText}</div>}
    </>
  );
}
