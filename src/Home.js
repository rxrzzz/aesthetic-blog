import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs/1");
  return (
    <div>
      <div>
        {error && <div>{error}</div>}
        {pending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
    </div>
  );
};

export default Home;
