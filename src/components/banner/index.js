import { Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

const messages = [
    (
        <BannerContainer>
                <BannerImage src="/images/banner/banner.jpeg"/>
                <BannerContent>
                    <BannerTitle variant='h2'>Building Designs</BannerTitle>
                    <BannerDescription variant="subtitle">for Sale</BannerDescription>
                </BannerContent>
        </BannerContainer>
    ),
    (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.jpeg"/>
            <BannerContent>
                <BannerTitle variant='h2'>temp</BannerTitle>
                <BannerDescription variant="subtitle">temp</BannerDescription>
            </BannerContent>
        </BannerContainer>
    ),
    (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.jpeg"/>
            <BannerContent>
                <BannerTitle variant='h2'>temp2</BannerTitle>
                <BannerDescription variant="temp">temp2</BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
];
export default function Banner() {
    const theme = useTheme();
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
        <Slide
            direction= {show? "left" : "right"} in={show}
            timeout={{
                enter:500,
                exit: 100,
            }}
        >
            {messages[messageIndex]}
        </Slide>
    );
}