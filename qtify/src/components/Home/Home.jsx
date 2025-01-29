import React, { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import Section from "../Section/Section";

const Home = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [allSongAlbumData, setAllSongAlbumData] = useState([]);
  const [genresData, setGenresData] = useState({ data: [] });

  const [isTopCollapsed, setIsTopCollapsed] = useState(false);
  const [isNewCollapsed, setIsNewCollapsed] = useState(false);

  const [value, setValue] = useState("All");

  useEffect(() => {
    performTopApi();
    performNewApi();
    performAllSongApi();
    getGenresData();
  }, []);

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

  const performAllSongApi = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      setAllSongAlbumData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getGenresData = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      setGenresData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        albumName={"Top albums"}
        albumData={topAlbumData}
        buttonCollapse={isTopCollapsed}
        buttonCollapseHandle={setIsTopCollapsed}
      />
      <Section
        albumName={"New albums"}
        albumData={newAlbumData}
        buttonCollapse={isNewCollapsed}
        buttonCollapseHandle={setIsNewCollapsed}
      />
      <Section
        albumName={"Songs"}
        isSongSection={true}
        value={value}
        valueHandle={setValue}
        allSongAlbumData={allSongAlbumData}
        genresData={genresData}
      />
    </div>
  );
};

export default Home;
