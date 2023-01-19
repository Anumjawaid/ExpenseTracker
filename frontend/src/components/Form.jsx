import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import image from '../components/images/formimage.png';
import { InputFunction } from './helper';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import {display} from '../Store/exercisereducer'



const FormField = (prop) => {
  const dispatch = useDispatch();


  const [exercise, setExercise] = useState({
    name: prop.obj == undefined ? "" : prop.obj.name,
    description: prop.obj == undefined ? "" : prop.obj.description,
    activityType: prop.obj == undefined ? "" : prop.obj.activityType,
    duration: prop.obj == undefined ? "" : prop.obj.duration,
    date: prop.obj == undefined ? "" : prop.obj.date,
    _id: prop.obj == undefined ? "" : prop.obj._id
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
    setExercise({
      name:"",
      description:"",
      activityType:"",
      duration: "",
      date: "",
    })
  }


  return (
    <Container style={{ backgroundColor: "black", width: "100%" }}>
      <Row style={{ backgroundColor: 'black' }}>
        <Col style={{ marginLeft: "10%", backgroundColor: 'black' }}><div style={{ backgroundColor: 'black' }} className="FormGridChild">
          <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "White", backgroundColor: 'black', marginTop: '60px' }}>Track your Exercise</h1>
          <p style={{ color: "White", backgroundColor: 'black' }}>We will help you track your exercise</p>
          <InputFunction label="Name" name="name" text="name" value={exercise.name} onChange={mapUser} /><br />
          <label style={{ color: "#8C84FA", marginBottom: "20px", backgroundColor: 'black', fontSize: '20px' }}>Description</label><br />
          <textarea style={{ background: "transparent", border: "2px solid #8C84FA", color: "#8C84FA", backgroundColor: 'black', width: '90%', height: "70px" }} placeholder="Enter your description" name='description' value={exercise.description} onChange={mapUser}></textarea><br />
          <label style={{ color: "#8C84FA", marginTop: "20px", backgroundColor: 'black', fontSize: '20px' }}>Activity Type</label><br />
          <select style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA", backgroundColor: 'black', width: '90%', height: "50px" }} name='activityType' value={exercise.activityType} onChange={(e) => { mapUser(e) }}><option>Select</option>
            <option style={{ backgroundColor: 'black' }} value="Walk">Walk</option>
            <option style={{ backgroundColor: 'black' }} value="Run">Run</option>
            <option style={{ backgroundColor: 'black' }} value="Swim">Swim</option>
            <option style={{ backgroundColor: 'black' }} value="Hike">Hike</option>
            <option style={{ backgroundColor: 'black' }} value="BicycleRide">Bicycle Ride</option></select><br />
          <label style={{ color: "#8C84FA", marginTop: "20px", backgroundColor: 'black', fontSize: '20px' }}>Duration</label><br />
          <input name='duration' onChange={(e) => { mapUser(e) }} type="time" style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "black", border: "2px solid #8C84FA", width: '90%', height: "50px" }} value={exercise.duration} ></input><br />
          <label style={{ color: "#8C84FA", marginTop: "20px", backgroundColor: 'black', fontSize: '20px' }}>Date</label><br />
          <input name='date' onChange={(e) => { mapUser(e) }} type="date" style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA", backgroundColor: 'black', width: '90%', height: "50px" }} value={exercise.date} ></input><br />

          <button style={{ backgroundColor: "#8C84FA", border: "2px solid #8015E8", marginLeft: '120px', marginTop: "50px", marginBottom: "50px", padding: "10px", width: "40%", color: "white", borderRadius: "3px", fontWeight: "bold", fontSize: '20px', letterSpacing: "0.7px" }} onClick={() => add()}>Track</button>

        </div></Col>
        <Col style={{ backgroundColor: 'black', marginTop: '100px' }}>
         <ToastEx/>

          <img style={{ backgroundColor: 'black' }} src={image} />

        </Col>
      </Row>

    </Container>
  );
}

export default FormField;

function ToastEx(props){
  const  response  = useSelector((state) => state.exercise.response)
  const  display1  = useSelector((state) => state.exercise.display)
  let dispatch=useDispatch()
    let scrollItem=document.getElementById('1')
    if(display1=='block'){
      // setDisplay('block')
      scrollItem.scrollIntoView()
      setTimeout(()=>{
       dispatch(display('none'))
      },6000)
     
            
    }
    else{

    }
  return(
    <Toast style={{ backgroundColor: 'black',display:display1 }} id='1'>
    <Toast.Header style={{ backgroundColor: 'black' }} >
      {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
      <strong className="me-auto" style={{ backgroundColor: 'black',color:'#C9C8FB',textTransform:'uppercase' }} >{response}</strong>
    </Toast.Header>
    <Toast.Body>{response}</Toast.Body>
  </Toast>
  )
}