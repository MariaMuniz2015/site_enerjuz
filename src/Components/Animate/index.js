import React, { useEffect } from "react";
import "./animate.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Aos from "aos";

function Animate() {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="imgusina.png"
            alt="Imagem usina"
            backgroundPosition="center"
            backgroundSize="cover"
            height="100%"
          />
          <div>
            <Carousel.Caption>
              <h1>Somos a Enerjuz</h1>

              <p
                style={{
                  color: "#ffffb2",
                  fontSize: "1.2rem",
                  marginBottom: "10rem",
                  fontFamily: "Poppins",
                  animation: "fadeIn 5s",
                }}
              >
                Seja sustentável, produza sua própria energia e garanta um
                futuro limpo para todos
                <br></br>
              </p>
              <br></br>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            position="absolute"
            src="img004.png"
            alt="Imagem tres"
            backgroundPosition="center"
            backgroundSize="cover"
            height="100%"
          />
          <Carousel.Caption>
            <h1 style={{ fontFamily: "Poppins", animation: "fadeIn 5s" }}>
              Enquanto o sol brilha você economiza!
            </h1>
            <p
              style={{
                color: "#ffffb2",
                fontSize: "1.2rem",
                marginBottom: "10rem",
                fontFamily: "Poppins",
                animation: "fadeIn 5s",
              }}
            >
              Economize na sua conta de energia com a instalação de um sistema
              solar fotovoltaico.
              <br></br>
            </p>
            <br></br>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="capa01.png"
            alt="Imagem um"
            backgroundPosition="center"
            backgroundSize="cover"
            height="100%"
          />
          <Carousel.Caption>
            <h1 style={{ fontFamily: "Poppins", animation: "fadeIn 5s" }}>
              Economize sem investir.
            </h1>
            <p
              style={{
                color: "#ffffb2",
                fontSize: "1.2rem",
                marginBottom: "8rem",
                fontFamily: "Poppins",
                animation: "fadeIn 5s",
              }}
            >
              Alugue um sistema fotovoltaico e economize na sua conta de energia
              sem nenhum investimento.
              <p
                style={{
                  color: "#fff",
                  padding: "0.4rem",
                  fontSize: "1.2rem",
                  background: "#ccc",
                  width: "160px",
                  borderRadius: "10px",
                  position: "absolute",
                  top: "50%",
                  left: "42%",
                }}
              >
                <Link to="/usina">SAIBA MAIS</Link>
              </p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Animate;
