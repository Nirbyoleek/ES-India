import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import building1 from "../../../assets/Intro Carousel/img1.jpg";
import building2 from "../../../assets/Intro Carousel/img2.jpg";
import building3 from "../../../assets/Intro Carousel/img3.jpg";
import building4 from "../../../assets/Intro Carousel/img4.jpg";

const images = [
  {
    src: building1,
    key: 1,
  },
  {
    src: building2,
    key: 2,
  },
  {
    src: building3,
    key: 3,
  },
  {
    src: building4,
    key: 4,
  },
];

const caroursel = () => <UncontrolledCarousel items={images} />;

export default caroursel;
