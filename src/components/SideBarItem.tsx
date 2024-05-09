type Params = {
  title: string;
  collapsed?: boolean;
  active: number;
  setActive: (index: number) => void;
  icon: React.ReactNode;
  index: number;
};

export default function SideBarItem(props: Params) {
  const onActive =
    props.active == props.index ? " bg-secondary text-black" : "text-light";

  return (
    <div
      onClick={() => props.setActive(props.index)}
      className={`space-x-4 flex bg rounded-full font-bold p-2 cursor-pointer hover:underline-offset-2  ${onActive}`}
    >
      <div>{props.icon}</div>
      {!props.collapsed ? <p className={onActive}>{props.title} </p> : null}
    </div>
  );
}
