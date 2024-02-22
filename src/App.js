import "./App.css";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { CustomTabPanel } from "./component/Tab";
import { useEffect, useState } from "react";
import { BoxModal } from "./component/Box";
import { getUserData } from "./utils/fetchUserDetails";
import { getUserPointsAndLevel } from "./utils/fetchUserPoints";
import { getUserRank } from "./utils/getuserRank";
import profile from "../src/assets/profile.png";
function App() {
  // const [userData, setUserData] = useState(null);
  // const [userPoints, setUserPoints] = useState(null);
  // const [userRank, setUserRank] = useState(null);
  // useEffect(() => {
  //   getUserData().then((res) => {
  //     setUserData(res.data);
  //   });
  //   getUserPointsAndLevel().then((res) => {
  //     setUserPoints(res);
  //   });
  //   getUserRank().then((res) => {
  //     setUserRank(res.data.position);
  //   });
  // }, []);
  return (
    <Box
      m={1}
      sx={{ bgcolor: "#7052ff", height: "98vh", position: "relative" }}
    >
      <Typography
        align="center"
        pt={5}
        variant="h5"
        style={{ color: "white", fontFamily: "Roboto" }}
      >
        Profile
      </Typography>
      <Box
        m="auto"
        width="95%"
        height="75%"
        sx={{
          bgcolor: "white",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={profile}
          sx={{
            width: 85,
            height: 85,
            bottom: 40,
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
            boxShadow: "0px 8px 4px rgba(0, 0, 0, 0.3)",
          }}
        />
        <Typography
          align="center"
          style={{
            fontSize: "20px",
            fontFamily: "Roboto",
            fontWeight: "bolder",
            color: "#535353",
          }}
        >
          {"Chirag Ajmera"}
        </Typography>
        <Container
          sx={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <BoxModal data={"2100"} label={"Points"} />
          <BoxModal data={`#${1}`} label={"Rank"} />
          <BoxModal data={3} label={"Level"} />
        </Container>
        <CustomTabPanel />
      </Box>
    </Box>
  );
}

export default App;
