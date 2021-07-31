import { Row, Col } from "react-bootstrap";
import { authState } from "../../slice/auth/authSlice";
import { useAppSelector } from "../../app/hooks";

const Main = () => {
    const auth = useAppSelector(authState);
    return(
        <>
        {auth.isAuthenticated ? 
        <Row>
            <Col>
            <h1>main test</h1>
            </Col>
        </Row>
        : 
        <Row>
            <Col>
            <h1>Please log in to view this content!</h1>
            </Col>
        </Row>
        }
        </>

    )
}

export default Main;
