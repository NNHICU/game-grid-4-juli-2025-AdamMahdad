import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import enderdragon from '../assets/media/minecraft4.png';
import kist from '../assets/media/minecraft5.webp';
import minecraftLogo from '../assets/media/minecraft6.png';
import golem from '../assets/media/minecraft3.png';
import screen2 from '../assets/media/screen2.png';
import { Helmet } from 'react-helmet';





export default function About() {
  const plans = [
    { title: 'Wood', ram: 1, price: 3.5 },
    { title: 'Stone', ram: 2, price: 6.5 },
    { title: 'Coal', ram: 3, price: 9.5 },
    { title: 'Iron', ram: 4, price: 12.5 },
    { title: 'Lapis', ram: 6, price: 15 },
    { title: 'Gold', ram: 8, price: 18 },
    { title: 'Diamond', ram: 8, price: 24 },
    { title: 'Emerald', ram: 10, price: 30 },
    { title: 'Sand', ram: 12, price: 35 },
    { title: 'Clay', ram: 14, price: 40 },
    { title: 'Granite', ram: 16, price: 45 },
    { title: 'Diorite', ram: 18, price: 55 }
  ];

  return (
    <>

      <Helmet>
        <title>Minecraft Server Hosting – Snelle & Goedkope Servers</title>
        <meta name="description" content="Huur jouw Minecraft server goedkoop en snel. Plugin ondersteuning, backups, alle modpacks en meer." />
        <meta name="keywords" content="Minecraft server hosting, goedkope servers, modpacks, plugins, backups" />
      </Helmet>
      <Container className="py-5 px-3 px-md-5">
        <section className="text-center mb-5">
          <h1 className="fw-bold">minecraft</h1>
          <h1 className="text-warning">server hosting</h1>
          <p>
            krachtige Minecraft serverhosting met fantastische ondersteuning. Sluit je aan bij 50.000+
            spelers die Game Grid al vertrouwden.
          </p>
          <div className="mt-3 d-flex flex-column flex-md-row justify-content-center gap-2">
            <Button variant="dark" className="rounded-pill">
              Bekijk pakketten
            </Button>
            <Button variant="outline-secondary" className="rounded-pill">
              bekijk alle
            </Button>
          </div>
        </section>

        <Row className="g-3">
          <Col xs={12} md={3}>
            <div className="border rounded p-3 h-100 d-flex flex-column justify-content-between text-center">
              <h5>Alle modpacks & versies</h5>
              <p className="text-muted small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, maxime. Omnis dolor corrupti numquam impedit magni rerum rem quisquam dolores ad odio, cupiditate totam repellendus, maiores harum quo blanditiis in!                        </p>
              <img src={minecraftLogo} alt="Minecraft logo een logo met het woord minecraft en modern mords onderelkaar" className="img-fluid mb-3" />

            </div>

          </Col>

          <Col xs={12} md={9}>
            <Row className="g-3">

              <Col xs={12}>
                <div className="border rounded d-flex justify-content-between flex-wrap align-items-center">

                  <Row>
                    <Col xs={12} md={9}>
                      <div className='p-3'>
                        <h5>Plugin ondersteuning</h5>
                        <p className="text-muted small mb-2">
                          lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, maxime. Omnis dolor corrupti numquam impedit magni rerum rem quisquam dolores ad odio, cupiditate totam repellendus, maiores harum quo blanditiis in!
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={3}>
                      <img src={enderdragon} alt="een minecraft character genaamd enderdragon" className="img-fluid mb-3" />
                    </Col>


                  </Row>

                </div>
              </Col>

              <Col xs={12} md={6}>
                <div className="border rounded p-3 h-100">
                  <h5>Onbeperkt aantal servers</h5>
                  <p className="text-muted small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, corrupti quaerat. Error magnam suscipit aperiam? In odit doloribus incidunt corporis illo, voluptas, cupiditate consequatur blanditiis voluptates aspernatur doloremque eum voluptatem?
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="border rounded p-3 h-100">
                  <Row>
                    <Col>
                      <h5>Automatische back-ups</h5>
                      <p className="text-muted small">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias minima assumenda earum.
                      </p>
                    </Col>
                    <Col xs={12} md={3}>
                      <img src={kist} alt="Minecraft kist" className="img-fluid mb-3" />
                    </Col>
                  </Row>

                </div>
              </Col>
            </Row>
          </Col>
        </Row>


        <div className="text-center mb-4 mt-5">
          <h2 className='fw-bold'>Kies je Minecraft server hosting pakket</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas perferendis blanditiis sunt similique. Voluptatibus odit dignissimos voluptas possimus excepturi ipsam sed, laboriosam rem molestias beatae natus officiis, consectetur fuga harum?
          </p>
        </div>
        <Row>
          {plans.map((plan, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className='fw-bold'>{plan.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                      <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                    </svg></span> {plan.ram} GB RAM</Card.Subtitle>
                    <h5 className='fw-bold'>€ {plan.price.toFixed(2)}</h5>
                    <p>per maand</p>
                  </div>
                  <Button variant="dark" className="mt-3 w-100 rounded-pill">Bestel nu</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div>
          <Container className="my-5">
            <Row className="align-items-center gy-4">
              <Col md={6}>
                <img src={screen2} className="img-fluid" alt="hosting programma" />
              </Col>
              <Col md={6}>
                <div className="mb-2 text-uppercase fw-bold text-muted">
                  <span role="img" aria-label="Support">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-umbrella" viewBox="0 0 16 16">
                      <path d="M8 0a.5.5 0 0 1 .5.5v.514C12.625 1.238 16 4.22 16 8c0 0 0 .5-.5.5-.149 0-.352-.145-.352-.145l-.004-.004-.025-.023a3.5 3.5 0 0 0-.555-.394A3.17 3.17 0 0 0 13 7.5c-.638 0-1.178.213-1.564.434a3.5 3.5 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146-.352-.145-.352-.145l-.004-.004-.025-.023a3.5 3.5 0 0 0-.555-.394 3.3 3.3 0 0 0-1.064-.39V13.5H8h.5v.039l-.005.083a3 3 0 0 1-.298 1.102 2.26 2.26 0 0 1-.763.88C7.06 15.851 6.587 16 6 16s-1.061-.148-1.434-.396a2.26 2.26 0 0 1-.763-.88 3 3 0 0 1-.302-1.185v-.025l-.001-.009v-.003s0-.002.5-.002h-.5V13a.5.5 0 0 1 1 0v.506l.003.044a2 2 0 0 0 .195.726c.095.191.23.367.423.495.19.127.466.229.879.229s.689-.102.879-.229c.193-.128.328-.304.424-.495a2 2 0 0 0 .197-.77V7.544a3.3 3.3 0 0 0-1.064.39 3.5 3.5 0 0 0-.58.417l-.004.004S5.65 8.5 5.5 8.5s-.352-.145-.352-.145l-.004-.004a3.5 3.5 0 0 0-.58-.417A3.17 3.17 0 0 0 3 7.5c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.58.417l-.004.004S.65 8.5.5 8.5C0 8.5 0 8 0 8c0-3.78 3.375-6.762 7.5-6.986V.5A.5.5 0 0 1 8 0M6.577 2.123c-2.833.5-4.99 2.458-5.474 4.854A4.1 4.1 0 0 1 3 6.5c.806 0 1.48.25 1.962.511a9.7 9.7 0 0 1 .344-2.358c.242-.868.64-1.765 1.271-2.53m-.615 4.93A4.16 4.16 0 0 1 8 6.5a4.16 4.16 0 0 1 2.038.553 8.7 8.7 0 0 0-.307-2.13C9.434 3.858 8.898 2.83 8 2.117c-.898.712-1.434 1.74-1.731 2.804a8.7 8.7 0 0 0-.307 2.131zm3.46-4.93c.631.765 1.03 1.662 1.272 2.53.233.833.328 1.66.344 2.358A4.14 4.14 0 0 1 13 6.5c.77 0 1.42.23 1.897.477-.484-2.396-2.641-4.355-5.474-4.854z" />
                    </svg></span> support
                </div>
                <h2 className="fw-bold mb-3">
                  Krijg geweldige hulp van een team experts
                </h2>
                <p className="mb-4">
                  Of je nu een vraag hebt over het installeren van een mod pack voor je Minecraft server of de beste tips wilt. Ons team van experts staat klaar om je vragen te beantwoorden. We hebben ook een kennisbank vol met tutorials over Minecraft server hosting, VPS en nog veel meer.
                </p>
                <Button variant="outline-dark">
                  Bekijk de kennisbank &rarr;
                </Button>
              </Col>
            </Row>
          </Container>

          <Container className="my-5">
            <Row className="align-items-center gy-4 flex-md-row flex-column-reverse">
              <Col md={6}>
                <h2 className="fw-bold mb-3">
                  De beste Minecraft server hosting
                </h2>
                <p className="mb-4">
                  Game Grid is de Nederlandse Minecraft server hosting. Sinds 2013 combineren we snelle servers, klantenservice van Minecraft server experts en een fantastisch control panel tot de ultieme Minecraft hosting ervaring. Een Game Grid MC server betekent geen lag, lage ping en de beste support.
                </p>
                <Button variant="outline-dark">
                  Bestel Minecraft server hosting &rarr;
                </Button>
              </Col>
              <Col md={6} className="text-center">
                <img src={golem} className="img-fluid" alt="een minecraft character genaamd golem" />
              </Col>
            </Row>
          </Container>
        </div>

      </Container>
    </>
  );
}
