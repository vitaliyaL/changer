import React from "react";
import { Link } from "react-router-dom";
import "./Exchange.css";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import InputArea from "../InputArea/InputArea";
import CurrencyTable from "../CurrencyTable/CurrencyTable";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Exchange() {
  const [num, setNum] = useState(0);
  const { table, loading, error } = useSelector((state) => state.table);
  useEffect(() => {
    setNum(table.filter((j) => j?.CoinInfo?.Name === "BTC")[0]?.RAW?.USD.PRICE);
  }, [loading, num]);
  console.log(num);
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container maxWidth='lg' className='exchange_container'>
      <Grid container spacing={2}>
        <Grid xs={7}>
          <Item elevation={2} className='left_exchange_container'>
            <CurrencyTable />
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item elevation={2}>
            <InputArea defaultCur={"BTC"} defaultCurVal={1} />
            <InputArea defaultCurVal={num} defaultCur={"USDT"} />
            {/* <input type="text"  defaultValue={num} /> */}
            <p>{num}</p>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Exchange;
