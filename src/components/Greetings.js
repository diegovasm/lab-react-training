const greetingMsg = {

    de:"Hallo",
    en:"Hello",
    es:"Olla",
    fr:"Bonjour"

  }

function Greetings(props) {
  
  
  return(
    
    <div className="greetings">{`${greetingMsg[props.lang]} ${props.children}`}</div>
  )
}

export default Greetings;
