import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
const Blog = () => {
  // ----------------------------------------------------------------

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/public/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  console.log(blog);
  // ----------------------------------------------------------------
  return (
    <>
      <section className="px-12">
        <div className="text-2xl px-2 lg:text-4xl mb-12 font-mono font-bold border-b-2  bg-gradient-to-tr from-pink-500 to-lime-700 text-transparent bg-clip-text ">
          <h1>My Blog</h1>
        </div>
      </section>

      <section className="lg:px-24 py-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {blog.map((item) => (
            <BlogCard key={item.id} item={item}></BlogCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
