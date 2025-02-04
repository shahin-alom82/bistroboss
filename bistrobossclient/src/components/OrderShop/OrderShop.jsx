import { useState } from "react";
import Cover from "../Cover";
import img from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../contants/Hoks";

const OrderShop = () => {
  const [menu] = useMenu();
  const [selectedCategory, setSelectedCategory] = useState("dessert");

  const nav = [
    { title: "Dessert", category: "dessert" },
    { title: "Soup", category: "soup" },
    { title: "Salad", category: "salad" },
    { title: "Pizza", category: "pizza" },
    { title: "Offered", category: "offered" },
    { title: "Popular", category: "popular" },
  ];

  const filteredMenu = menu?.filter((item) => item?.category === selectedCategory) || [];

  return (
    <div>
      {/* Cover Section */}
      <Cover image={img} topMenu={"Our Shop"} middleMenu={"Would you like to try a dish?"} />

      {/* Navigation Tabs */}
      <div className="flex items-center gap-4 mt-10 justify-center">
        {nav.map((item, index) => (
          <button
            key={index}
            className={`uppercase tracking-wide font-medium py-1 px-4 transition duration-300 
                        ${selectedCategory === item.category ? "bg-yellow-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white"}`}
            onClick={() => setSelectedCategory(item.category)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-6">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <div key={item._id} className="border p-4 shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
              <p className="text-gray-500">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-3">No items available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default OrderShop;
