import { useNavigate } from "react-router";
// import imgs
import fashion from "../../assets/category/fashion.png";
import shirt from "../../assets/category/shirt.png";
import jacket from "../../assets/category/jacket.png";
import mobile from "../../assets/category/mobile.png";
import laptop from "../../assets/category/laptop.png";
import shoes from "../../assets/category/shoes.png";
import home from "../../assets/category/home.png";
import books from "../../assets/category/books.png";

// category
const category = [
  { image: fashion, name: "Fashion" },
  { image: shirt, name: "Shirt" },
  { image: jacket, name: "Jacket" },
  { image: mobile, name: "Mobile" },
  { image: laptop, name: "Laptop" },
  { image: shoes, name: "Shoes" },
  { image: home, name: "Home" },
  { image: books, name: "Books" },
];

function Category() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col mt-5 ">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-7 ">
                  {/* Image  */}
                  <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 ">
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>
                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
}

export default Category;
