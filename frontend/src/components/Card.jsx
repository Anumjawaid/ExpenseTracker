import React, { useEffect, useRef } from "react";
import Card from 'react-bootstrap/Card';
import remove from '../images/icons8-remove.png';
import edit from '../images/icons8-edit1.png';
import empty from '../images/empty.png'
import delet from '../images/delete.png'
import './card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'
import { getactivities, updateActivity, deleteActivity, deleteAll } from "../Store/exercisereducer";
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
    let objpass = useRef()
    const { exercise } = useSelector((state) => state.exercise)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getactivities());
    }, [exercise]);

    const [show, setShow] = useState(false);
    //  console.log(exercise,"exc")
    const handleShow = (v) => {
        // console.log(v,"v")
        objpass.current = v
        // console.log(objpass,"v")
        setShow(true)
    };
    const handleClose = () => setShow(false);


    return (
        <>
            {exercise.length ?
                <>
                    <Row style={{ backgroundColor: "black", width: "100%", display: 'flex', flexDirection: 'row' }}>

                        <Col xs={11} style={{ backgroundColor: "black", }}><h3 style={{ backgroundColor: "black", color: 'white', marginTop: '20px' }}>Delete All</h3></Col>
                        <Col xs={1} style={{ backgroundColor: "black", }}><img src={delet} style={styleret({ padding: '10px', border: '', backgroundColor: 'transparent', width: '50px', marginTop: '15px' })} onClick={()=>dispatch(deleteAll())} /></Col>

                    </Row>

                    <Row style={{ backgroundColor: "black", width: "100%" }}>
                        <br />

                        {
                            exercise.map((v, i) => (
                                <Col xs={6} md={4} key={v._id} style={{ backgroundColor: "black", marginBottom: '30px', marginTop: '30px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>
                                    <Card style={styleret({ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 5px purple', backgroundColor: '#C9C8FB', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px ' })}>

                                        <span >

                                            <img src={edit} style={styleret({ padding: '10px', border: '', backgroundColor: '#C9C8FB', width: '50px', marginTop: '15px' })} onClick={() => handleShow(v)} />
                                            <img src={remove} style={styleret({ padding: '10px', border: '', width: '50px', marginTop: '15px' })} onClick={() => dispatch(deleteActivity(v))} />
                                        </span>
                                        <Card.Body>
                                            <Card.Title style={{ textTransform: 'capitalize' }} className="text">{v.name}</Card.Title>
                                            <Card.Text style={{ textTransform: 'capitalize' }} className="text">
                                                {v.description}
                                            </Card.Text>
                                            <Card.Text style={{ textTransform: 'capitalize' }} className="text">{v.activityType}</Card.Text>
                                            <Card.Text style={{ textTransform: 'capitalize' }} className="text">{v.duration}</Card.Text>
                                            <Card.Text style={{ textTransform: 'capitalize' }} className="text">{v.date}</Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Modal show={show} onHide={handleClose} fullscreen={true} style={{ backgroundColor: 'transparent' }}>
                                        <Modal.Header closeButton style={{ backgroundColor: 'purple', color: 'white' }}>
                                            <Modal.Title style={{ backgroundColor: 'transparent', color: 'white' }}>Update</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body style={{ backgroundColor: 'black' }}>
                                            <FormField addActivity={updateActivity} obj={objpass.current} />
                                        </Modal.Body>

                                    </Modal>
                                </Col>
                            ))

                        }

                    </Row>
                </>
                :
                <Row className="justify-content-md-center">
                    <Col style={{ backgroundColor: "black", margin: '0 auto', color: 'white' }}>
                        <h2 style={{ backgroundColor: "black", margin: '0 auto' }}>No Items At the Moment</h2>
                        <img src={empty} style={styleret({ padding: '10px', border: '', backgroundColor: 'transparent', width: '50%', marginTop: '15px' })} />


                    </Col>
                </Row>
            }

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