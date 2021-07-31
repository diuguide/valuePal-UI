import {Row, Col, Container} from "react-bootstrap";

const Welcome = () => {
    return(
        <Container>
            <Row>
                <Col>
                <div className="intro">Welcome to ValuePal, a stock information tool</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;