import { Outlet } from "react-router-dom";

const RootLayout = () => {
      return (
            <div className="font-bodyFont">
                  <Outlet />
            </div>
      );
};

export default RootLayout;