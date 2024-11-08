import { DiVim } from "react-icons/di";
import SectionTitle from "./SectionTitle";

const products = [
  "/public/pro_1.png",
  "/public/pro_2.png",
  "/public/pro_3.png",
  "/public/pro_4.png",
];
const Collection = () => {
  return (
    <div className="container pt-[140px] ">
      <SectionTitle
        topHeading="Our Products"
        mainHeading="FROM THE NEW COLLECTION"
        subHeading="Check out some of the stand outs from our collection"
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((pro) => (
          <div
            key={pro}
            className=" flex flex-col justify-center items-center "
          >
            <img
              className=" mix-blend-color-burn cursor-pointer hover:scale-95"
              src={pro}
              alt=""
            />
            <button className=" mt-4 border border-black py-2 px-12 bg-black text-white hover:bg-transparent hover:text-black cursor-pointer hover:rounded-lg ">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
