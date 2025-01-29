import React, { useEffect } from "react";

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MediaCard from "../MediaCard/MediaCard";
import BasicButtons from "../Button/Button";
import Carousel from "../Carousel/Carousel";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";

const Section = ({
  albumName,
  albumData,
  buttonCollapse,
  buttonCollapseHandle,
  isSongSection = false,
  value,
  valueHandle,
  allSongAlbumData = [],
  genresData = [],
}) => {
  const handleCollapseAlbums = () => {
    buttonCollapseHandle(!buttonCollapse);
  };
  const handleChange = (_, newValue) => {
    valueHandle(newValue);
  };

  //   useEffect(() => {
  //     console.log(albumName);
  //     console.log(allSongAlbumData);
  //     // console.log(typeof genresData);
  //     console.log(genresData.data);
  //   });

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
        <Typography sx={{ color: "tertiary.main" }}>{albumName}</Typography>
        {isSongSection ? (
          <></>
        ) : (
          <BasicButtons
            text={buttonCollapse ? "Collapse" : "Show all"}
            onClick={handleCollapseAlbums}
          />
        )}
      </Grid>
      {isSongSection ? (
        <>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="Songs genres tabs">
                  <Tab label="All" value="All" />
                  {genresData.data.map((genre) => (
                    <Tab
                      key={genre.key}
                      label={genre.label}
                      value={genre.label}
                    />
                  ))}
                </TabList>
              </Box>

              <TabPanel value="All">
                <Box
                  sx={{
                    marginLeft: "30px",
                  }}
                >
                  <Carousel albumData={allSongAlbumData} />
                </Box>
              </TabPanel>

              {genresData.data.map((genre) => {
                const filteredArray = allSongAlbumData.filter(
                  (song) => song.genre.label === genre.label
                );

                return (
                  <TabPanel key={genre.key} value={genre.label}>
                    <Box sx={{ marginLeft: "30px" }}>
                      <Carousel albumData={filteredArray} />
                    </Box>
                  </TabPanel>
                );
              })}
            </TabContext>
          </Box>
        </>
      ) : (
        <>
          {!buttonCollapse ? (
            <Box
              sx={{
                marginLeft: "30px",
              }}
            >
              <Carousel albumData={albumData} />
            </Box>
          ) : (
            <Box
              sx={{
                marginLeft: "30px",
              }}
            >
              <Grid container>
                {albumData.map((album) => (
                  <Grid
                    container
                    key={album.id}
                    size={{ xs: 3, md: 2.4, lg: 1.7 }}
                  >
                    <MediaCard albumData={album} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </>
      )}
    </div>
  );
};

export default Section;

//    <TabPanel value="2"></TabPanel>
//               <TabPanel value="3"></TabPanel>
//               <TabPanel value="4"></TabPanel>
//               <TabPanel value="5"></TabPanel>

{
  /* <TabPanel key={genre.key} value={genre.label}>
                  <Grid container spacing={2}>
                    {allSongAlbumData
                      .filter((song) => song.genre.label === genre.label)
                      .map((filteredSong) => (
                        <Box
                          sx={{
                            marginLeft: "30px",
                          }}
                        >
                          <Carousel albumData={filteredSong} />
                        </Box>
                      ))}
                  </Grid>
                </TabPanel>; */
}
