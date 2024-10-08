import React from "react";

import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MobileAnimate() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="imgcapac.png"
            alt="Imagem usina fotovoltaíca"
          />
          <div>
            <Carousel.Caption>
              <h1 style={{ fontSize: "16px" }}>Somos a Enerjuz</h1>

              <p
                style={{
                  color: "#ffffb2",
                  fontSize: "0.8rem",
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
            src="imgAgro2.png"
            alt="Instalação de energia fotovoltaíca"
          />
          <Carousel.Caption>
            <h1
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                animation: "fadeIn 5s",
              }}
            >
              Enquanto o sol brilha você economiza!
            </h1>
            <p
              style={{
                color: "#ffffb2",
                fontSize: "0.8rem",

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
            src="usinaimgc.png"
            alt="Instalação de energia fotovoltaíca 2"
          />
          <Carousel.Caption>
            <h1
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                animation: "fadeIn 5s",
              }}
            >
              Economize sem investir.
            </h1>
            <p
              style={{
                color: "#ffffb2",
                fontSize: "0.8rem",
                marginTop: "10%",
                fontFamily: "Poppins",
                animation: "fadeIn 5s",

                marginBottom: "40px",
              }}
            >
              Alugue um sistema fotovoltaico e economize na sua conta de energia
              sem nenhum investimento.
              <p
                style={{
                  color: "#fff",
                  padding: "0.6rem",
                  fontSize: "0.8rem",
                  backgroundColor: "#ccc",
                  width: "120px",
                  borderRadius: "10px",
                  position: "absolute",
                  top: "70%",
                  left: "28%",
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

export default MobileAnimate;
