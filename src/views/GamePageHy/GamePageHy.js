import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import { Link } from "react-router-dom";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import FooterHy from "components/Footer/FooterHy.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import radioStyles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import image from "assets/img/bg28.jpg";

const useStyles = makeStyles(styles);
const useRadioStyles = makeStyles(radioStyles);

export default function LoginPage(props) {
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("");
  
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const radioClasses = useRadioStyles();
  const { ...rest } = props;
  const [name, setNameState]=useState("");
  const [isEnteredName, setIsEnteredName]=useState(true);
  const [questionCount, incrementQuestionCount]=useState(0);
  const [helperText, setHelperText] = React.useState("");
  const [disable, setDisable]=useState(false);
  const [error, setError]=useState(false);


  var questions=["Քանի՞ տարեկան դարձավ Գրետան այսօր։", "Ո՞րն է Գրետայի ամենասիրած գույնը։", "Ո՞ւմ է սիրում Գրետան ամենաշատ։", 
                 "Ո՞րն է նրա ամենասիրած ավտոն։", "Ո՞րն է նրա ամենասիրած սերիալը։","Ո՞րն է Գրետայի ստացած ամենալավ նվերը։", "Նրա ամենասիրած գրողն է"];
  var radioOne=["19", "Վարդագույն", "Նարօտին", "Լենդ Ռովեր", "Գահերի խաղը","Ծաղիկներ", "Ագաթա Քրիստի"];
  var radioTwo=["20", "Սև", "Կարսին", "Մերսեդես", "Գերբնականը","Փուչիկեր", "Օսկար Ուայլդ"];
  var radioThree=["23", "Կապույտ", "Կարապետին", "Մինի կուպեր", "Մերլին","Սիրուն տետրեր", "Սթիվեն Քինգ"];
  var radioFour=["25", "Մանուշակագույն", "Կառլոսին", "Վոլկսվագեն", "Գրիմմ", "Այս կայքը","Ջեյն Օսթին"];
  const [question, setQuestion]=useState(questions[0]);
  const [radioButtonOne, setRadioOne]=useState(radioOne[0]);
  const [radioButtonTwo, setRadioTwo]=useState(radioTwo[0]);
  const [radioButtonThree, setRadioThree]=useState(radioThree[0]);
  const [radioButtonFour, setRadioFour]=useState(radioFour[0]);
  const [rightAnswerCount, incremetRightAnswerCount]=useState(0);
  const [isFinished, SetIsFinished]=useState(false);

  const setName = e => {
    setNameState(e.target.value);
    if(isEnteredName===false && e.target.value!=="" && e.target.value.trim()!=="") setIsEnteredName(true);
  }
  function StartTheGame ()
  {
      if(name==="" || name.trim()==="") setIsEnteredName(false);
      else
      {
          incrementQuestionCount(questionCount => questionCount + 1);
      }
  }
  function FinishTheGame()
  {
    if(selectedEnabled==="")
    {
      setHelperText("Խնդրում եմ ընտրեք տարբերակներից մեկը");
    }
    else
    {
      console.log(rightAnswerCount);
      SetIsFinished(true);
      const result={
        playerName: name,
        playerResult: rightAnswerCount
      }
      fetch('https://www.zzzzzzzzz.live/.netlify/functions/GameResult', {
        body: JSON.stringify(result),
        method: 'POST'
      }).then(response => {
        return response.json()
      }).catch((error) => {
        console.log('API error', error)
      })
    }
  }
  function NextQuestion()
  {
    if(selectedEnabled==="")
    {
      setHelperText("Խնդրում եմ ընտրեք տարբերակներից մեկը");
    }
    else
    {
      setQuestion(questions[questionCount]);
      setRadioOne(radioOne[questionCount]);
      setRadioTwo(radioTwo[questionCount]);
      setRadioThree(radioThree[questionCount]);
      setRadioFour(radioFour[questionCount]);
      incrementQuestionCount(questionCount => questionCount + 1);
      setDisable(false);
      setHelperText("");
      setSelectedEnabled("");
    }
    
  }
  function checkAnswerA()
  {
    setSelectedEnabled("a");
    if(questionCount===1) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===2) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===3) 
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===4) 
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===5) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===6) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===7) setHelperText("😭😭😭😭😭😭");
    setDisable(true);
  }
  function checkAnswerB()
  {
    setSelectedEnabled("b");
    if(questionCount===1) 
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===2) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===3) 
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===4) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===5) 
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===6) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===7) setHelperText("😭😭😭😭😭😭");
    setDisable(true);
  }
  function checkAnswerC()
  {
    setSelectedEnabled("c");
    if(questionCount===1) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===2) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===3) 
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===4) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===5)
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===6) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===7)
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
   }
    setDisable(true);
  }
  function checkAnswerD()
  {
    setSelectedEnabled("d");
    if(questionCount===1) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===2) 
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===3) 
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===4) setHelperText("😭😭😭😭😭😭");
    else if(questionCount===5)
    {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===6) {
      setHelperText("😍😍😍😍😍😍");
      incremetRightAnswerCount(rightAnswerCount => rightAnswerCount+ 1);
    }
    else if(questionCount===7) setHelperText("😭😭😭😭😭😭");
    
    setDisable(true);
  }
  return (
    <div>
      
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}>
          { isFinished===false ?
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
                {questionCount===0 ?
                <Card className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Մուտքագրեք Ձեր անունը և պատասխանեք 7 հարցերին</h4>
                  </CardHeader>
                  <CardBody>
                  { isEnteredName===true ?
              <CustomInput
                inputProps={{
                  onChange: (e) => setName(e)
                }}
                labelText="Ձեր անունը"
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
                labelText="Խնդրում եմ մուտքագրեք Ձեր անունը"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />}
              </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={StartTheGame}>
                      Սկսել
                    </Button>
              </CardFooter>
              </Card>: disable===false ?
              <Card className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>{question}</h4>
              </CardHeader>
              <CardBody>
                    <div
                className={
                  radioClasses.checkboxAndRadio +
                  " " +
                  radioClasses.checkboxAndRadioHorizontal
                }
              ></div>
                  <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={checkAnswerA}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={<FiberManualRecord className={radioClasses.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={radioClasses.radioChecked} />}
                      classes={{checked: radioClasses.radio,
                                root: radioClasses.radioRoot}}/>}
                      classes={{label: radioClasses.label,
                                root: radioClasses.labelRoot}}
                  label={radioButtonOne}
                />
                    <div
                className={
                  radioClasses.checkboxAndRadio +
                  " " +
                  radioClasses.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={checkAnswerB}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={radioClasses.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={radioClasses.radioChecked} />
                      }
                      classes={{
                        checked: radioClasses.radio,
                        root: radioClasses.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: radioClasses.label,
                    root: radioClasses.labelRoot
                  }}
                  
                  label={radioButtonTwo}
                />
                </div> 
                <div
                className={
                  radioClasses.checkboxAndRadio +
                  " " +
                  radioClasses.checkboxAndRadioHorizontal
                }
              ></div>
                  <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "c"}
                      onChange={checkAnswerC}
                      value="c"
                      name="radio button enabled"
                      aria-label="C"
                      icon={<FiberManualRecord className={radioClasses.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={radioClasses.radioChecked} />}
                      classes={{checked: radioClasses.radio,
                                root: radioClasses.radioRoot}}/>}
                      classes={{label: radioClasses.label,
                                root: radioClasses.labelRoot}}
                  label={radioButtonThree}
                />
                <div
                className={
                  radioClasses.checkboxAndRadio +
                  " " +
                  radioClasses.checkboxAndRadioHorizontal
                }
              ></div>
                  <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "d"}
                      onChange={checkAnswerD}
                      value="d"
                      name="radio button enabled"
                      aria-label="D"
                      icon={<FiberManualRecord className={radioClasses.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={radioClasses.radioChecked} />}
                      classes={{checked: radioClasses.radio,
                                root: radioClasses.radioRoot}}/>}
                      classes={{label: radioClasses.label,
                                root: radioClasses.labelRoot}}
                  label={radioButtonFour}
                />
                <FormHelperText>{helperText}</FormHelperText>
                </CardBody>
                { questionCount===7 ?
                <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={FinishTheGame}>
                      Finish
                    </Button>
              </CardFooter>:
              <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg" onClick={NextQuestion}>
                Հաջորդը
              </Button>
              </CardFooter>
          }
              </Card>:
              <Card className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>{question}</h4>
              </CardHeader>
              <CardBody>
                    <div
                className={
                  radioClasses.checkboxAndRadio +
                  " " +
                  radioClasses.checkboxAndRadioHorizontal
                }
              ></div>
                  <FormControlLabel
                  control={
                    <Radio
                      disabled
                      checked={selectedEnabled === "a"}
                      onChange={checkAnswerA}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={<FiberManualRecord className={radioClasses.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={radioClasses.radioChecked} />}
                      classes={{checked: radioClasses.radio,
                                root: radioClasses.radioRoot}}/>}
                      classes={{label: radioClasses.label,
                                root: radioClasses.labelRoot}}
                  label={radioButtonOne}
                />
                    <div
                className={
                  radioClasses.checkboxAndRadio +
                  " " +
                  radioClasses.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      disabled
                      checked={selectedEnabled === "b"}
                      onChange={checkAnswerB}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={radioClasses.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={radioClasses.radioChecked} />
                      }
                      classes={{
                        checked: radioClasses.radio,
                        root: radioClasses.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: radioClasses.label,
                    root: radioClasses.labelRoot
                  }}
                  
                  label={radioButtonTwo}
                />
                </div> 
                <div
                className={
                  radioClasses.checkboxAndRadio +
                  " " +
                  radioClasses.checkboxAndRadioHorizontal
                }
              ></div>
                  <FormControlLabel
                  control={
                    <Radio
                      disabled
                      checked={selectedEnabled === "c"}
                      onChange={checkAnswerC}
                      value="c"
                      name="radio button enabled"
                      aria-label="C"
                      icon={<FiberManualRecord className={radioClasses.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={radioClasses.radioChecked} />}
                      classes={{checked: radioClasses.radio,
                                root: radioClasses.radioRoot}}/>}
                      classes={{label: radioClasses.label,
                                root: radioClasses.labelRoot}}
                  label={radioButtonThree}
                />
                <div
                className={
                  radioClasses.checkboxAndRadio +
                  " " +
                  radioClasses.checkboxAndRadioHorizontal
                }
              ></div>
                  <FormControlLabel
                  control={
                    <Radio
                      disabled
                      checked={selectedEnabled === "d"}
                      onChange={checkAnswerD}
                      value="d"
                      name="radio button enabled"
                      aria-label="D"
                      icon={<FiberManualRecord className={radioClasses.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={radioClasses.radioChecked} />}
                      classes={{checked: radioClasses.radio,
                                root: radioClasses.radioRoot}}/>}
                      classes={{label: radioClasses.label,
                                root: radioClasses.labelRoot}}
                  label={radioButtonFour}
                />
                <FormHelperText>{helperText}</FormHelperText>
                </CardBody>
                { questionCount===7 ?
                <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={FinishTheGame}>
                      Finish
                    </Button>
              </CardFooter>:
              <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg" onClick={NextQuestion}>
                Հաջորդը
              </Button>
            </CardFooter>
            }
              </Card>}
                
            </GridItem>
          </GridContainer>
        </div>:
        <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h3>Ձեր արդյունքն է</h3>
                </CardHeader>
                <CardBody>
                  <h1 align="center" >{rightAnswerCount}</h1>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                <Link to={"/hy"} className={classes.link}>
                  <Button simple color="primary" size="lg">
                    Վերադառնալ գլխավոր էջ
                  </Button>
                  </Link>
                </CardFooter>
               </Card>
            </GridItem>
          </GridContainer>
          </div>
        }
        <FooterHy whiteFont />
      </div>
    </div>
  );
}

