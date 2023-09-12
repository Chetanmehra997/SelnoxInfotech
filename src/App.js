import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './forms/Registration';
import Update from './forms/Update';
import User from './forms/User';


function App() {
  return (
    <div className="App">
     {/* <Registration/> */}

     <BrowserRouter>
  <Routes>
    <Route path="/" element={<Registration />} />
    <Route path="/update/:id/:FirstName/:LastName/:DOB/:Study/:StartDate/:EndDate/:CurrentSalary/:Description" element={<Update />} />

    {/* <Route path="/update/:id" element={<Update />} /> */}
    <Route path="/user" element={<User />} />
  </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
