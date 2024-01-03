// import logo from './logo.svg';

// import ClassComp from "./Components/ClassComp";
// import FunctionalComp from "./Components/FunctionalComp";
// import OneExport from "./Components/OneExport";
// import DefaultProps from "./day 4/DefaultProps";
// import DynamicRendering from "./day 4/DynamicRendering";
// import Parent from "./day 4/ParentChildCommunication";
// import PropsClass from "./day 4/PropsClass";
// import PropsFunction from "./day 4/PropsFunction";
// import StateClassComp from "./day 4/StateClassComp";
// import StateFunction from "./day 4/StateFunction";
// import StateHoldObject from "./day 4/StateHoldObject";
// import TwoWayBinding from "./day 4/TwoWayBinding";
//     <FunctionalComp></FunctionalComp>
//     <ClassComp></ClassComp>
//     <OneExport></OneExport>
//     <PropsFunction name='Dhayananth'></PropsFunction>
//     <PropsClass college="skct"></PropsClass>
//     <StateClassComp></StateClassComp>
//     <StateFunction></StateFunction>
//     <StateHoldObject></StateHoldObject>
//     <Parent></Parent>
//     <DynamicRendering></DynamicRendering>
//     <TwoWayBinding></TwoWayBinding>
//     <DefaultProps name="rec"></DefaultProps>
//     <DefaultProps></DefaultProps>


// import './App.css';
// import Navigate from './Navigate';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import ProjectLogin from './Project/ProjectLogin';
// import ProjectSignup from './Project/ProjectSignup'
// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/login' element=<ProjectLogin></ProjectLogin> ></Route>
//           <Route path='/signup' element=<ProjectSignup></ProjectSignup> ></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }


// import React from 'react'
// import ErrorBoundary from './Day 8/ErrorBoundary'
// import Car from './Day 8/Car'
// import TryCatch from './Day 8/TryCatch'

// export default function App() {
//   return (
//     <div>
//       <ErrorBoundary>
//         <Car carName="JCB"></Car>
//       </ErrorBoundary>
//     </div>
//   )
// }
import React from 'react'
import { Provider } from 'react-redux'
import store from './Thunk/Store'
import CounterComponent from './Thunk/CounterComponent'

export default function App() {
  return (

    <div>
      <Provider store={store}>
      <CounterComponent></CounterComponent>
      </Provider>
    </div>
  )
}

