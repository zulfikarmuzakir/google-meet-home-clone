import React from "react";
import "./BodyProps.css"
import { Col, Row } from "react-bootstrap";

const BodyProps = (props) => {

    return <div>
        <div className="body-props mt-3">
            <Row>
                <Col>
                    <div className="d-flex flex-column bd-highlight mt-5 justify-content-center">
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex justify-content-center">
                        <img className="image-google" src={props.img} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
        <div className="body-props-2 mt-3">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        <img className="image-google" src={props.img2} alt="" />
                    </div>

                </Col>
                <Col>
                    <div className="d-flex flex-column bd-highlight mt-5 justify-content-center">
                        <h1>{props.title2}</h1>
                        <p>{props.desc2}</p>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
}

export default BodyProps;
