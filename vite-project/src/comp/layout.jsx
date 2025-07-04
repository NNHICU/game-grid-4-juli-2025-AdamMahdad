import { Outlet, Link } from "react-router-dom";
import logo from "../assets/media/logo.png";
import { Container, Row, Col } from "react-bootstrap";

function Layout() {
    return (

        <div>

            <div className="container py-3">


                <header className="d-flex justify-content-between align-items-center mb-5 text-black">
                    <div className="logo">
                        <Link to="/" className="text-decoration-none me-3">
                        <img src={logo} alt="Logo" height={40}/>
                        </Link>
                        
                    </div>
                    <nav className="text-dark">
                        <Link to="/" className="text-decoration-none me-3 text-dark">Home</Link>
                        <Link to="/about" className="text-decoration-none me-3 text-dark">About</Link>
                        <Link to="/domein" className="text-decoration-none me-3 text-dark">domein</Link>

                    </nav>
                </header>


                <main className="p-6">
                    <Outlet />
                </main>

                <footer className="py-5">
      <Container>
        <Row className="align-items-start">
          <Col className="">
            <img src={logo} className="img-fluid" alt="" />
          </Col>
          <Col>
            <ul className="list-unstyled mb-0 text-center">
                <li>Home</li>
                <li>Minecraft</li>
                <li>Domein</li>
              </ul>
          </Col>

          <Col>
            <p className="mb-0">
              GameGrid is de Nederlandse Minecraft server hosting.<br />
              Start direct je Minecraft 1.21 server. Na het bestellen van<br />
              je Minecraft server kun je binnen 10 seconden aan de<br />
              slag. Naast het hosten van Minecraft servers hosten we<br />
              ook virtual private servers, websites en domeinen.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
            </div>
        </div>
    );
}

export default Layout;
