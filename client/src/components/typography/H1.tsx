type Props = {
  children: React.ReactNode;
};

function H1({ children }: Props) {
  return (
    <h1 className="my-10 text-2xl font-bold text-center font-custom">
      {children}
    </h1>
  );
}

export default H1;
