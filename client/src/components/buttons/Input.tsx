type Props = {
  type: "submit" | "button";
  value: string;
  buttonStyle?: "primary" | "secondary" | "tertiary";
};

export function Input(props: Props) {
  const buttonStyle = props.buttonStyle || "primary";

  const bgColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  };

  return (
    <>
      <input
        type={props.type}
        value={props.value}
        className={`flex p-2 px-4 space-x-4 font-bold text-black rounded-full cursor-pointer bg hover:underline-offset-2 ${bgColor[buttonStyle]}`}
      />
    </>
  );
}
