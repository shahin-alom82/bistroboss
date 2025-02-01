import { useEffect, useState } from "react";
import SectionTitle from "../contants/SectionTitle";
import Container from "./Container";
import MenuCarts from "../contants/MenuCarts";

const PopularMenu = () => {

      const [menu, setMenu] = useState([])

      useEffect(() => {
            fetch('menu.json')
                  .then(res => res.json())
                  .then(data => {
                        const popularItem = data.filter((item) => item.category === 'popular')
                        setMenu(popularItem)
                  })
      }, [])

      return (
            <div className="mt-10">
                  <Container>
                        <SectionTitle
                              topHeading={"Popular Items"}
                              middleHeading={"From our Menu"}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-6">
                              {
                                    menu.map((item) => <MenuCarts key={item?._id} item={item} />)
                              }
                        </div>
                  </Container>
            </div>
      );
};

export default PopularMenu;