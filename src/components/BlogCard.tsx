interface PropType {
  img: string;
  title: string;
}

const BlogCard = ({ img, title }: PropType) => {
  return (
    <div className="space-y-4 ">
      <img className="hover:scale-105 cursor-pointer" src={img} alt="" />
      <p className=" text-gray-500 font-semibold  ">Sept 8,2024 by:Admin</p>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut autem
        doloremque, perferendis perspiciatis aliquid nobis alias suscipit eos
        molestiae, odit repudiandae illo dolores amet animi quae ipsam fugit
        possimus expedita inventore! Necessitatibus nemo ullam consequatur quos
        repellat voluptatem autem.
      </p>
      <button className=" border-b border-black font-semibold italic ">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
