import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../components/images/formimage.png';
import { InputFunction } from './helper';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const FormField = (prop) => {
  const dispatch = useDispatch();
  
  const [exercise, setExercise] = useState({
    name:'',
    description: "",
    activityType: "",
    duration: "",
    date: ""
  })

  const mapUser = (event) => {
    const { name, value } = event.target
    setExercise((data) => {
      return {
        ...data,
        [name]: value
      }
    })

  }

  const add = () => {
    dispatch(prop.addActivity(exercise));
  }

  return (
    <Container style={{ backgroundColor: "black", width: "100%" }}>
      <Row style={{backgroundColor: 'black'}}>
        <Col style={{ marginLeft: "10%", backgroundColor: 'black' }}><div style={{backgroundColor: 'black'}} className="FormGridChild">
          <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "White", backgroundColor: 'black' }}>Track your Exercise</h1>
          <p style={{ color: "White", backgroundColor: 'black' }}>We will help you track your exercise</p>
          <InputFunction label="Name" name="name" text="name" value={prop.obj==undefined?exercise.name:prop.obj.name} onChange={(e) => { mapUser(e) }} /><br />
          <label style={{ color: "#8C84FA", marginBottom: "20px", backgroundColor: 'black' }}>Description</label><br />
          <textarea style={{ background: "transparent", border: "2px solid #8C84FA", color: "#8C84FA", backgroundColor: 'black' }} placeholder="Enter your description" name='description' value={prop.obj==undefined?exercise.description:prop.obj.description}  onChange={(e) => { mapUser(e) }}></textarea><br />
          <label style={{ color: "#8C84FA", marginTop: "20px", backgroundColor: 'black' }}>Activity Type</label><br />
          <select style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA", backgroundColor: 'black' }} name='activityType' value={prop.obj==undefined?exercise.activityType:prop.obj.activityType}  onChange={(e) => { mapUser(e) }}><option>Select</option>
            <option style={{backgroundColor: 'black'}} value="Walk">Walk</option>
            <option style={{backgroundColor: 'black'}} value="Run">Run</option>
            <option style={{backgroundColor: 'black'}} value="Swim">Swim</option>
            <option style={{backgroundColor: 'black'}} value="Hike">Hike</option>
            <option style={{backgroundColor: 'black'}} value="BicycleRide">Bicycle Ride</option></select><br />
          <label style={{ color: "#8C84FA", marginTop: "20px", backgroundColor: 'black' }}>Duration</label><br />
          <input name='duration' onChange={(e) => { mapUser(e) }} type="time" style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "black", border: "2px solid #8C84FA",  }} value={prop.obj==undefined?exercise.duration:prop.obj.duration} ></input><br />
          <label style={{ color: "#8C84FA", marginTop: "20px", backgroundColor: 'black' }}>Date</label><br />
          <input name='date' onChange={(e) => { mapUser(e) }} type="date" style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA", backgroundColor: 'black' }} value={prop.obj==undefined?exercise.date:prop.obj.date} ></input><br />

          <button style={{ backgroundColor: "#8C84FA", border: "2px solid #8015E8", marginRight: "50px", marginTop: "50px", marginBottom: "50px", padding: "10px", width: "30%", color: "white", borderRadius: "3px", fontWeight: "bold" }} onClick={() => add()}>Track</button>

        </div></Col>
        <Col style={{backgroundColor: 'black'}}><img style={{backgroundColor: 'black'}} src={image} /></Col>
      </Row>

    </Container>
  );
}

export default FormField;