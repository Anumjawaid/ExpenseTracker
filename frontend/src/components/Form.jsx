import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../components/images/formimage.png';
import { InputFunction } from './helper';
import {useDispatch,useSelector} from 'react-redux';
import {addActivity} from '../Store/exercisereducer';
import { useState } from 'react';


const FormField = () => {
  const dispatch = useDispatch();
  const {response} = useSelector((state)=> state.exce);
  const [respo,setRespo]=useState()
  console.log(response,"response")
const[exce,setExcedata]=React.useState({
  name:"",
  description:"",
  activityType:"",
  duration:"",
  date:""



})
    
  const mapUser = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    console.log("On map user",event.target.name,event.target.value)
    setExcedata((data) => {
        return {
            ...data,
            [name]: value
        }
    })

}

const add=()=>{
  

  dispatch(addActivity(exce));
  console.log(exce,"exce")
}

  return (
    <Container style={{ backgroundColor: "Black", width: "100%" }}>
      <Row>
        <Col style={{ marginLeft: "10%" }}><><div className="FormGridChild">
          <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "White" }}>Track your Exercise</h1>
          <p style={{ color: "White" }}>We will help you track your exercise</p>
          <InputFunction label="Name" name="name" text="name" onChange={(e)=>{mapUser(e)} }/><br />
          <label style={{ color: "#8C84FA", marginBottom: "20px" }}>Description</label><br />
          <textarea style={{ background: "transparent", border: "2px solid #8C84FA", color: "#8C84FA" }} placeholder="Enter your description" name='description' onChange={(e)=>{mapUser(e)} }></textarea><br />
          <label style={{ color: "#8C84FA", marginTop: "20px" }}>Activity Type</label><br />
          <select style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA" }} name='activityType' onChange={(e)=>{mapUser(e)} }><option>Select</option>
            <option value="Walk">Walk</option>
            <option value="Run">Run</option>
            <option value="Swim">Swim</option>
            <option value="Hike">Hike</option>
            <option value="BicycleRide">Bicycle Ride</option></select><br />
          <label style={{ color: "#8C84FA", marginTop: "20px" }}>Duration</label><br />
          <input style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA" }} name='duration' onChange={(e)=>{mapUser(e)} } type="time"></input><br />
          <label style={{ color: "#8C84FA", marginTop: "20px" }}>Date</label><br />
          <input style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA" }} name='date' onChange={(e)=>{mapUser(e)} } type="date"></input><br />



          <button style={{ backgroundColor: "#8C84FA", border: "2px solid #8015E8", marginRight: "50px", marginTop: "50px", marginBottom: "50px", padding: "10px", width: "30%", color: "white", borderRadius: "3px", fontWeight: "bold" }} onClick={()=>add()}>Track</button>

        </div></></Col>
        <Col><img src={image} /></Col>
      </Row>

    </Container>
  );
}

export default FormField ;