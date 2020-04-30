import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image1 from "assets/img/faces/beauty1.jpg";
import image2 from "assets/img/faces/YerevanMall.jpg";
import image3 from "assets/img/faces/atLecture.jpg";
import image4 from "assets/img/faces/naturalSmile.jpg";
import image5 from "assets/img/faces/pinky.jpg";
import image6 from "assets/img/faces/lastTimeWeWentOutTogether.jpg";

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
                src={image1}
                alt="..."
                className={classes.imgRaised +
                  " " + 
                  classes.imgRounded +
                   " " + 
                  classes.imgFluid}
              />
              <h4 align="center">The beauty</h4>
              <div className={classes.space20} />
            </GridItem>
            
            <GridItem xs={12} sm={6} className={classes.marginLeft}>
              <img
                src={image2}
                alt="..."
                className={classes.imgRaised +
                  " " +
                  classes.imgRounded + 
                  " " + 
                  classes.imgFluid}
              />
              <h4 align="center">Memories...memories</h4>
              <div className={classes.space20} />
            </GridItem>

            <GridItem xs={12} sm={6} >
              <img
                src={image3}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4 align="center">Listening to lecture</h4>
              <div className={classes.space20} />
            </GridItem>
            <GridItem xs={12} sm={6} >
              <img
                src={image4}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4 align="center">The natural smile</h4>
              <div className={classes.space20} />
            </GridItem>

            <GridItem xs={12} sm={6} >
              <img
                src={image5}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4 align="center">I keep my promises!!! You love this photo</h4>
              <div className={classes.space20} />
            </GridItem>

            <GridItem xs={12} sm={6} >
              <img
                src={image6}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4 align="center">The last time we were out together</h4>
            </GridItem>
            </GridContainer>
        </div>
      </div>
    </div>
  );
}
