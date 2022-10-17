import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/imgs/template/new_slider2.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/imgs/template/new_slider3.jpg"
          alt="Second slide"
        />
      
      </Carousel.Item >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="assets/imgs/template/new_slider.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/imgs/template/new_slider4.jpg"
          alt="Fourth slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;