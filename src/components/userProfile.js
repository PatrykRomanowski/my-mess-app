import React, { useState } from "react";

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
        }}
      >
        <Divider />
        <Box>
          <List sx={{ width: "200px" }}>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  bgcolor: "#ff80ab",
                  // width:
                  //   text === activeButton
                  //     ? `calc(100% + 0px)`
                  //     : `calc(100% + 0px)`,
                }}
              >
                {activeButton === text && <div className={classes.bar}></div>}
                <ListItemButton
                  onClick={() => setActiveButton(text)}
                  sx={{ color: text === activeButton ? "#f50057" : "white" }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
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
        <Box
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
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
