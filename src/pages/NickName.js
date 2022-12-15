import { Link } from "react-router-dom";

const NickName = (props) => {

  let pleaseInputNick = "";
  let isInput = true;

  let className = "container black"; //Чекбокс
  if (props.nickname.length < 2) {
    pleaseInputNick = "Щоб продовжити, введіть псевдонім";
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
  
    <h1>Псевдонім: <em>{props.nickname}</em></h1>
    <h5>Крок 4 з 5</h5>

    <form>Псевдонім: 
    <input type="text" placeholder="ultraFrontEnder3000" value={props.nickname} onChange={(e) => props.setNickName(e.target.value)} />
    <span className="pleaseInput">{pleaseInputNick}</span>
    </form>
  

    <ul>
        <Link to="/phone-mail"><li className="on back hoverPrev">&#60; Назад</li></Link>
        </ul>

        <ul className={isInput === true ? "on" : "off"}> 
        <Link to="/pass"><li className="to hoverNext">Далі &#62;</li></Link>
        </ul>
    
    
    </div>
)
  };
  
  export default NickName;