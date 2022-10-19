import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";



export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/5.jpg"/>
            <BannerContent>
                <BannerTitle variant='h2'>Building Designs</BannerTitle>
                <BannerDescription variant="subtitle">for Sale</BannerDescription>
            </BannerContent>
        </BannerContainer>
    );
}