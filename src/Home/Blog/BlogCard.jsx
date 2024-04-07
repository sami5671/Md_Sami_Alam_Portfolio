const BlogCard = ({ item }) => {
  // destructuring
  const { img, blogName, description, link } = item;
  // console.log(item);

  return (
    <div data-aos="zoom-in-up" data-aos-duration="3000">
      <div className="lg:w-[90%] h-full rounded-lg shadow-green-900 shadow-2xl">
        <a href={link}>
          <figure>
            <img
              src={img}
              className="w-full h-[130px] md:h-[215px] lg:h-[215px] hover:opacity-70 cursor-pointer rounded-t-lg"
              alt="Shoes"
            />
          </figure>
        </a>
        <div className="card-body w-[95%] h-[240px]">
          <h2 className="text-2xl font-bold bg-gradient-to-br from-green-500 to-lime-300 text-transparent bg-clip-text ">
            {blogName}
          </h2>
          <p className="text-slate-300">{description}</p>
          <div className="py-2">
            <button className="px-5 py-1 rounded-br-lg rounded-tl-lg bg-green-500 hover:bg-gradient-to-tr from-green-300 to-lime-400 text-white hover:text-slate-900 font-bold ">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
