import React, { useEffect, useState } from "react";
import axios from "axios";

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MediaCard from "../MediaCard/MediaCard";
import BasicButtons from "../Button/Button";
import Carousel from "../Carousel/Carousel";

const Section = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [isTopCollapsed, setIsTopCollapsed] = useState(false);
  const [isNewCollapsed, setIsNewCollapsed] = useState(false);

  useEffect(() => {
    performTopApi();
    performNewApi();
  }, []);

  //   useEffect(() => {
  //     console.log("topAlbumData");
  //     console.log(topAlbumData);
  //     console.log("newAlbumData");
  //     console.log(newAlbumData);
  //   }, [topAlbumData, newAlbumData]);

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

  const handleCollapseTopAlbums = () => {
    setIsTopCollapsed(!isTopCollapsed);
  };

  const handleCollapseNewAlbums = () => {
    setIsNewCollapsed(!isNewCollapsed);
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
        <BasicButtons
          text={isTopCollapsed ? "Collapse" : "Show all"}
          onClick={handleCollapseTopAlbums}
        />
      </Grid>
      {!isTopCollapsed ? (
        <Box
          sx={{
            marginLeft: "30px",
          }}
        >
          <Carousel albumData={topAlbumData} />
        </Box>
      ) : (
        <Box
          sx={{
            marginLeft: "30px",
          }}
        >
          <Grid container>
            {topAlbumData.map((album) => (
              <Grid container key={album.id} size={{ xs: 3, md: 2.4, lg: 1.7 }}>
                <MediaCard albumData={album} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

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
        <BasicButtons
          text={isNewCollapsed ? "Collapse" : "Show all"}
          onClick={handleCollapseNewAlbums}
        />
      </Grid>
      {!isNewCollapsed ? (
        <Box
          sx={{
            marginLeft: "30px",
          }}
        >
          <Carousel albumData={newAlbumData} />
        </Box>
      ) : (
        <Box
          sx={{
            marginLeft: "30px",
          }}
        >
          <Grid container>
            {newAlbumData.map((album) => (
              <Grid container key={album.id} size={{ xs: 3, md: 2.4, lg: 1.7 }}>
                <MediaCard albumData={album} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Section;
