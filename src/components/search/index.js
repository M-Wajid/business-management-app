import { Slide, IconButton } from "@mui/material";
import { useState } from "react";
import { SearchBoxContainer, SearchField } from "../../styles/search";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";

export default function Searchbox() {
  const [showSearchbox, setShowSearchbox] = useState(false);

  return (
    <>
      <IconButton onClick={() => setShowSearchbox(true)}>
        <SearchIcon />
      </IconButton>

      <Slide direction="down" in={showSearchbox} timeout={500}>
        <SearchBoxContainer>
          <SearchField
            sx={{ color: Colors.white }}
            variant="standard"
            fullWidth
            placeholder="search..."
          />
          <IconButton>
            <SearchIcon
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: Colors.white }}
            />
          </IconButton>

          <IconButton
            onClick={() => setShowSearchbox(false)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <CloseIcon sx={{ fontSize: "4rem", color: Colors.white }} />
          </IconButton>
        </SearchBoxContainer>
      </Slide>
    </>
  );
}
