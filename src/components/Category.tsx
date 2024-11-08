const data = [
  {
    img: "/public/cat_1.png",
    name: "Flats",
    desc: "From the Spring",
  },
  {
    img: "/public/cat_2.png",
    name: "Boots",
    desc: "From the Fall",
  },
  {
    img: "/public/cat_3.png",
    name: "Sandals",
    desc: "From the Summer",
  },
];
const Category = () => {
  return (
    <div className="container pt-[140px] ">
      <div className="grid grid-cols-1 sm:grid-cols-3 ">
        {data.map((item) => (
          <div key={item.name} className=" flex flex-col items-center gap-4 ">
            <img
              className=" hover:scale-105 cursor-pointer "
              src={item.img}
              alt=""
            />
            <div>
              <h2 className=" text-3xl font-bold uppercase ">{item.name}</h2>
              <p className=" ml-4 text-gray-500 ">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
