import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview">
          <div>{blog.id}</div>
          <div>
            <h3>{blog.title}</h3>
            <h4>{blog.author}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
