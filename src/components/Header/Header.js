import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ButtonMenu from "components/CustomButtons/Button.js";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import ListItem from "@material-ui/core/ListItem";
import { Link as LinkIt, animateScroll as scroll } from "react-scroll";
import Loginstyles from "assets/jss/material-kit-react/views/components.js";
import menuStyles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
const useMenuStyles = makeStyles(menuStyles);

const useStyles = makeStyles(styles);
const useLoginStyles = makeStyles(Loginstyles);
export default function Header(props) {
  function goToWishSection()
  {
    scroll.scrollTo(4000);
    setMobileOpen(!mobileOpen);
  }
  const classes = useStyles();
  const menuClasses=useMenuStyles();
  const loginClasses=useLoginStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: "color",
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = <Button className={classes.title}>{brand}</Button>;
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          
          <List className={classes.list}>
      <ListItem className={menuClasses.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Languages"
          buttonProps={{
            className: menuClasses.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/hy" className={menuClasses.dropdownLink}>
              Armenian
            </Link>,
            <Link to="/" className={menuClasses.dropdownLink}>
              English
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={menuClasses.listItem}>
        <ButtonMenu
          target="_blank"
          color="transparent"
          onClick={goToWishSection}
        >
          Congratulate Greta🎉🎉
        </ButtonMenu>
        </ListItem>
      <ListItem className={menuClasses.listItem}>
      <Link to={"/game-page"} className={loginClasses.link}>
          <ButtonMenu
            target="_blank"
            color="transparentMineBlack"
          >
            How much do you know Greta?
          </ButtonMenu>
      </Link>
      </ListItem>
    </List>
        </Drawer>
        </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
