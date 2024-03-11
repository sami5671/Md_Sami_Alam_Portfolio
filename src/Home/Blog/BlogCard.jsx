const BlogCard = ({ item }) => {
  // destructuring
  const { img, blogName, description } = item;
  // console.log(blog);

  return (
    <div>
      <div className="shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            className="hover:opacity-70 hover:bg-gradient-to-r from-pink-600 via-black to-green-900"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blogName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
