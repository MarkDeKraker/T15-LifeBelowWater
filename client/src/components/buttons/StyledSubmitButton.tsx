import { overrideTailwindClasses } from "tailwind-override";
type Props = {
  buttonStyle?: "primary" | "secondary" | "tertiary";
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
};

export function StyledSubmitButton(props: Props) {
  const buttonStyle = props.buttonStyle || "primary";

  const bgColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  };

  const tertiaryStyle =
    "box-border border border-gray-800 text-gray-800 hover:border-none";

  const activeStyle = "active:scale-95 transform transition-transform";

  return (
    <>
      <button
        type="button"
        className={overrideTailwindClasses(`box-border border-transparent px-4 py-2 mt-5 rounded-full caption-top ${
          bgColor[buttonStyle]
        } font-custom hover:bg-primary/70 transition duration-200 ease-in-out hover:text-white hover:shadow-md active:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 inline-flex items-center ${activeStyle}
        ${props.buttonStyle === "tertiary" ? tertiaryStyle : ""} ${
          props.className
        }`)}
        onClick={props.onClick}
      >
        <div className="">
          {props.icon || null}
          {props.children}
        </div>
      </button>
    </>
  );
}
