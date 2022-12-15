import { Link } from "react-router-dom";

const Home = (props) => {
    
   let pleaseInputName = "";
   let pleaseInputSurname = "";
   let isInput = true;

   let className = "container black"; //Чекбокс
   //Якщо input з props.name < 2 символів, pleaseInputName стає не пустим
   if (props.name.length < 2 || props.surname.length < 2) {
    if (props.name.length < 2) {
    pleaseInputName = " Щоб продовжити, введіть ім'я";
    }
    else if (props.surname.length < 2) {
    pleaseInputSurname = " Щоб продовжити, введіть прізвище";
    }
    isInput = false;
   }
   
   //Чекбокс
    if (props.isChecked) {
    className = "container white";

   }


    return ( 
        
        <div className={className}>
            <form>Змінити тему:
            <input type="checkbox" checked={props.isChecked} onChange={(e) => props.setCheck(e.target.checked)}/>
            </form>
      
        <h1>Ім'я та прізвище: <em>{props.name} {props.surname}</em></h1>
        <h5>Крок 1 з 5</h5>

        <form>Ім'я: 
        <input type="text" placeholder="Трейні" value={props.name} onChange={(e) => props.setName(e.target.value)} />
        <span className="pleaseInput">{pleaseInputName}</span>
        </form>
        <form>Прізвище: 
        <input type="text" placeholder="Джуновський" value={props.surname} onChange={(e) => props.setSurname(e.target.value)} />
        <span className="pleaseInput">{pleaseInputSurname}</span>
        </form>
        
        <ul className={isInput === true ? "on" : "off"}>
        <Link className ="oto" to="/country-city"><li className="to hoverNext">Далі &#62;</li></Link>
        </ul>
        
        
        </div>
        
    )
  };
  
export default Home;