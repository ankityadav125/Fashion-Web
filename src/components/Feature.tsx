const Feature = () => {
  return (
    <div className=" container pt-[58px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <img
            className="hover:scale-95 cursor-pointer"
            src="/public/makeup.jpg"
            alt=""
          />
        </div>

        <div className="mt-10">
          <h2 className=" uppercase font-extrabold text-5xl ">Makeup</h2>
          <p className=" ml-8 italic text-gray-500 text-xl py-4 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className=" bg-black h-[4px] w-[100px] mt-2 mb-4 "></div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aperiam tenetur quaerat necessitatibus pariatur deleniti accusantium
            perferendis ad harum autem aliquam natus tempore, veritatis
            molestias quam laborum reiciendis. Perferendis laudantium sequi vel
            expedita consequuntur recusandae repudiandae similique ad numquam
            quo.
          </p>
          <button className=" text-gray-500 border border-black py-2 px-6 mt-16 hover:bg-black hover:rounded-lg hover:text-white ">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
