import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

import { dataItemsActions } from "../store/items-data-context";

import firebaseURL from "../consts/firebase";

import classes from "./userProfile.module.css";

const UserProfile = () => {
  const [activeButton, setActiveButton] = useState(null);

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.auth);
  const userId = useSelector((state) => state.dataMess.userId);
  // const drawerWidth = 240;

  useEffect(() => {
    const userURL = firebaseURL + "myUsers/" + userId + ".json";

    const fetchName = async () => {
      const response = await fetch(userURL);
      const responseData = await response.json();

      const responseMyData = [];

      for (const key in responseData.boxes) {
        responseMyData.push({
          id: key,
          boxName: responseData.boxes[key].box,
          boxPlace: responseData.boxes[key].place,
          items: responseData.boxes[key].items,
        });
      }

      // console.log(responseData);
      dispatch(
        dataItemsActions.initialState({
          boxes: responseMyData,
          boxesCounter: responseData.boxCounter.boxCounter,
        })
      );
    };
    fetchName();
  }, [auth]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#ff80ab",
          marginTop: "40px",
          height: "calc(100vh - 100px)",
          width: "240px",
          position: "fixed",
        }}
      >
        <Divider />
        <Box>
          <List
            sx={{
              width: "240px",
            }}
          >
            {[
              {
                name: "my boxes",
                link: "/myBoxes",
              },
              {
                name: "add Box",
                link: "/addBox",
              },
              {
                name: "search item",
                link: "/searchItem",
              },
              {
                name: "delete item",
                link: "/deleteItem",
              },
            ].map((text, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  bgcolor: "#ff80ab",
                }}
                button
                component={Link}
                to={text.link}
              >
                {activeButton === text.name && (
                  <div className={classes.bar}> </div>
                )}{" "}
                <ListItemButton
                  onClick={() => setActiveButton(text.name)}
                  sx={{
                    color: text.name === activeButton ? "#f50057" : "white",
                    underline: "none",
                    textTransform: "none",
                  }}
                  underline="none"
                >
                  <ListItemIcon>
                    {" "}
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}{" "} */}
                  </ListItemIcon>{" "}
                  <ListItemText
                    sx={{
                      textTransform: "uppercase",
                      underline: "none",
                    }}
                    underline="none"

                    // primary={text.name}
                  >
                    {text.name}{" "}
                  </ListItemText>{" "}
                </ListItemButton>{" "}
              </ListItem>
            ))}{" "}
          </List>{" "}
          <Divider />
          <List>
            {" "}
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}{" "} */}
                  </ListItemIcon>{" "}
                  <ListItemText primary={text} />{" "}
                </ListItemButton>{" "}
              </ListItem>
            ))}{" "}
          </List>{" "}
        </Box>
        {/* </Drawer> */}{" "}
        {/* <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
              >
                <Toolbar />
                <Typography
                  sx={{
                    display: "flex",
                  }}
                >
                  <div className={classes.box}></div>
                  <div className={classes.box}></div>
                  <div className={classes.box}></div>
                </Typography>
              </Box> */}{" "}
      </Box>{" "}
    </>
  );
};

export default UserProfile;
