// import logo from './logo.svg';
// import './App.css';


// function App() {
  //   return (
    //     <div className='main'>
    //       <br></br>
    //       <h2>Register Here...</h2><br></br>
//       <div className='inform'>
//         <form>
//           <input type='text' placeholder='username'></input>
//           <br></br>
//           <br></br>
//           <input type='password' placeholder='password'></input>
//           <br></br>
//           <br></br>
//           <input type='number' placeholder='age'></input>
//           <br></br>
//           <br></br>
//           <div className='genderButton'>
//             <lable>Gender</lable>
//             <input type='radio' name='a'></input>Male
//             <input type='radio' name='a'></input>Female
//           </div>
//           <br></br>
//           <input type='phonenumber' placeholder='mobile number'></input>
//           <br></br>
//           <br></br>
//           <input type='textarea' placeholder='address'></input>
//           <br></br>
//           <br></br>
//           <button>Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import ClassComp from "./Components/ClassComp";
import FunctionalComp from "./Components/FunctionalComp";
import OneExport from "./Components/OneExport";
export default function App(){
  return (
    <div>
    <FunctionalComp></FunctionalComp>
    <ClassComp></ClassComp>
    <OneExport></OneExport>
    </div>
    )
}