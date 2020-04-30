import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HeaderHy from "components/Header/HeaderHy.js";
import FooterHy from "components/Footer/FooterHy.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinksHy from "components/Header/HeaderLinksHy.js";
import SectionImagesHy from "views/HomePageHy/Sections/SectionImagesHy.js";
import SectionWishesHy from "views/HomePageHy/Sections/SectionWishesHy.js";
import SectionGameHy from "views/HomePageHy/Sections/SectionGameHy.js";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <HeaderHy
        brand="Գրետա Առաքելյան"
        rightLinks={<HeaderLinksHy />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.titleHy}>Ծնունդդ Շնորհավոր</h1>
                <h3 className={classes.subtitle}>
                  Նա, ում սիրում եմ մե՜ծ ամպից էլ ավելի
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionImagesHy />
        <SectionWishesHy />
        <SectionGameHy />
        </div>
      <FooterHy />
    </div>
  );
}
