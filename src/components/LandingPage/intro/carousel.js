import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import img1 from '../../../assets/introCarousel1.svg';

const images = [
    {
        src:img1,
        key:1,
    },
    {
        src:img1,
        key:1,
    },
];

const caroursel = () => <UncontrolledCarousel items={images}/>

export default caroursel;