import { Helmet } from "react-helmet-async";
import useMenu from "../../contants/Hoks";
import Container from "../Container";
import Cover from "../Cover";
import SectionTitle from "../../contants/SectionTitle";
import menuCover from "../../assets/menu/banner3.jpg"
import desserts from "../../assets/menu/dessert-bg.jpeg"
import MenuCategory from "./MenuCategory";

const OurMenu = () => {
      const [menu] = useMenu();


      const dessert = menu?.filter((item) => item?.category === 'dessert') || [];
      const soup = menu?.filter((item) => item?.category === 'soup') || [];
      const salad = menu?.filter((item) => item?.category === 'salad') || [];
      const pizza = menu?.filter((item) => item?.category === 'pizza') || [];
      const offered = menu?.filter((item) => item?.category === 'offered') || [];
      const popular = menu?.filter((item) => item?.category === 'popular') || [];


      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss | Our Menu</title>
                  </Helmet>
                  <Container>
                        <Cover
                              image={menuCover}
                              topMenu={"Our Menu"}
                              middleMenu={"Would you like to try a dish?"}
                        />
                        {/* ---------- Offerd ------------ */}
                        <div className="mt-12">
                              <SectionTitle
                                    topHeading={"Don't Miss"}
                                    middleHeading={"Today's Offer"}
                              />
                              <MenuCategory item={offered} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                        {/* ----------- Dessert ----------- */}
                        <div className="mt-10">
                              <SectionTitle topHeading={"Top Dessert"} middleHeading={"Dessert"} />
                              <MenuCategory item={dessert} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                        {/* ----------- Salad ----------- */}
                        <div className="mt-10">
                              <SectionTitle topHeading={"Top Salad"} middleHeading={"salad"} />
                              <MenuCategory item={salad} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                        {/* ----------- Soup ----------- */}
                        <div className="mt-10">
                              <SectionTitle topHeading={"Top Soup"} middleHeading={"Soup"} />
                              <MenuCategory item={soup} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                        {/* ----------- Pizza ----------- */}
                        <div className="mt-10">
                              <SectionTitle topHeading={"Top Pizza"} middleHeading={"Pizza"} />
                              <MenuCategory item={pizza} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                  </Container>
            </div>
      );
};

export default OurMenu;
