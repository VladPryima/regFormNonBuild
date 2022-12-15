import { Link } from "react-router-dom";

function Pass (props) {

let pleaseInputPass = "";
let isInput = true;

let className = "container black"; //Чекбокс
  
  if (props.pass.length < 4) {
    pleaseInputPass = "Щоб продовжити, введіть пароль > 4 символів";
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
  
        <h1>Пароль:</h1>
        <h5>Крок 5 з 5</h5>
    
        <form>Пароль: 
        <input type="password" value={props.pass} onChange={(e) => props.setPass(e.target.value)} />
        <span className="pleaseInput">{pleaseInputPass}</span>

        <ul className={isInput === true ? "on" : "off"}>
        <li><button className="btn hoverNext" type="submit" >Завершити</button></li>
        </ul>
        
        </form>
        <ul>
        <Link to="/nickname"><li li className="on back hoverPrev">&#60; Назад</li></Link>  
        </ul>

        
        
        
        </div>
    )
}

export default Pass;