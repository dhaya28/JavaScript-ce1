import React from 'react'

export default function List1() {
    const college=[{id:1 , stName:"Sachin" , age:26},
    {id:2 , stName:"Dhoni" , age:26},
    {id:3 , stName:"kholi" , age:26}]
    const result=college.map((stu)=><li key={stu.id}>{stu.id} - {stu.stName} - {stu.age}</li>)
  return (
    <div>
      {result}
    </div>
  )
}

// function DisplayName(props){
//     return(
//         <div>
//         <h1>{props.name}</h1>
//         </div>
//     )
// }

// export default function List1() {
//     const college=[{id:1 , stName:"Sachin" , age:26},
//     {id:2 , stName:"Dhoni" , age:26},
//     {id:3 , stName:"kholi" , age:26}]
//     const result=college.map((stu)=> <DisplayName name={stu.name}></DisplayName>)
//   return (
//     <div>
//       {result}
//     </div>
//   )
// }