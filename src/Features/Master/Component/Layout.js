import React from "react";
import SidePanel from "./SidePanel";

const Layout = ({ children }) => {
    return (
        <div>
            <SidePanel />
            <div>{children}</div>
        </div>
    );
};
export default Layout;
