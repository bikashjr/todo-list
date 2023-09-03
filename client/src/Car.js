import React from "react";

function Car({cars,color,name}) {
// js logic 
const shoot=(name)=>{
    alert(`GOAL BY ${name}`)
}

    // html  
  return (
    <div>
      car is of color {color} and car name is {name}
       <br/>
       <input type="text" id='name' ></input>
       <button onClick={()=>shoot(document.getElementById('name').value)}>shoot</button>
       <br/>
       <ol>
        {
            cars.map((car,i)=>{
                return(<li key={i}>{car}</li>)})
        }
       </ol> 
       {cars && cars.length > 0 && <>I have {cars.length} cars</>}
       <br/>
    </div>
  );
}

export default Car;
