/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import GridItem from "components/Grid/GridItem.js";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import linkStyles from "assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);
const useLinkStyles = makeStyles(linkStyles);

export default function HeaderLinks(props) {
  function goToWishSection()
  {
    scroll.scrollTo(3000);
  }
  const classes = useStyles();
  const linkClasses = useLinkStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Լեզուներ"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/hy" className={classes.dropdownLink}>
              Հայերեն
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Անգլերեն
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={goToWishSection}
        >
          Շնորհավորիր Գրետային🎉🎉
        </Button>
        </ListItem>
      <ListItem className={classes.listItem}>
      <Link to={"/game-page/hy"} className={classes.dropdownLinkMine}>
          <Button
            target="_blank"
            color="transparent"
          >
           Ինչքա՞ն ես ճանաչում Գրետային
          </Button>
         </Link>
      </ListItem>
    </List>
  );
}
