


function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }

function BoxColor(props){
   
    const boxStyle = {

        backgroundColor: 'rgb(200,100,0)'
    
    }
    boxStyle.backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`;
    return(

        <div className="boxColor" style={boxStyle}>{boxStyle.backgroundColor} <br/>{rgbToHex(props.r, props.g, props.b)}</div>

    )

}

export default BoxColor