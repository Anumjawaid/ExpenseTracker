import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../App.css'
import { ActivityCard } from './Card'
import FormField from './Form'
import {addActivity} from '../Store/exercisereducer'

export default function StateBox() {
    let subbtn = {
        backgroundColor: '#D2ACF7',
        border: '1px solid red',
        padding: '100px',
        borderRadius: '20px'

    }
    return (
        <Container >
            <Tabs
                defaultActiveKey="form"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                // style={{backgroundColor: 'black'}}

            >
                <Tab eventKey="form" title="Add Activity" className='tabcolor' id='tabchange'>
                    <FormField addActivity={addActivity}/>
                </Tab>
                <Tab eventKey="profile" title="Track Activities">
                    <Container style={{ backgroundColor: "black", width: "100%" ,marginTop:'20px',marginBottom:'20px'}}>
                        <ActivityCard />
                    </Container>
                    
                </Tab>

            </Tabs>


        </Container>
    )
}