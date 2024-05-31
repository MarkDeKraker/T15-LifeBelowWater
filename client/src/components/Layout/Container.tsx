type Props = {
  children: React.ReactNode;
  className?: string;
};
function Container(props: Props) {
  return (
    <div className={`container mx-auto ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Container;
