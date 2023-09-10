import { useEffect,useState } from 'react';
const PostDetails =()=>{
const [id,setId]=useState(1)
const [post,setPost]=useState({})

useEffect(()=>{
let isMounted=false;
const fetchData=({isMounted,id})=>{
    isMounted=false;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=> res.json())
    .then((data)=>setPost(data))
    .catch((e)=>{
        console.log(e);
    })
    .finally(()=>{
        isMounted=false;
    });
};
fetchData({isMounted,id});
return(isMounted)=>{
    isMounted=false;
}
},[id])
return<>
  <input type='text' onChange={(event)=>{setId(event.target.value)}}/>
  <p>{post?.userId}</p>
  <br />
  <p>{post?.id}</p>
  <br />
  <p>{post?.title}</p>
  <br />
  <p>{post?.body}</p>
  <br />
  </>
}

export default PostDetails