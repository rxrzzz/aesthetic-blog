import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const id = useParams();
  const {
    data: blog,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {pending && <div>Loading</div>};{error && <div>{error}</div>};
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>{blog.author}</h3>
          <p>{blog.body}</p>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
