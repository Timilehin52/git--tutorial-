import "./App.css";
import { Routes, Route } from "react-router";
//import SimpleProps from "./Components/SimpleProps";
//import Conditional from "./Components/Conditional";
//import Simplelist from "./Components/Simplelist";
//import SimpleState from "./Components/SimpleState";
//import SimpleEffect from "./Components/SimpleEffect";
//import ComplexEffect from "./Components/complexEffect";
//import ComplexState from "./Components/complexState";
//import Simpleref from "./Components/Simpleref";
//import Activists from "./Hooks/activists";
//import SimpleForm from "./Components/SimpleForm";
//import ComplexForm from "./Components/ComplexForm";
import SignupForm from "./Components/SignupForm";
import About from "./Components/About";
import Home from "./Components/home";
import UserPage from "./Components/UserPage";
import ClientsPage from "./Components/ClientPage";
import ClientsDetailsPage from "./Components/ClientsDetailsPage";
import ComplexForm from "./Components/ComplexForm";
//import Newpraticee from "./Components/Newpraticee";
import Newtry from "./Components/Newtry";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<SignupForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/client" element={<ClientsPage />} />
        <Route path="/client/:id" element={<ClientsDetailsPage />} />
        <Route path="/Form" element={<ComplexForm />} />
        <Route path="/newtry" element={<Newtry />} />
      </Routes>
      {/* <SimpleProps />

      // ERROR 404 ROUTE
        <Route path="*" element={<Error404 />} />
      <Conditional />
      <Simplelist /> 
      <SimpleState />*/}

      {/*<SimpleEffect />
      <ComplexEffect />
      <ComplexState />
       <Simpleref />
        <Activists />
        <SimpleForm />
        <ComplexForm />
       */}
    </>
  );
}

export default App;
