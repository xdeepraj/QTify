import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";

import { Stack } from "@mui/material";

export default function MediaCard({ albumData }) {
  const followOrLike = albumData.follows || albumData.likes;
  return (
    <Card
      sx={{
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
        <Stack direction="column" alignItems="flex-start">
          <img src={albumData.image} alt="" width="165px" height="165px" />

          <Chip
            label={`${followOrLike} ${albumData.follows ? "Follows" : "Likes"}`}
            sx={{
              height: "25px",
              width: "90px",
              fontSize: 10,
              margin: "8px 10px",
              color: "tertiary.main",
              backgroundColor: "secondary.main",
              maxWidth: "fit-content",
            }}
          />
        </Stack>
      </CardActionArea>

      <Typography sx={{ color: "tertiary.main" }}>{albumData.title}</Typography>
    </Card>
  );
}
