import { useState, useEffect } from "react";
import BlogList from "./blogsList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  function deleteBlog(index) {
    let data = blogs.filter((value) => value.id != index);
    fetch(`http://localhost:8000/blogs/${index}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setBlogs(data);
      });
    setBlogs(data)
  }

  useEffect(() => {
    // let value = await fetch("http://localhost:8000/blogs");
    // let data = await value.json();
    // setBlogs(data);

    // console.log(data)

    // fetch("http://localhost:8000/blogs").then((res) => {
    //   console.log(res.json());
    // });

    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} handleDelete={deleteBlog} />}
    </div>
  );
};

export default Home;
