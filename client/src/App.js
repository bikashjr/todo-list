import {useEffect,useState} from 'react';

const App = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count +1)
            );
        },1000)
    })

    useEffect(()=>{
        let isMounted =false;
        const fetchData=()=>{
            isMounted=true
        }
        return ()=>{
            isMounted=false
        }
    })
    return (

        <h1>HELLO FROM {count}</h1>
    )
}


export default App;