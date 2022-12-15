import { Slide } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BannerMainContainer,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

const messages = [
  <BannerContainer>
    <BannerImage src="/images/banner/banner.jpeg" />
    <BannerContent>
      <BannerTitle variant="h2">Designs</BannerTitle>
      <BannerDescription variant="subtitle">We sell architectural designs acooring to the customer's requirements.</BannerDescription>
    </BannerContent>
  </BannerContainer>,
  <BannerContainer>
    <BannerImage src="/images/banner/banner2.jpg" />
    <BannerContent>
      <BannerTitle variant="h2">Services</BannerTitle>
      <BannerDescription variant="subtitle">We provide all the services from survey to structure completion.</BannerDescription>
    </BannerContent>
  </BannerContainer>,
  <BannerContainer>
    <BannerImage src="/images/banner/banner3.jpg" />
    <BannerContent>
      <BannerTitle variant="h2">Projects</BannerTitle>
      <BannerDescription variant="temp">We have done numerous projects including big projects like designing masterplan of Singar Housing Scheme Gawadar.</BannerDescription>
    </BannerContent>
  </BannerContainer>,
];
export default function Banner() {
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length);

      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <BannerMainContainer>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        {messages[messageIndex]}
      </Slide>
    </BannerMainContainer>
  );
}
