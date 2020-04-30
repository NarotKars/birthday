import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);
export default function SectionBasics() {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
      <div id="buttons">
          <div className={classes.title}>
            <h3>
              Եվ վերջապես, կարող եք խաղալ և ստուգել թե ինչքան եք ճանաչում Գրետային։🤔😇😈
            </h3>
          </div>
      </div>
      <div id="inputs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
            </GridItem>
          </GridContainer>
        </div>
        <GridItem xs={12} sm={12} md={12} align="right" className={classes.marginLeft}>
        <Link to={"/game-page/hy"}>
          <Button color="primary" round>
            <Favorite className={classes.icons} /> Խաղալ
          </Button>
        </Link>
        </GridItem>
        </div>
    </div>
  );
}