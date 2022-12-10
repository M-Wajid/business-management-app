import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Colors } from "../../styles/theme";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

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
          <FooterTitle variant="body1">About us</FooterTitle>
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
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <List>
            <ListItemText>
              <TextField
                id="standard-basic"
                label="Email Address"
                variant="standard"
              />
            </ListItemText>
            <ListItemText>
              <Button
                startIcon={<SendIcon sx={{ color: "#fff" }} />}
                sx={{ mt: 1, mb: 1, padding: "10px 43px 10px 43px" }}
                variant="contained"
              >
                Subscribe
              </Button>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
