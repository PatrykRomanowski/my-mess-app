import React, { useState } from "react";

import { Link } from "react-router-dom";

// import { Link as MaterialLink } from "@material-ui/core/Link";

import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import classes from "./userProfile.module.css";

const UserProfile = () => {
  const [activeButton, setActiveButton] = useState(null);
  const drawerWidth = 240;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#ff80ab",
          marginTop: "40px",
          height: "100%",
          width: "240px",
        }}
      >
        <Divider />
        <Box>
          <List sx={{ width: "240px" }}>
            {[
              { name: "my boxes", link: "/myBoxes" },
              { name: "add Box", link: "/addBox" },
              { name: "search item", link: "/searchItem" },
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
                  <div className={classes.bar}></div>
                )}
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
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ textTransform: "uppercase", underline: "none" }}
                    underline="none"

                    // primary={text.name}
                  >
                    {text.name}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* </Drawer> */}
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
        </Box> */}
      </Box>
    </>
  );
};

export default UserProfile;
