type Props = {
  buttonStyle?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick: () => void;
};

export function StyledButton(props: Props) {
  const buttonStyle = props.buttonStyle || "primary";

  const bgColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  };

  return (
    <>
      <button
        className={`px-4 py-2 mt-5 rounded-full caption-top ${bgColor[buttonStyle]} font-custom hover:bg-primary/70 transition duration-200 ease-in-out hover:text-white hover:shadow-md active:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
        onClick={props.onClick}
      >
        {props.children}
      </button>{" "}
    </>
  );
}
