// import logo from './logo.svg';
// import './App.css';

// export default function App() {
//     return (
//         <div className='main'>
//           <br></br>
//           <h2>Register Here...</h2><br></br>
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
import DefaultProps from "./day 4/DefaultProps";
import DynamicRendering from "./day 4/DynamicRendering";
import Parent from "./day 4/ParentChildCommunication";
import PropsClass from "./day 4/PropsClass";
import PropsFunction from "./day 4/PropsFunction";
import StateClassComp from "./day 4/StateClassComp";
import StateFunction from "./day 4/StateFunction";
import StateHoldObject from "./day 4/StateHoldObject";
import TwoWayBinding from "./day 4/TwoWayBinding";
export default function App(){
  return (
    <div>
    <FunctionalComp></FunctionalComp>
    <ClassComp></ClassComp>
    <OneExport></OneExport>
    <PropsFunction name='Dhayananth'></PropsFunction>
    <PropsClass college="skct"></PropsClass>
    <StateClassComp></StateClassComp>
    <StateFunction></StateFunction>
    <StateHoldObject></StateHoldObject>
    <Parent></Parent>
    <DynamicRendering></DynamicRendering>
    <TwoWayBinding></TwoWayBinding>
    <DefaultProps name="rec"></DefaultProps>
    <DefaultProps></DefaultProps>
    </div>
    )
}