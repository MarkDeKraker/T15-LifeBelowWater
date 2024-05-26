import { NavigateOptions, To, useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  buttonStyle?: "primary" | "secondary" | "tertiary";
  To: To;
  options?: NavigateOptions | undefined;
};

export function NavigateButton(props: Props) {
  const buttonStyle = props.buttonStyle || "primary";

  const bgColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  };

  const navigate = useNavigate();
  return (
    <>
      <button
        className={`p-2 mt-5 rounded-full caption-top ${bgColor[buttonStyle]} w-60 font-custom`}
        onClick={() => {
          navigate(props.To, props.options);
        }}
      >
        {props.children}
      </button>{" "}
    </>
  );
}
