import { InputHTMLAttributes } from "react";

// FormInputProps is a type that extends the InputHTMLAttributes interface, so it can be used to pass props to the input element.
type FormInputProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

function FormInput({ ...props }: FormInputProps) {
  const transitionStyle = "transition-all duration-150 ease-in-out";
  return (
    <input
      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-custom focus:ring-none block w-full p-2.5 focus-visible:outline-none ${transitionStyle}`}
      placeholder="bxf23i4"
      {...props}
    />
  );
}

export default FormInput;
