import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
      return (
            <div className="font-bodyFont">
                  <Header />
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default RootLayout;