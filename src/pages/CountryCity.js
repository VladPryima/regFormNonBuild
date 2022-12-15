import { Link } from "react-router-dom";

function CountryCity (props) {

   let pleaseInputCountry = "";
   let pleaseInputCity = "";
   let isInput = true;

   let className = "container black"; //Чекбокс для зміни теми
   if (props.city.length < 2 || props.country.length < 2) {
    if (props.country.length < 2) {
    pleaseInputCountry = " Щоб продовжити, введіть країну";
    }
    else if (props.city.length < 2) {
    pleaseInputCity = " Щоб продовжити, введіть місто";
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
      
        <h1>Країна та місто: <em>{props.country} {props.city}</em></h1>
        <h5>Крок 2 з 5</h5>

        <form>Країна: 
        <input type="text" placeholder="Україна" value={props.country} onChange={(e) => props.setCountry(e.target.value)} />
        <span className="pleaseInput">{pleaseInputCountry}</span>
        </form>
        <form>Місто: 
        <input type="text" placeholder="Харків" value={props.city} onChange={(e) => props.setCity(e.target.value)} />
        <span className="pleaseInput">{pleaseInputCity}</span>
        </form>
        
        <ul>
        <Link to="/"><li className="on back hoverPrev">&#60; Назад</li></Link>
        </ul>

        <ul className={isInput === true ? "on" : "off"}> 
        <Link to="/phone-mail"><li className="to hoverNext">Далі &#62;</li></Link>
        </ul>
        
        
        </div>
    )
}

export default CountryCity;