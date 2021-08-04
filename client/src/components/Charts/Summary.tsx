import { Row, Col, Button } from "react-bootstrap";
import { yahoo } from "../../utilities/stockData";
import { useEffect } from "react";

const Summary = () => {

const handleClick = () => {
    const endpoint = "market/v2/get-summary";
    const params = {
        region: "US"
    }
    yahoo(params, endpoint);
}

    return(
        <Row>
            <Col>
            <Button onClick={handleClick}></Button>
            </Col>
        </Row>
    )
}

export default Summary;