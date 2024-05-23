type Props = {
  children: React.ReactNode;
  buttonStyle?: "primary" | "secondary" | "tertiary";
};

export function Button(props: Props) {
  const buttonStyle = props.buttonStyle || "primary";

  const bgColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  };

  return (
    <>
      <button
        className={`p-2 mt-5 rounded-full caption-top ${bgColor[buttonStyle]} w-60 font-custom`}
      >
        {props.children}
      </button>{" "}
    </>
  );
}
