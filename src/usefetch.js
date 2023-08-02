import { useState,useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [error, setError]= useState(null);
  useEffect(() => {

    const abortcont = new AbortController();


    //way to create by using await
    // let value = await fetch("http://localhost:8000/blogs");
    // let data = await value.json();
    // setBlogs(data);

    // console.log(data)

    // fetch("http://localhost:8000/blogs").then((res) => {
    //   console.log(res.json());
    // });

    setTimeout(() => {
      fetch(url,{signal : abortcont.signal})
      .then(res => {
        if (!res.ok) {
          throw Error("could not fetch the data from resources");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setError(null);
        setIsPending(false);
      })
      .catch(err=>{
        if (err.name === 'AbortError') {
            console.log('fetch aborted');
        }else{
        setError(err.message);
        setIsPending(false);
        }
      })
    }, 1000);

    return ()=> abortcont.abort();
  }, [url]);
  
  return{data , IsPending, error};
}

export default useFetch;