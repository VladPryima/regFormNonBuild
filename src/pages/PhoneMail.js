import { Link } from "react-router-dom";

function PhoneMail  (props)  {

   let pleaseInputPhone = "";
   let pleaseInputMail = "";
   let isInput = true;

   let className = "container black"; //Чекбокс
   if (props.phone.length < 2 || props.email.length < 2) {
    if (props.phone.length < 2) {
    pleaseInputPhone = " Щоб продовжити, введіть телефон";
    }
    else if (props.email.length < 2) {
    pleaseInputMail = " Щоб продовжити, введіть імейл";
    }
    isInput = false;
   }
  

    //Чекбокс
    if (props.isChecked) {
    className = "container white";

   }
  
  return ( 
    <div className={className}>
    <form>Світла тема:
        <input type="checkbox" checked={props.isChecked} onChange={(e) => props.setCheck(e.target.checked)}/>
      </form>
      
  
    <h1>Телефон та email: <em>{props.phone} {props.email}</em></h1>
    <h5>Крок 3 з 5</h5>

    <form>Телефон: 
    <input type="phone" placeholder="+380 00 000 00 00" value={props.phone} onChange={(e) => props.setPhone(e.target.value)} />
    <span сlassName="pleaseInput">{pleaseInputPhone}</span>
    </form>
    <form>Імейл: 
    <input type="email" placeholder="name@gmail.com" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
    <span сlassName="pleaseInput">{pleaseInputMail}</span>
    </form>
    

    <ul>
        <Link to="/country-city"><li className="on back hoverPrev">&#60; Назад</li></Link>
        </ul>

        <ul className={isInput === true ? "on" : "off"}> 
        <Link to="/nickname"><li className="to hoverNext">Далі &#62;</li></Link>
        </ul>
    
    
    </div>
)
  };
  
export default PhoneMail;