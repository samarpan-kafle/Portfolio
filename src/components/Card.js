import React, { useState } from 'react'

export default function Card() {
  const [count, setCount] = useState(300)

  return (
    <div className='card container' >
      <div className='py-2 bg-primary'>My Card</div>
        <div className='card-body'>
          <h1 style={{fontSize:'100px'}}>{count}</h1>
        <img alt="" className='auto' style={{width:count}} src={`https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=300&q=80`} /> 
        </div>
        <div className='card-footer'> 
          <button className='btn btn-primary' onClick={()=>{
            const decrease = count-10;
            if(decrease>=0) {
              setCount(decrease)
            }else{
              alert("Brooo, It is less than 0!")
            }
            
          }}>
            -
          </button>
          <button className='btn btn-primary' onClick={()=>{
            const increse = count+10
            setCount(increse)
          }}>
            +
          </button>
        </div>
      </div>
  )
}
