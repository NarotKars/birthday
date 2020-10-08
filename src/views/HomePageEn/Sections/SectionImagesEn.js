import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/faces/removed.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <h2>Memories</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={6} >
              <img
                src={image}
                alt="..."
                className={classes.imgRaised +
                  " " + 
                  classes.imgRounded +
                   " " + 
                  classes.imgFluid}
              />
              <div className={classes.space20} />
            </GridItem>
            
            <GridItem xs={12} sm={6} className={classes.marginLeft}>
              <img
                src={image}
                alt="..."
                className={classes.imgRaised +
                  " " +
                  classes.imgRounded + 
                  " " + 
                  classes.imgFluid}
              />
              <div className={classes.space20} />
            </GridItem>

            <GridItem xs={12} sm={6} >
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <div className={classes.space20} />
            </GridItem>
            <GridItem xs={12} sm={6} >
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <div className={classes.space20} />
            </GridItem>
            </GridContainer>
        </div>
      </div>
    </div>
  );
}
