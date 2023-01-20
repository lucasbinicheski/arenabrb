import { Drawer, IconButton, List } from "@material-ui/core";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import { useTheme } from "@material-ui/styles";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

// styles
import useStyles from "./styles";

// components
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Acessos", link: "/app/inicio", icon: <AssignmentInd /> },
  {
    id: 1,
    label: "Produção",
    link: "/app/producao",
    icon: <GroupIcon />,
  },
  { id: 2, label: "Perfil", link: "/app/perfil", icon: <PersonIcon /> },
];
const structureProd = [
  {
    id: 7,
    label: "Produtor",
    link: "/produtor",
    icon: <GroupIcon />,
  },
  { id: 2, label: "Perfil", link: "/app/perfil", icon: <PersonIcon /> },
];

function Sidebar(props) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  const localStorage = window.localStorage;
 

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {localStorage?.id_token == 2
          ? structureProd.map((link) => (
              <SidebarLink
                key={link.id}
                location={props?.location}
                isSidebarOpened={isSidebarOpened}
                {...link}
              />
            ))
          : structure.map((link) => (
              <SidebarLink
                key={link.id}
                location={props?.location}
                isSidebarOpened={isSidebarOpened}
                {...link}
              />
            ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
