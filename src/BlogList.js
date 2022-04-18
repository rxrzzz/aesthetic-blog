const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            {/* <h2>{title}</h2> */}
            {blogs.map((blog) => 
            (<div className="blog-preview">
                <h2>{blog.title}</h2>
                <h3>{blog.author}</h3>
                </div>))}
        </div>
     );
}
 
export default BlogList