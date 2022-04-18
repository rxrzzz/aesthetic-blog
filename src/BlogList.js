import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      {/* <h2>{title}</h2> */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <div>{blog.id}</div>
          <Link to={`/blogs/${blog.id}`}>
            <div>
              <h2>{blog.title}</h2>
              <h3>{blog.author}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
