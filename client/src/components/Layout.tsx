import Content from "./Content";
// Layout.js
import SideBar from "./SideBar";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex h-full bg-amber-50 overflow-hidden">
      <SideBar />
      <div className="flex flex-col w-full h-full overflow-y-auto">
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
