import React, { Component } from 'react';
import "./Body.css";
import { Col, Row, Button } from 'react-bootstrap';
import imagebg from "../../assets/google-1.png";
import logo from "../../assets/logo-meet.png";

export default class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Google Meet",
            sub: "Secure video meetings for teams and businesses.",
            desc: "Help your team stay securely connected with enterprise-grade video conferencing built on Google’s robust and secure global infrastructure. Meet is included with Google Workspace, Google Workspace Essentials, and G Suite for Education.",
            button1: "Start Free Trial",
            button2: "Get help", 
        }
    }
    render() {
        return (
            <div className="body-box">
                <div className="image-bg">
                    <Row>
                        <Col>
                            <div className="image">
                                <img src={imagebg} alt="" />
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center d-flex flex-row bd-highlight mt-5 mb-3 justify-content-center">
                                <img className="logo" src={logo} alt="" />
                                <h1>{this.state.title}</h1>
                            </div>
                            <div className="container text-about">
                                <p><span className="sub">{this.state.sub}</span><br /><br />{this.state.desc}</p>
                            </div>
                            <div className="container">
                                <Button variant="primary">{this.state.button1}</Button>
                                <Button variant="outline-primary">{this.state.button2}</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}