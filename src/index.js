

import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import NameSurname from "./pages/NameSurname"; //1
import CountryCity from "./pages/CountryCity"; //2
import PhoneMail from "./pages/PhoneMail"; //3
import NickName from "./pages/NickName"; //4
import Pass from "./pages/Pass"; //5

import NoPage from "./pages/NoPage";
import './index.css';
import { useState } from 'react';

//Если что-то введено - показывает кнопку, если нет - убираем




//Керуємо станом дочірніх компнонентів у головному
export default function App() {
//1 name
const [name, setName] = useState("");

const [surname, setSurname] = useState("");
//2 country
const [country, setCountry] = useState("");
const [city, setCity] = useState("");
//3 country
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
//4 nickname
const [nickname, setNickName] = useState("");
//5 pass
const [pass, setPass] = useState("");

//Керуємо станом чекбокса дочірніх компонентів у гловному
//Від стану чекбокса залежить те, які стилі будуть використані
const [isChecked, setCheck] = useState(false);


 


  return (
    <HashRouter>
      <Routes>
          <Route index element={<NameSurname name={name} setName={setName} surname={surname} setSurname={setSurname} isChecked={isChecked} setCheck={setCheck} />} />
          <Route path="/country-city" element={<CountryCity country={country} setCountry={setCountry} city={city} setCity={setCity} isChecked={isChecked} setCheck={setCheck}/>} />
          <Route path="/phone-mail" element={<PhoneMail phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} isChecked={isChecked} setCheck={setCheck}/>} />
          <Route path="/nickname" element={<NickName nickname={nickname} setNickName={setNickName} isChecked={isChecked} setCheck={setCheck}/>} />
          <Route path="/pass" element={<Pass pass={pass} setPass={setPass} isChecked={isChecked} setCheck={setCheck}/>} />
          <Route path="*" element={<NoPage />} />
        
      </Routes>
      </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
