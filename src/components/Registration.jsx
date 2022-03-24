import {useState} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';


const Registration = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState ("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");




    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your name"  />
    
                        </Form.Group>
                    </Form>
    
                </Col>
            </Row>
        </Container>
    )

}
export default Registration