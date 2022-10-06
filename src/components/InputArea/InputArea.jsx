import React from "react";
import "./InputArea.css";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { array_coins } from "../../constants/array_coins";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function InputArea({ defaultCurVal, defaultCur, idVal, idCur, num }) {
  const [currency, setCurrency] = useState(defaultCur);
  const [firstCur, setFirstCur] = useState("BTC");
  const [secondCur, setSecondCur] = useState("USDT");
  // let firstCur="BTC"
  // let secondCur="USDT"
  const firstInp = document.getElementById("firstInput");
  const secondInp = document.getElementById("secondInput");
  // const firstCur=document.getElementById("firstCur")
  // const secondCur=document.getElementById("secondCur")
  const { table } = useSelector((state) => state.table);
  

  const handleChange = (event) => {
    setCurrency(event.target.value);
    console.log(currency);
    console.log(event.target.value[event.target.value.length - 1]);
    if (event.target.value[event.target.value.length - 1] === "1") {
      setFirstCur(event.target.value.slice(0, event.target.value.length - 1));
      console.log(firstCur);
    } else
      setSecondCur(event.target.value.slice(0, event.target.value.length - 1));
    console.log(firstCur, secondCur);
  };

  const handleChangeTxt = (e) => {
    if (e.target.id === "firstInput") {
      secondInp.value =
        (e.target.value *
          table.filter((j) => j?.CoinInfo?.Name === firstCur)[0]?.RAW?.USD
            .PRICE) /
        table.filter((j) => j?.CoinInfo?.Name === secondCur)[0]?.RAW?.USD.PRICE;
        console.log(table.filter((j) => j?.CoinInfo?.Name === firstCur)[0]?.RAW?.USD
        .PRICE
  );
        console.log(table.filter((j) => j?.CoinInfo?.Name === secondCur)[0]?.RAW?.USD
            .PRICE
      );
      console.log(e.target.value);
      console.log(
        table.filter((j) => j?.CoinInfo?.Name === firstCur)[0]?.RAW?.USD.PRICE
      );
    } else {
    }
  };

  return (
    <div className='input_area'>
      <TextField
        fullWidth
        id={idVal}
        label='Сумма'
        defaultValue={defaultCurVal}
        onInput={handleChangeTxt}
      />
      <FormControl fullWidth>
        <InputLabel id={`${idCur}-label`}>Валюта</InputLabel>
        <Select
          value={currency}
          id={idCur}
          labelId={`${idCur}-label`}
          label='Валюта'
          onChange={handleChange}
        >
          {array_coins.map((i, index) => {
            return (
              <MenuItem key={index} value={`${i}${num}`}>
                {i}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default InputArea;
