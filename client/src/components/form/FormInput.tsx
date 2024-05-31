import { InputHTMLAttributes } from "react";
import { overrideTailwindClasses } from "tailwind-override";
// FormInputProps is a type that extends the InputHTMLAttributes interface, so it can be used to pass props to the input element.
type FormInputProps = {
  name: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const focusStyle =
  "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50";

const inputPadding = "p-2 py-3";

function FormInput({ ...props }: FormInputProps) {
  // const transitionStyle = "transition-all duration-150 ease-in-out";
  return (
    <input
      {...props}
      className={overrideTailwindClasses(
        `bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-custom focus:ring-none block w-full p-2.5 focus-visible:outline-none f${focusStyle} ${inputPadding} ${props.className}`
      )}
    />
  );
}

export default FormInput;
