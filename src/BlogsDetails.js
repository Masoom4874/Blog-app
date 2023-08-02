import { useParams, useHistory } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
  const History = useHistory();
  const { id } = useParams();
  const {
    data: blog,
    IsPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
        History.push('/');
    });
  };

  return (
    <div className="blog-details">
      {IsPending && <div> Loading....</div>}
      {error && <div> {error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by : {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
