import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import remove from '../images/icons8-remove.png';
import edit from '../images/icons8-edit1.png';
import './card.css'


let styleret = (args) => {
    let style = { border: 'solid 2px #F3904F', width: '40%' }
    if (args == undefined) {
        return style
    }
    else {
        Object.keys(args).map((v, i) => {
            style[v] = args[v]

        }
        )
        return style;
    }
}

const ActivityCard = (props) => {
    return (
        <>
            <Card style={styleret({ width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 3px purple', backgroundColor: '#C9C8FB' })}>

                <span >

                    <img src={edit} style={styleret({ padding: '10px', border: '', backgroundColor: '#C9C8FB', width: '50px', marginTop: '15px' })} />
                    <img src={remove} style={styleret({ padding: '10px', border: '', width: '50px', marginTop: '15px' })} />
                </span>
                <Card.Body>
                    <Card.Title className="text">{props.name}</Card.Title>
                    <Card.Text className="text">
                        {props.description}
                    </Card.Text>
                    <Card.Text className="text">{props.activity}</Card.Text>
                    <Card.Text className="text">{props.duration}</Card.Text>
                    <Card.Text className="text">{props.date}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ActivityCard;