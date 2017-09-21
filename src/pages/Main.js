import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/Col";


const Main = () =>
 <div>
    <Hero backgroundImage="https://myaccount.nytimes.com/img/nyt-logo-379x64.svg">
      <h1>NYT Search</h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Search</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        </Col>
      </Row>
    </Container>
  </div>;

export default Main;


