import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../loader/Loader";

const HomePageProductCard = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className="mt-14">
      {/* Heading  */}
      <div className="flex px-5">
        <h1 className=" text-center mb-2 text-3xl text-brown-700 font-semibold border-b-4 border-brown-700">
          Bestselling Products
        </h1>
      </div>

      {/* main  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="flex flex-wrap -m-4">
            {getAllProduct.slice(0, 8).map((item, index) => {
              const { id, title, price, productImageUrl} = item;
              return (
                <div key={index} className="p-4 w-full md:w-1/4">
                  <div className=" h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img
                      onClick={() => navigate(`/productinfo/${id}`)}
                      className="lg:h-40  h-40 m-auto"
                      src={productImageUrl}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        UniStore
                      </h2>
                      <h1 className="title-font text-lg font-medium text-brown-600 mb-3">
                        {title.substring(0, 25)}
                      </h1>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        ${price}
                      </h1>

                      <div className="flex justify-center ">
                        {cartItems.some((p) => p.id === item.id) ? (
                          <button
                            onClick={() => deleteCart(item)}
                            className=" bg-red-900 hover:bg-brown-700 w-full text-white py-[4px] rounded-lg font-bold"
                          >
                            Delete From Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => addCart(item)}
                            className=" bg-zinc_900 hover:bg-brown-700 w-full text-white py-[4px] rounded-lg font-bold"
                          >
                            Add To Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
