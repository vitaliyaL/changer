import React from "react";
import { Link } from "react-router-dom";
import "./Exchange.css";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import InputArea from "../InputArea/InputArea";
import CurrencyTable from "../CurrencyTable/CurrencyTable";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Exchange() {
  return (
    <Container maxWidth='lg' className='exchange_container'>
      <Grid container spacing={2}>
        <Grid xs={7}>
          <Item elevation={2} className='left_exchange_container'>
            <CurrencyTable/>
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item elevation={2}>
            <InputArea defaultCur={"BTC1"} defaultCurVal={0} idVal={"firstInput"} idCur={"firstCur"} num={1}/>
            <InputArea defaultCurVal={0} defaultCur={"USDT2"} idVal={"secondInput"} idCur={"secondCur"} num={2}/>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Exchange;
