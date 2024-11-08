import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";

const blogs = [
  {
    img: "/public/post_1.jpg",
    title: "FASHION GLAM SHOW",
  },
  {
    img: "/public/post_2.jpg",
    title: "NEW YORK STYLE",
  },
  {
    img: "/public/post_3.jpg",
    title: "L'AMOUR IN GLAMOUR",
  },
];
const Blog = () => {
  return (
    <div className="container pt-[240px] ">
      <SectionTitle
        topHeading="Latest News"
        mainHeading="FROM THE BEAUTY OF WORLD"
        subHeading="Check out some of the stand outs trends"
      />

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-16">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} img={blog.img} title={blog.title} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
