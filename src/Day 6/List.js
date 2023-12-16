import React from 'react'

export default function List() {
  const animals = ["dog", "cat", "lion"]
  const result = animals.map((ani, index) => <li key={index}>{index} - {ani}</li>)
  return (
    <div>
      <ul type="circle">
        {result}
      </ul>
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

// export default function List() {
//     const stuName=["raj","kamal","vijay"]
//     const Sname=stuName.map((stu)=><DisplayName name={stu}></DisplayName>)
//   return (
//     <div>
//       {Sname}
//     </div>
//   )
// }