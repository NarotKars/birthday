import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image1 from "assets/img/faces/image1.jpg";
import image2 from "assets/img/faces/image2.jpg";
import image3 from "assets/img/faces/image3.jpg";
import image4 from "assets/img/faces/image4.jpg";
import image5 from "assets/img/faces/image5.jpg";
import image6 from "assets/img/faces/image6.jpg";
import image7 from "assets/img/faces/image7.jpg";
import image8 from "assets/img/faces/image8.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <h2>Հուշեր</h2>
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
              <h4 align="center">Գեղեցկություն</h4>
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
              <h4 align="center">Երբ չկար կարանտին</h4>
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
              <h4 align="center">Վերջին անգամ երբ դուրս էինք եկել իրար հետ<span role="img" aria-label="Crying face, Smiling Face with Heart-Eyes">😢😍</span></h4>
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
              <h4 align="center">Դասախոսություն լսելուց<span role="img" aria-label="Face with tears of joys">😂😂😂</span></h4>
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
              <h4 align="center">Ես պահում եմ իմ խոստումները։ Դու այս լուսանկարը շա՜տ շա՜տ ես սիրում
              <span role="img" aria-label="Smiling Face with Halo">😇😇😇</span></h4>
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
              <h4 align="center">Բնական ժպիտը<span role="img" aria-label="Red heart">❤️</span></h4>
              <div className={classes.space20} />
            </GridItem>
            <GridItem xs={12} sm={6} >
              <img
                src={image7}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4 align="center">Երբ բան չունես անելու<span role="img" aria-label="Face with tears of joys">😂</span></h4>
              <div className={classes.space20} />
            </GridItem>
            <GridItem xs={12} sm={6} >
              <img
                src={image8}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4 align="center">Բոյով նկար<span role="img" aria-label="Face with tears of joys">😂</span></h4>
            </GridItem>
            </GridContainer>
        </div>
      </div>
    </div>
  );
}
