const Hero = () => {
  return (
    <div className="bg-[url(/hero.jpg)] h-[calc(100vh-64px)] bg-cover bg-fixed bg-right sm:bg-top ">
      <div className="container flex flex-col h-full justify-center text-white ">
        <div className=" ">
          <p className=" text-xl hover:text-black cursor-pointer ">Welcome</p>
          <h2 className=" uppercase text-6xl font-bold hover:text-black cursor-pointer ">We Live Fashion</h2>
          <p className="text-xl ml-16 pt-2 hover:text-black cursor-pointer">
            Create Something Beautiful & Timeline
          </p>
          <div className=" h-[4px] w-16 bg-white my-4 hover:bg-black cursor-pointer "></div>
          <p className="hover:text-black cursor-pointer">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            commodi <br /> at consequatur possimus dicta porro beatae ipsum
            veritatis, sint eveniet.
          </p>

          <div className=" flex flex-col sm:flex-row gap-4 pt-8 ">
            <button className=" border border-white px-16 py-2 rounded-lg hover:text-black hover:border-black cursor-pointer ">
              View More
            </button>
            <button className=" border border-white bg-white text-black px-16 py-2 rounded-lg hover:bg-black hover:text-white border-none ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
