import { Box, Grid, Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Colors } from "../../styles/theme";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#333",
        color: "#fff",
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About Company</FooterTitle>
          <Typography variant="caption2">
            description line1 description line1 description line1
          </Typography>
          <Box
            sx={{
              mt: 4,
              colors: Colors.dove_grey,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About Owner</FooterTitle>
          <Typography variant="caption2">
            description line1 description line1 description line1
          </Typography>
          <Box
            sx={{
              mt: 4,
              colors: Colors.dove_grey,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
