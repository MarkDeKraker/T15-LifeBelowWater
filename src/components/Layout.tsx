// Layout.js
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Content from "./Content";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col w-full h-full">
        <NavBar />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
