import React from 'react'
import "./InputArea.css"
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import {useState} from 'react'
function InputArea({defaultCurVal, defaultCur}) {
    const [currency, setCurrency] = useState(defaultCur);
    const [currencyVal, setCurrencyVal] = useState(defaultCurVal);
		console.log('asdsad',currencyVal)
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeTxt=(e)=>{
    
  }
  return (
         <div className='input_area'>
              <TextField fullWidth label="Сумма" value={currencyVal} onChange={handleChangeTxt}/>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Валюта</InputLabel>
                <Select value={currency} label='Валюта' onChange={handleChange}>
                  <MenuItem value={"BTC"} >BTC</MenuItem>
                  <MenuItem value={"ETH"} >ETH</MenuItem>
                  <MenuItem value={"USDT"} >USDT</MenuItem>
                  <MenuItem value={"USDC"}>USDC</MenuItem>
                  <MenuItem value={"BNB"}>BNB</MenuItem>
                  <MenuItem value={"XRP"}>XRP</MenuItem>
                  <MenuItem value={"ADA"}>ADA</MenuItem>
                  <MenuItem value={"SOL"}>SOL</MenuItem>
                  <MenuItem value={"DOGE"}>DOGE</MenuItem>
                  <MenuItem value={"DOT"}>DOT</MenuItem>
                  <MenuItem value={"MATIC"}>MATIC</MenuItem>
                  <MenuItem value={"TRX"}>TRX</MenuItem>
                  <MenuItem value={"UNI"}>UNI</MenuItem>
                  <MenuItem value={"LTC"}>LTC</MenuItem>
                  <MenuItem value={"ETC"}>ETC</MenuItem>
                  <MenuItem value={"LINK"}>LINK</MenuItem>
                  <MenuItem value={"XLM"}>XLM</MenuItem>
                  <MenuItem value={"XMR"}>XMR</MenuItem>
                  <MenuItem value={"BCH"}>BCH</MenuItem>
                  <MenuItem value={"EOS"}>EOS</MenuItem>
                  <MenuItem value={"ZEC"}>ZEC</MenuItem>
                  <MenuItem value={"NEO"}>NEO</MenuItem>
                  <MenuItem value={"DASH"}>DASH</MenuItem>
                </Select>
              </FormControl>
            </div>
  )
}

export default InputArea