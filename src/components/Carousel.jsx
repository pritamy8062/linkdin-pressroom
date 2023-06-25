import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import carousel3 from "../images/carousel3.jpg";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-evenly">
          <img
            className="flex-item d-block w-50"
            src={carousel1}
            alt="Slide 1"
          />

          <div className="flex-item">
            <h2 className="heading">FEATURE</h2>
            <h1 className="heading">
              Introducing our new values-based job filter and Top Companies
            </h1>
            <p className="paragraph">
              On April 19, we released a new search filter to make it easier for
              job seekers to discover open job opportunities that align with
              their values. Additionally, LinkedIn’s just released Top Companies
              list can help professionals identify the top workplaces to grow
              their careers.
            </p>
            <div className="cbutton">
              <button className="nav-btn">Read more</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex">
          <img className="d-block w-50" src={carousel2} alt="Slide 2" />

          <div className="flex-item">
            <h2 className="heading">FEATURE</h2>
            <h1 className="heading">Our new verificaition features</h1>
            <p className="paragraph">
              On April 12, we announced a partnership with with industry leaders
              Microsoft Entra and CLEAR to help ensure that LinkedIn is a source
              for trusted, verified information for our members. Members will
              now be able to verify their identity, work email addresses and
              workplaces using these new features.
            </p>
            <div className="cbutton">
              <button className="nav-btn">Read more</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex">
          <img className="d-block w-50" src={carousel3} alt="Slide 3" />

          <div className="flex-item">
            <h2 className="heading">FEATURE</h2>
            <h1 className="heading">Big Ideas for 2023</h1>
            <p className="paragraph">
              Our business leaders and experts shared their predictions for how
              work will change in 2023 with the goal of helping employees and
              employers navigate what's next. Check out our collection of
              perspectives, reports and resources.
            </p>
            <div className="cbutton">
              <button className="nav-btn">Read more</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
