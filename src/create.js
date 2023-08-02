import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [IsPending, setIsPending] = useState(false);
  const History = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      History.push("/");
    });
  };

  return (
    <div className="create">
      <h2> Add a blog</h2>
      <form onSubmit={handleSubmit}>
        {/* for title */}
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        {/* for body */}
        <label>Blog Body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        {/* for author */}
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="You">You</option>
          <option value="me">me</option>
        </select>
        {!IsPending && <button>Add blog</button>}
        {IsPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
