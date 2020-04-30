import React, { useState } from 'react';
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);
export default function SectionBasics() {
  const [name, setNameState]=useState("");
  const [wish, setWishState]=useState("");
  const [isEnteredName, setIsEnteredName]=useState(true);
  const [isEnteredWish, setIsEnteredWish]=useState(true);
  const [isWished, setIsWished]=useState(false);
  function PostWish ()
  {
    if(name.trim()==="" || wish.trim()==="")
    {
      if(name==="" || name.trim()==="") setIsEnteredName(false);
      else setIsEnteredName(true);
      if(wish==="" || wish.trim()==="") setIsEnteredWish(false);
      else setIsEnteredWish(true);
    }
    else
    {
      const myWish={
        wisherName: name,
        wisherWish: wish
      }
      fetch('https://www.zzzzzzzzz.live/.netlify/functions/CreateWish', {
        body: JSON.stringify(myWish),
        method: 'POST'
      }).then(response => {
        return response.json()
      }).catch((error) => {
        console.log('API error', error)
      })
      setIsWished(true);
    }
  }
  const setName = e => {
    setNameState(e.target.value);
    if(isEnteredName===false && e.target.value!=="" && e.target.value.trim()!=="") setIsEnteredName(true);
  }
  const setWish = e => {
    setWishState(e.target.value);
    if(isEnteredWish===false && e.target.value!=="" && e.target.value.trim()!=="") setIsEnteredWish(true);
  }
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      {isWished===false ?
      <div className={classes.container}>
      <div id="buttons">
          <div className={classes.title}>
            <h3>
            🎈You can write your birthday wish here🎈
              <br />
            </h3>
          </div>
      </div>
      <div id="inputs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              { isEnteredName===true ?
              <CustomInput
                inputProps={{
                  onChange: (e) => setName(e)
                }}
                labelText="YOUR NAME"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />:
              <CustomInput
                inputProps={{
                  onChange: (e) => setName(e)
                }}
                error
                labelText="please enter your name"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />}
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
             { isEnteredWish===true ?
              <CustomInput
                inputProps={{
                  onChange: (e) => setWish(e)
                }}         
                labelText="YOUR BIRTHDAY WISH"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              /> :
              <CustomInput
                inputProps={{
                  onChange: (e) => setWish(e)
                }}      
                error   
                labelText="please enter your birthday wish"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
              }
            </GridItem>
          </GridContainer>
        </div>
        <GridItem xs={12} sm={12} md={12} align="right" className={classes.marginLeft}>
          <Button color="primary" round onClick={PostWish}>
            <Favorite className={classes.icons} /> POST
          </Button>
        </GridItem>
        </div>
        :
        <GridContainer>
          <GridItem align="center">
            <h1>THANK Y❤️U</h1>
          <Favorite className={classes.icons} />
          </GridItem>
        </GridContainer>
        }
    </div>
  );
}