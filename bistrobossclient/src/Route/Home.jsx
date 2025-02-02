import Banner from "../components/Banner";
import Featured from "../components/Featured";
import OrderOnline from "../components/OrderOnline";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";

const Home = () => {
      return (
            <div>
                  <Banner />
                  <OrderOnline />
                  <PopularMenu />
                  <Featured/>
                  <Testimonials/>
            </div>
      );
};

export default Home;