import React from 'react'
import { Container, Navbar, Nav, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import logo from '../assets/media/logo.png';

import { Helmet } from 'react-helmet';


function domein() {
  return (
    <div>
      <Helmet>
        <title>Minecraft Server Hosting – Snelle & Goedkope Servers</title>
        <meta name="description" content="Huur jouw Minecraft server goedkoop en snel. Plugin ondersteuning, backups, alle modpacks en meer." />
        <meta name="keywords" content="Minecraft server hosting, goedkope servers, modpacks, plugins, backups" />
      </Helmet>
      <Container className="text-center my-5">
        <h1 className="fw-bold">Registreer</h1>
        <h1 className="text-warning">jouw domeinnaam</h1>
        <p className="text-muted mb-4">
          DNS-beheer, veel beschikbare TLD's en geweldige ondersteuning..
        </p>
        <Form className="d-flex justify-content-center mb-5">
          <Form.Control
            type="text"
            placeholder="Registreer een domeinnaam..."
            className="w-50 shadow-sm"
          />
        </Form>

        <Row className="g-4 justify-content-center">
          <Col xs={12} md={4}>
            <Card className="border-0 shadow-sm rounded">
              <Card.Body className="d-flex align-items-start gap-3">
                <div className="fs-2 text-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rocket-takeoff" viewBox="0 0 16 16">
                  <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                  <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                  <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                </svg></div>
                <div>
                  <Card.Title className="fw-bold mb-1">DNS-beheer</Card.Title>
                  <Card.Text className="mb-0">
                    Elk domein wordt geleverd met DNS-beheer zonder extra kosten.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="border-0 shadow-sm rounded">
              <Card.Body className="d-flex align-items-start gap-3">
                <div className="fs-2 text-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                </svg></div>
                <div>
                  <Card.Title className="fw-bold mb-1">Betrouwbare prijzen</Card.Title>
                  <Card.Text className="mb-0">
                    We houden onze prijzen voor elk TLD zo stabiel mogelijk.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="border-0 shadow-sm rounded">
              <Card.Body className="d-flex align-items-start gap-3">
                <div className="fs-2 text-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg></div>
                <div>
                  <Card.Title className="fw-bold mb-1">21 beschikbare TLD's</Card.Title>
                  <Card.Text className="mb-0">
                    Kies uit onze uitgebreide lijst met beschikbare topleveldomeinen.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>

    </div>
  )
}

export default domein