type Params = {
  strokeWidth?: number;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
};

function CollapseButton(props: Params) {
  return (
    <button
      className={props.className ?? "p-2 text-black "}
      onClick={props.onClick}
    >
      {props.icon}
      {props.children}
    </button>
  );
}
export default CollapseButton;
