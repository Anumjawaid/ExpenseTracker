import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import remove from '../images/icons8-remove.png';
import edit from '../images/icons8-edit1.png';
import './card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'
import { getactivities } from "../Store/exercisereducer";

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
    const {exercise} = useSelector((state)=>state.exercise)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getactivities());
    }, []);
    
    const [show, setShow] = useState(false);
    const[modaldata,setModaldata]=useState({});

    const modalinfo = (which) =>{
        console.log(which,"props which")

    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    

    let arr = [{ name: 'bisma', description: 'description', activity: "activity", duration: 'duration', time: 'time' }
        , { name: 'aqsa', description: 'description', activity: "activity", duration: 'duration', time: 'time' },
    { name: 'rasheed', description: 'description', activity: "activity", duration: 'duration', time: 'time' }]
    return (
        <>
            <Row style={{ background: 'transparent' }}>
                {
                    arr.map((v, i) => (
                        <Col xs={6} md={4} key={i}>
                            <Card style={styleret({ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 3px purple', backgroundColor: '#C9C8FB' })}>

                                <span >

                                    <img src={edit} style={styleret({ padding: '10px', border: '', backgroundColor: '#C9C8FB', width: '50px', marginTop: '15px' })} onClick={handleShow} />
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

                            <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                                <Modal.Header closeButton style={{ backgroundColor: 'purple', color: 'white' }}>
                                    <Modal.Title style={{ backgroundColor: 'transparent', color: 'white' }}>Update</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ backgroundColor: 'black' }}>
                               
                                </Modal.Body>

                            </Modal>
                        </Col>
                    ))
                }
            </Row>


        </>
    )
}

const CardLayout = (props) => {


    return (
        <>
            <Container>
                <ActivityCard />
            </Container>


        </>
    )
}

export { ActivityCard, CardLayout };