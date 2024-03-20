//
 import React, { useEffect, useState } from 'react';
 
 const Bottles = () => {

     const [bottles, setBottles] = useState([])
useEffect(() =>{
fetch(' https://fakestoreapi.com/products')
.then (res => res.json())
.then (data => setBottles(data))
}, [])

    return (
        <div>
            <h2>bottles are here: {bottles.length}</h2>
{/* map korbo  */}
           {
          
           }
        </div>
    );
 };
 
 export default Bottles;<h2>bottles are here</h2>