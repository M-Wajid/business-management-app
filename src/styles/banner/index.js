import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme";

export const BannerMainContainer = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'left',
    width: '100', 
    height: '100%',
    background: Colors.white,
    border: 'solid',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));
export const BannerContainer = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    width: '100', 
    height: '100%',
    padding: '10px 10px',
    background: Colors.white,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const BannerImage = styled('img')(({src, theme}) =>({
    src: `url(${src})`,
    width: '600px',
    border: 'dashed',
    [theme.breakpoints.down('md')]:{
        width: '400px' 
    }
}));

export const BannerContent = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '30px'
}));

export const BannerTitle = styled(Typography)(({theme})=>({
    lineheight: 1.5,
    fontsize: '72px',
    marginbottom: '20px',
    [theme.breakpoints.down('sm')]:{
        fontSize: '42px'
    }
})); 

export const BannerDescription = styled(Typography)(({theme})=>({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]:{
        lineHeight: 1.15,
        letterspacing: 1.15,
        marginBottom: '1.5em'
    }
}))
