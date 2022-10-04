import React from "react";
import { Link } from "react-router-dom";
import "./Reserves.css";
import Paper from '@mui/material/Paper';

function Reserves() {
  return (
    <div className='coins'>
        <Paper elevation={3} className='coin'>
        <div className='btc'></div>
        <div className='coin_txt'>
          <h4>BTC</h4>
          <p>3312.6</p>
      </div>
      </Paper>
      <Paper elevation={3} className='coin'>
        <div className='ltc'></div>
        <div className='coin_txt'>
          <h4>LTC</h4>
          <p>8157.4</p>
        </div>
      </Paper>
      <Paper elevation={3} className='coin'>
        <div className='etc'></div>
        <div className='coin_txt'>
          <h4>ETH</h4>
          <p>5824.1</p>
        </div>
      </Paper>
      <Paper elevation={3} className='coin'>
        <div className='dash'></div>
        <div className='coin_txt'>
          <h4>DASH</h4>
          <p>7159.16</p>
        </div>
      </Paper>
      <Paper elevation={3} className='coin'>
        <div className='xmr'></div>
        <div className='coin_txt'>
          <h4>XMR</h4>
          <p>10456.82</p>
        </div>
      </Paper>
      <Paper elevation={3} className='coin'>
        <div className='bnb'></div>
        <div className='coin_txt'>
          <h4>BNB</h4>
          <p>3862.74</p>
        </div>
      </Paper>
      <Paper elevation={3} className='coin'>
        <div className='tezer'></div>
        <div className='coin_txt'>
          <h4>USDT-TRC20</h4>
          <p>7431.98</p>
        </div>
      </Paper>
      <Paper elevation={3} className='coin'>
        <div className='tezer'></div>
        <div className='coin_txt'>
          <h4>USDT-ERC20</h4>
          <p>3189.4</p>
        </div>
      </Paper>
      <Paper elevation={3} className='coin'>
        <div className='qiwi'></div>
        <div className='coin_txt'>
          <h4>QIWI</h4>
          <p>5412.94</p>
        </div>
      </Paper>
    </div>
  );
}

export default Reserves;
