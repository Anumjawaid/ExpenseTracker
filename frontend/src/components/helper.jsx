import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Placeholder from 'react-bootstrap/Placeholder';



const InputFunction = (props) => {
    console.log(props, "props")
    let styleret = (args) => {
        let style = { borderBottom: "3px solid #8C84FA", background: "transparent", borderTop: '0px', borderLeft: '0px', borderRight: "0px", width: '40%', color: "#8C84FA", paddingleft: "40px" }
        if (args == undefined) {
            return style
        }
        else {
            Object.keys(args).map((v, i) => {
                style[v] = args[v]

            }
            )
            return style
        }
    }

    return (
        <>
            <label style={{ color: "#8C84FA", marginBottom: "10px" }} > {props.name}  </label><br />
            <input style={styleret()} type='text' placeholder={`Enter your ${props.text}`} onChange={(e) => props.onChange(e)}></input><br />



        </>
    )
}



function Button(props) {
    return (
        <>
            <button style={{ backgroundColor: "#8C84FA", border: "2px solid #8015E8", margin: "50px", padding: "10px", width: "30%", color: "white", borderRadius: "3px" }}>{props.name}</button>

        </>
    )
}

export { InputFunction, Button };