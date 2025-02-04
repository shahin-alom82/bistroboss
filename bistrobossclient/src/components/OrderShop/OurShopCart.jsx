
const OurShopCart = ({ item }) => {
      return (
            <div>
                  <h1>{item?.name}</h1>
                  <img src={item?.image} alt="" />
            </div>
      );
};

export default OurShopCart;