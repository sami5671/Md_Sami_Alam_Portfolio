import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const jsonData = [
  {
    id: 1,
    img: "https://i.ibb.co/QvWPV7Q/blog1.jpg",
    blogName: "JavaScript Fundamentals",
    description: "Description for Blog 1",
    link: "https://www.linkedin.com/in/sami5671/",
  },
  {
    id: 2,
    img: "https://i.ibb.co/Brgm9xZ/blog2.jpg",
    blogName: "React Fundamentals",
    description: "Description for Blog 2",
  },
  {
    id: 3,
    img: "https://i.ibb.co/hVsx6tQ/blog3.jpg",
    blogName: "Crud Operations in MongoDB",
    description: "Description for Blog 3",
  },
  {
    id: 4,
    img: "https://i.ibb.co/MMQLtPb/blog4.png",
    blogName: "Default Blog Name",
    description: "Description for Blog 4",
  },
];

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setBlog(jsonData);
  }, []);

  return (
    <>
      <section className="px-12" id="blog">
        <div className="mt-24 lg:mt-32">
          <h1 className="text-2xl px-2 lg:text-4xl mb-12 font-mono font-bold border-b-2  bg-gradient-to-tr from-pink-500 to-lime-700 text-transparent bg-clip-text">
            My Blog
          </h1>
        </div>
      </section>

      <section className="px-8 lg:px-24 py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((item) => (
            <BlogCard key={item.id} item={item}></BlogCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
