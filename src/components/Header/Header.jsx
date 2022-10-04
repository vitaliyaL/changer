import React from "react";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [close, setClose] = useState(false);
  const handle_close = () => {
    setClose(true);
  };
  return (
    <>
      <div
        className='header'
        style={close ? { display: "none" } : { display: "block" }}
      >
        <pre className='header_txt'>
          Наш единственный{" "}
          <a href='https://t.me/cryptochansupport' target='_blank'>
            Telegram
          </a>
          . Любые обмены в Telegram строго запрещены!
        </pre>
        <p className='close' onClick={handle_close}></p>
      </div>
    </>
  );
}

export default Header;
