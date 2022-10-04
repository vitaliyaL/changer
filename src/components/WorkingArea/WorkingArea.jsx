import React from "react";
import "./WorkingArea.css";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from '@mui/icons-material/Email';
import { Route, Routes } from "react-router-dom";
import Exchange from "../Exchange/Exchange";
import Reserves from "../Reserves/Reserves";
import {Link} from "react-router-dom"
import Warning from "../Warning/Warning";
import Rools from "../Rools/Rools";
function WorkingArea() {
  return (
    <div className='area'>
      <div className='left_area'>
      <Link to={`/exchange`} style={{ textDecoration: 'none' }}>
        <div className='exchange'>
          <CurrencyExchangeIcon fontSize='small' />
          <p>Обмен валют</p>
        </div></Link>
        <Link to={`/reserves`} style={{ textDecoration: 'none' }}>
        <div className='reserves'>
          <AccountBalanceWalletIcon fontSize='small' />
          <p>Резервы</p>
        </div></Link>
        <a
          href='https://t.me/cryptochansupport'
          target='_blank'
          className='telegram'
        >
          <TelegramIcon fontSize='small' /> <p> Наш Telegram</p>
        </a>
        <div className='working24'>
          <EmailIcon fontSize='small'/>
          <p><a href = "mailto: cryptochan@mail.ru">Служба поддержки</a></p>
        </div>
      </div>
      <div className='right_area'>
        <Routes>
          <Route path='/reserves' element={<Reserves />} />
          <Route path='/exchange' element={<Exchange />} />
          <Route path='/warning' element={<Warning />} />
          <Route path='/rools' element={<Rools />} />
        </Routes>
      </div>
    </div>
  );
}

export default WorkingArea;
