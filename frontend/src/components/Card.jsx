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
import { getactivities, updateActivity, deleteActivity } from "../Store/exercisereducer";
import FormField from "./Form";

let styleret = (args) => {
    let style = { border: 'solid 2px #F3904F', width: '40%' }
    if (args == undefined) {
        return style
    }
    else {
        Object.keys(args).map((v, i) => {
            style[v] = args[v]

        })
        return style;
    }
}

const ActivityCard = (props) => {
    const { exercise } = useSelector((state) => state.exercise)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getactivities());
    }, [exercise]);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <>
            <Row></Row>
            {
                <Row style={{ backgroundColor: "black", width: "100%" }}>
                    <br />
                    {exercise.length ?
                        exercise.map((v, i) => (
                            <Col xs={6} md={4} key={i} style={{ backgroundColor: "black", marginBottom: '30px', marginTop: '30px' }}>
                                <Card style={styleret({ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 3px purple', backgroundColor: '#C9C8FB' })}>

                                    <span >

                                        <img src={edit} style={styleret({ padding: '10px', border: '', backgroundColor: '#C9C8FB', width: '50px', marginTop: '15px' })} onClick={handleShow} />
                                        <img src={remove} style={styleret({ padding: '10px', border: '', width: '50px', marginTop: '15px' })} onClick={() => dispatch(deleteActivity(v))} />
                                    </span>
                                    <Card.Body>
                                        <Card.Title style={{ textTransform: 'capitalize' }} className="text">{v.name}</Card.Title>
                                        <Card.Text style={{ textTransform: 'capitalize' }} className="text">
                                            {v.description}
                                        </Card.Text>
                                        <Card.Text style={{ textTransform: 'capitalize' }} className="text">{v.activity}</Card.Text>
                                        <Card.Text style={{ textTransform: 'capitalize' }} className="text">{v.duration}</Card.Text>
                                        <Card.Text style={{ textTransform: 'capitalize' }} className="text">{v.date}</Card.Text>
                                    </Card.Body>
                                </Card>

                                <Modal show={show} onHide={handleClose} fullscreen={true} style={{ backgroundColor: 'transparent' }}>
                                    <Modal.Header closeButton style={{ backgroundColor: 'purple', color: 'white' }}>
                                        <Modal.Title style={{ backgroundColor: 'transparent', color: 'white' }}>Update</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body style={{ backgroundColor: 'black' }}>
                                        <FormField addActivity={updateActivity} obj={v} />
                                    </Modal.Body>

                                </Modal>
                            </Col>
                        ))
                        :
                        <Col xs={6} md={4} style={{ backgroundColor: "black", marginBottom: '30px', marginTop: '30px', color: 'white' }}>
                            <h2 style={{ backgroundColor: "black", }}>No Items At the Moment</h2>

                        </Col>
                    }

                </Row>
            }
            <Row></Row>
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