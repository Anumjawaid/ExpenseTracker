import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../App.css'
import { ActivityCard } from './Card'

export default function StateBox() {
    let subbtn = {
        backgroundColor: '#D2ACF7',
        border: '1px solid red',
        padding: '100px',
        borderRadius: '20px'

    }
    return (
        <Container>
            <Tabs
                defaultActiveKey="form"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"

            >
                <Tab eventKey="form" title="Form" className='tabcolor' id='tabchange'>
                    <p>SHARED</p>
                </Tab>
                <Tab eventKey="profile" title="Layouts">
                    <Container style={{background:'black'}}>
                        <ActivityCard />
                    </Container>
                </Tab>

            </Tabs>


        </Container>
    )
}