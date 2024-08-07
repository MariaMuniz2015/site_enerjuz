import Carousel from "react-bootstrap/Carousel";

function CarrocellAgro() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-50" src="joaquim1.png" alt="Second slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img className="d-block w-50" src="joaquim2.png" alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-50" src="joaquimin.png" alt="Second slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrocellAgro;
