import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer } from "../../styles/banner";



export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <h1>Banner</h1>
            <h1>Banner</h1>
        </BannerContainer>
    );
}