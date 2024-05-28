type Props = {
  children: React.ReactNode;
  className?: string;
};

/*
Responsibilities:
- Concerned with responiveness
- Font size, weight, line height, letter spacing
Not Reponsible:
 for text alignment like center, left, right
*/
function H2(props: Props) {
  return (
    <h1
      className={`text-xl font-bold font-custom md:text-2xl text-inherit ${props.className}`}
    >
      {props.children}
    </h1>
  );
}

export default H2;
