import { Container, Grid } from "@mui/material";
import SingleProduct from "../products/SingleProduct";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProductDesktop from "../products/SingleProductDesktop";
import { useContext } from "react";
import { DesignsContext } from "../../context/designContext";

export default function Design() {
const {designs} = useContext(DesignsContext)

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderDesigns = designs.map((design) => (
    <Grid
      item
      key={design.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {matches ? (
        <SingleProduct product={design} matches={matches} />
      ) : (
        <SingleProductDesktop product={design} matches={matches} />
      )}
    </Grid>
  ));
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderDesigns}
      </Grid>
    </Container>
  );
}
