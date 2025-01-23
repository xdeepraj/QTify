import React, { useEffect, useState } from "react";
import axios from "axios";

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MediaCard from "../MediaCard/MediaCard";
import Button from "../Button/Button";

const Section = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  useEffect(() => {
    performTopApi();
    performNewApi();
  }, []);

  useEffect(() => {
    console.log("topAlbumData");
    console.log(topAlbumData);
    console.log("newAlbumData");
    console.log(newAlbumData);
  }, [topAlbumData, newAlbumData]);

  const performTopApi = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbumData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const performNewApi = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setNewAlbumData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <Typography sx={{ color: "tertiary.main" }}>Top albums</Typography>
        <Button text={"Collapse"} />
      </Grid>
      <Box
        sx={{
          display: "flex",
          marginLeft: "30px",
        }}
      >
        <Grid container spacing={2}>
          {topAlbumData.map((album, index) => (
            <Grid container key={index} size={{ xs: 3, md: 2.4, lg: 1.7 }}>
              <MediaCard albumData={album} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "30px",
        }}
      >
        <Typography sx={{ color: "tertiary.main" }}>New albums</Typography>
        <Button text={"Show all"} />
      </Grid>
      <Box
        sx={{
          display: "flex",
          marginLeft: "30px",
        }}
      >
        <Grid container spacing={2}>
          {newAlbumData.map((album, index) => (
            <Grid container key={index} size={{ xs: 3, md: 2.4, lg: 1.7 }}>
              <MediaCard albumData={album} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Section;
