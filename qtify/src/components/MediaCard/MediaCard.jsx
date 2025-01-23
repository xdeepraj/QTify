import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";

import { Stack } from "@mui/material";

export default function MediaCard({ albumData }) {
  return (
    <Card
      sx={{
        // minWidth: 100,
        borderRadius: 3,
        margin: "30px 15px",
        backgroundColor: "var(--color-secondary)",
      }}
    >
      <CardActionArea
        sx={{
          borderRadius: "0 0 20px 20px",
          backgroundColor: "var(--color-tertiary)",
        }}
      >
        <Stack direction="column">
          <img src={albumData.image} alt="" width="160px" height="160px" />

          <Chip
            label={`${albumData.follows} Follows`}
            sx={{
              margin: "8px 10px",
              color: "tertiary.main",
              backgroundColor: "secondary.main",
            }}
          />
        </Stack>
      </CardActionArea>

      <Typography sx={{ color: "tertiary.main" }}>Bollywood song</Typography>
    </Card>
  );
}
