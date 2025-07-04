import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import minecfraft from '../assets/media/minecraft.webp';
import rocket from '../assets/media/rocket.svg';
import screen1 from '../assets/media/screen1.png';
import screen2 from '../assets/media/screen2.png';
import minecfrat from '../assets/media/minecraft2.png';
import { Helmet } from 'react-helmet';




export default function Home() {
    return (
        <>
                  <Helmet>
                    <title>Minecraft Server Hosting – Snelle & Goedkope Servers</title>
                    <meta name="description" content="Huur jouw Minecraft server goedkoop en snel. Plugin ondersteuning, backups, alle modpacks en meer." />
                    <meta name="keywords" content="Minecraft server hosting, goedkope servers, modpacks, plugins, backups" />
                  </Helmet>

            <Container className="py-5 px-3 px-md-5">
            

            <section className="text-center mb-5">
                <h1 className="fw-bold">De ultieme hosting</h1>
                <h1 className="text-warning">voor jouw project</h1>
                <p className="text-muted">
                    Lanceer vandaag nog je Minecraft server of VPS. Geniet van geweldige klantenservice,<br />
                    fantastische prestaties en het beste controlepaneel.
                </p>
                <div className="mt-3 d-flex flex-column flex-md-row justify-content-center gap-2">
                    <Button variant="dark" className="rounded-pill">Bekijk server hosting</Button>
                    <Button variant="outline-secondary" className="rounded-pill">Lanceer jouw VPS</Button>
                </div>
            </section>

            <Row className="g-3">
                <Col xs={12} md={3}>
                    <div className="border rounded p-3 h-100 d-flex flex-column justify-content-between text-center">
                        <img src={minecfraft} alt="Minecraft" className="img-fluid mb-3" />
                        <h5>Minecraft server hosting</h5>
                        <p className="text-muted small">
                            Je eigen Minecraft server. Alle mods, versies en plugins. Java & Bedrock.
                        </p>
                        <Button variant="outline-dark" size="sm" className="rounded-pill">Bestel jouw server →</Button>
                    </div>
                </Col>

                <Col xs={12} md={9}>
                    <Row className="g-3">

                            <Col xs={12}>
                                <div className="border rounded d-flex justify-content-between flex-wrap align-items-center">

                                <Row>
                                    <Col xs={12} md={9}>
                                        <div className='p-3'>
                                            <h5>Virtual private servers</h5>
                                            <p className="text-muted small mb-2">
                                                Schaalbare en krachtige VPS hosting voor elk project. Kies tussen AMD Ryzen 9 of Intel Xeon CPU's.
                                            </p>
                                            <Button variant="outline-dark" size="sm" className="rounded-pill">Bestel jouw VPS →</Button>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <img src={rocket} alt="Rocket" className="img-fluid" />
                                    </Col>

                                    
                                </Row>

                            </div>
                            </Col>

                            <Col xs={12} md={6}>
                                <div className="border rounded p-3 h-100">
                                    <h5>Domeinnamen</h5>
                                    <p className="text-muted small">
                                        Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.
                                    </p>
                                    <Button variant="outline-dark" size="sm" className="rounded-pill">Registreer jouw domein →</Button>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="border rounded p-3 h-100">
                                    <h5>Webhosting</h5>
                                    <p className="text-muted small">
                                        Onbeperkte webhosting. Kies je opslaglimiet en niets anders
                                    </p>
                                    <Button variant="outline-dark" size="sm" className="rounded-pill">Je website hosten →</Button>
                                </div>
                            </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="align-items-center mb-5 mt-5">
                <Col xs={12} md={6}>
                    <h6 className="text-muted"><i className="bi bi-gear-fill"></i> beheren</h6>
                    <h2 className="fw-bold">In controle met ons fantastische paneel</h2>
                    <p className="text-muted">
                        Beheer je Minecraft server hosting, VPS en andere diensten met ons gebruiksvriendelijke controlepaneel.
                        Ons paneel is in-house ontwikkeld om de beste ervaring te garanderen.
                    </p>
                    <ul className="text-muted small">
                        <li><strong>⭐ Rijk aan features.</strong> We voegen voortdurend nieuwe features toe. Heb je een suggestie? Laat het ons weten!</li>
                        <li><strong>⚡ Snel.</strong> Geen enkele vertraging bij het beheren van je Minecraft server, VPS of andere hosting dienst.</li>
                    </ul>
                    <Button variant="outline-dark" size="sm" className="rounded-pill mt-2">Bekijk de demo →</Button>
                </Col>
                <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
                    <img src={screen1} alt="Controlepaneel" className="img-fluid mx-auto d-block" />
                </Col>
            </Row>

            <Row className="align-items-center mb-5">
                <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
                    <img src={screen2} alt="Dashboard" className="img-fluid mx-auto d-block" />
                </Col>
                <Col xs={12} md={6}>
                    <h6 className="text-muted"><i className="bi bi-headset"></i> support</h6>
                    <h2 className="fw-bold">Krijg geweldige hulp van een team experts</h2>
                    <p className="text-muted">
                        Of je nu een vraag hebt over het installeren van een mod pack voor je Minecraft server of de beste tips wilt.
                        Ons team van experts staat klaar om je vragen te beantwoorden.
                    </p>
                    <p className="text-muted">
                        We hebben ook een kennisbank vol met tutorials over Minecraft server hosting, VPS en nog veel meer.
                    </p>
                    <Button variant="outline-dark" size="sm" className="rounded-pill mt-2">Bekijk de kennisbank →</Button>
                </Col>
            </Row>

            <Row className="align-items-center mb-5">
                <Col xs={12} md={6}>
                    <h2 className="fw-bold">De beste Minecraft server hosting</h2>
                    <p className="text-muted">
                        Game Grid is de Nederlandse Minecraft server hosting. Sinds 2013 combineren we snelle servers, klantenservice van Minecraft server experts en een fantastisch control panel tot de ultieme Minecraft hosting ervaring.
                        Een Game Grid MC server betekent geen lag, lage ping en de beste support.
                    </p>
                    <Button variant="outline-dark" size="sm" className="rounded-pill">Bestel Minecraft server hosting →</Button>
                </Col>
                <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
                    <img src={minecfrat} alt="Minecraft group" className="img-fluid mx-auto d-block" />
                </Col>
            </Row>

            <Row className="row-cols-1 row-cols-md-3 g-3 text-center">
                <Col>
                    <div className="border rounded p-4 h-100">
                        <h6 className="fw-bold">Minecraft server</h6>
                        <p className="text-muted small">Start je eigen Minecraft server in een paar seconden, direct online.</p>
                        <Button variant="dark" size="sm" className="w-100 rounded-pill">Start je minecraft server</Button>
                    </div>
                </Col>
                <Col>
                    <div className="border rounded p-4 h-100">
                        <h6 className="fw-bold">Virtual Private Server</h6>
                        <p className="text-muted small">Krachtige en schaalbare VPS hosting voor elk project.</p>
                        <Button variant="dark" size="sm" className="w-100 rounded-pill">Lanceer jouw VPS</Button>
                    </div>
                </Col>
                <Col>
                    <div className="border rounded p-4 h-100">
                        <h6 className="fw-bold">Webhosting</h6>
                        <p className="text-muted small">Betrouwbare websitehosting zonder onnodige beperkingen.</p>
                        <Button variant="dark" size="sm" className="w-100 rounded-pill">Je website hosten</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
