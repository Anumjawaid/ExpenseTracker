import React from "react";
import Card from 'react-bootstrap/Card';
import remove from '../images/icons8-remove.png';
import edit from '../images/icons8-edit1.png';
import './card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    let arr = [{ name: 'bisma', description: 'description', activity: "activity", duration: 'duration', time: 'time' }
        , { name: 'aqsa', description: 'description', activity: "activity", duration: 'duration', time: 'time' },
    { name: 'rasheed', description: 'description', activity: "activity", duration: 'duration', time: 'time' }]
    console.log(props, "props coming from ")
    console.log(props.name, "name")
    return (
        <>
            <Container className='background' style={{backgroundColor:'black !important'}}>
                <Row style={{backgroundColor:'black !important'}}>
                    {
                        arr.map((v, i) => (
                            <Col xs={6} md={4} key={i}>
                                <Card style={styleret({ width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 3px purple', backgroundColor: '#C9C8FB' })}>

                                    <span >

                                        <img src={edit} style={styleret({ padding: '10px', border: '', backgroundColor: '#C9C8FB', width: '50px', marginTop: '15px' })} />
                                        <img src={remove} style={styleret({ padding: '10px', border: '', width: '50px', marginTop: '15px' })} />
                                    </span>
                                    <Card.Body>
                                        <Card.Title className="text">{v.name}</Card.Title>
                                        <Card.Text className="text">
                                            {v.description}
                                        </Card.Text>
                                        <Card.Text className="text">{v.activity}</Card.Text>
                                        <Card.Text className="text">{v.duration}</Card.Text>
                                        <Card.Text className="text">{v.date}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

const CardLayout = (props) => {
 

    return (
        <>
            <Container>
               <ActivityCard/>
            </Container>


        </>
    )
}

export { ActivityCard, CardLayout };