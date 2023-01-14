import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../components/images/formimage.png';
import { InputFunction } from './helper'

const FormField = () => {
  return (
    <Container style={{ backgroundColor: "Black", width: "100%" }}>
      <Row>
        <Col style={{ marginLeft: "10%" }}><><div className="FormGridChild">
          <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "White" }}>Track your Exercise</h1>
          <p style={{ color: "White" }}>We will help you track your exercise</p>
          <InputFunction name="Name" text="name" /><br />
          <label style={{ color: "#8C84FA", marginBottom: "20px" }}>Description</label><br />
          <textarea style={{ background: "transparent", border: "2px solid #8C84FA", color: "#8C84FA" }} placeholder="Enter your description"></textarea><br />
          <label style={{ color: "#8C84FA", marginTop: "20px" }}>Activity Type</label><br />
          <select style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA" }}><option>Select</option>
            <option value="Walk">Walk</option>
            <option value="Run">Run</option>
            <option value="Swim">Swim</option>
            <option value="Hike">Hike</option>
            <option value="BicycleRide">Bicycle Ride</option></select><br />
          <label style={{ color: "#8C84FA", marginTop: "20px" }}>Duration</label><br />
          <input style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA" }} type="time"></input><br />
          <label style={{ color: "#8C84FA", marginTop: "20px" }}>Date</label><br />
          <input style={{ color: "#8C84FA", marginTop: "20px", width: "35%", background: "transparent", border: "2px solid #8C84FA" }} type="date"></input><br />




          <button style={{ backgroundColor: "#8C84FA", border: "2px solid #8015E8", marginRight: "50px", marginTop: "50px", marginBottom: "50px", padding: "10px", width: "30%", color: "white", borderRadius: "3px", fontWeight: "bold" }}>Track</button>

        </div></></Col>
        <Col><img src={image} /></Col>
      </Row>

    </Container>
  );
}

export default FormField ;