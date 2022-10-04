import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_txt'>
        Crypto.changer Сервис обмена электронных валют.
      </div>
      <Link to={`/warning`} style={{ textDecoration: "none" }}>
        <div className='warning'>Предупреждение</div>
      </Link>
      <Link to={`/rools`} style={{ textDecoration: "none" }}>
        <div className='rools'>Правила сайта</div>
      </Link>
    </div>
  );
}

export default Footer;
