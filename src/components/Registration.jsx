import {useState} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';


const Registration = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        surname: "",
        email: "",
        password:"",
        passwordConfirm: "",
    })
   // const [name, setName] = useState("");
   // const [surname, setSurname] = useState ("");
   // const [email, setEmail] = useState("");
   // const [password, setPassword] = useState("");
   // const [confirmPassword, setconfirmPassword] = useState("");


    const handleSubmit = (event) => {}

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your name" value={userInfo.name}  />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Please enter your name" value={userInfo.surname}  />
                        </Form.Group>
                    </Form>

                </Col>
            </Row>
        </Container>
    )

}
export default Registration