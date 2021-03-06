import {Row, Col, Container} from "react-bootstrap";
import Login from "../Auth/Login";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../app/hooks";
import { authState } from "../../slice/auth/authSlice";

const Welcome = () => {

    const auth = useAppSelector(authState);

    return(
        <Container>
            <Row className="mt-4">
                <Col lg={8} md={6} xs={11}>
                <div className="intro">Welcome to ValuePal, a stock information tool</div>
                <div className="intro-instructions">
                    <ul>
                        <li>To register, please enter your information in the form</li>
                        <li>Once logged in, use the login form to gain access to the search functionality of the website</li>
                        <li>The application is intended to provide and interface for the user to search for stock data, gather news, and other relavent financial information</li>
                        <li>To logout, click the logout link on the navigation bar</li>
                        <li>If you have any questions or notice any bugs in this application please email me at <span className="email-link">everett.diuguid@gmail.com</span></li>
                        <li>Please follow links to the <a href="https://github.com/diuguide/valuePal-UI">frontend</a> and <a href="https://github.com/diuguide/valuePal-java">backend</a> github repositories and submit a pull request if you would like!</li>
                        <li>Thanks for taking the time to visit this website!</li>
                    </ul>
                </div>
                </Col>
                <Col lg={4} md={6} xs={11}>
                    {auth.isLoading ? <Loader /> : <Login />}
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;