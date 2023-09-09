import React from 'react';
import { useEffect,useState } from 'react';
const Posts =()=>{}
const [posts,setPosts]=useState([])

useEffect(()=>{
let isMounted=false;
const fetchData=(isMounted)=>{
    isMounted=false;
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=>setPosts(data))
    .catch((e)=>{
        console.log(e);
    })
    .finally(()=>{
        isMounted=false;
    });
};
fetchData(isMounted);
return(isMounted)=>{
    isMounted=false;
}
},[])
return(
    <>
    <table>
    <thead>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  </tbody>
</table>
</>
)
export default Posts