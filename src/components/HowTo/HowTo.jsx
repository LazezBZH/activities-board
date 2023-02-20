import { useRef } from "react";

import "./HowTo.css";

export default function HowTo() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const inputRef7 = useRef(null);
  const inputRef8 = useRef(null);
  const inputRef9 = useRef(null);
  const inputRef10 = useRef(null);
  const inputRef11 = useRef(null);
  const inputRef12 = useRef(null);
  const inputRef13 = useRef(null);
  const inputRef14 = useRef(null);

  function copy1(e) {
    inputRef1.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy2(e) {
    inputRef2.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy3(e) {
    inputRef3.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy4(e) {
    inputRef4.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy5(e) {
    inputRef5.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy6(e) {
    inputRef6.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy7(e) {
    inputRef7.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy8(e) {
    inputRef8.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy9(e) {
    inputRef9.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy10(e) {
    inputRef10.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy11(e) {
    inputRef11.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy12(e) {
    inputRef12.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy13(e) {
    inputRef13.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy14(e) {
    inputRef14.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }

  return (
    <div className="HowTo">
      <h2>How to use this App?</h2>
      <p>
        Login is just for my training, no security, if you inspect my code you
        can easily find how to log.
      </p>
      <p>Easier than inspect, I give you here all necessary to log.</p>
      <p>You can log as an admin, then you'll be able to see all users.</p>
      <table>
        <caption>
          <h3>To log as an admin</h3>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                ref={inputRef13}
                className="toCopy"
                onClick={copy13}
                value="admin"
                readOnly
                title="click here to copy admin's identifiant"
              />
            </td>
            <td>
              {" "}
              <input
                ref={inputRef14}
                className="toCopy"
                onClick={copy14}
                value="Admin@123"
                readOnly
                title="click here to copy admin's password"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p>You can also see only one user's profile, here are the keys:</p>
      <table className="table-nonegal">
        <caption>
          <h3>To log as one user</h3>
        </caption>
        <thead>
          <tr>
            <th>Mail</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-large">
              <input
                ref={inputRef1}
                className="toCopy"
                onClick={copy1}
                value="jeremy.robson@monmail.com"
                readOnly
                title="click here to copy jeremy robson's e-mail"
              />
            </td>
            <td className="td-small">
              <input
                ref={inputRef2}
                className="toCopy"
                onClick={copy2}
                value="Robson@123"
                readOnly
                title="click here to copy jeremy robson's password"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                ref={inputRef3}
                className="toCopy"
                onClick={copy3}
                value="caroline.buipe@monmail.com"
                readOnly
                title="click here to copy caroline buipe's e-mail"
              />
            </td>
            <td>
              <input
                ref={inputRef4}
                className="toCopy"
                onClick={copy4}
                value="Buipe@123"
                readOnly
                title="click here to copy caroline buipe's password"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                ref={inputRef5}
                className="toCopy"
                onClick={copy5}
                value="jean.bon@monmail.com"
                readOnly
                title="click here to copy jean bon's e-mail"
              />
            </td>
            <td>
              <input
                ref={inputRef6}
                className="toCopy"
                onClick={copy6}
                value="Bon@123"
                readOnly
                title="click here to copy jean bon's password"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                ref={inputRef7}
                className="toCopy"
                onClick={copy7}
                value="arthur.dannes@monmail.com"
                readOnly
                title="click here to copy arthur dannes' e-mail"
              />
            </td>
            <td>
              <input
                ref={inputRef8}
                className="toCopy"
                onClick={copy8}
                value="Dannes@123"
                readOnly
                title="click here to copy arthur dannes' password"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                ref={inputRef9}
                className="toCopy"
                onClick={copy9}
                value="olivia.carte@monmail.com"
                readOnly
                title="click here to copy olivia carte's e-mail"
              />
            </td>
            <td>
              <input
                ref={inputRef10}
                className="toCopy"
                onClick={copy10}
                value="Carte@123"
                readOnly
                title="click here to copy olivia carte's password"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                ref={inputRef11}
                className="toCopy"
                onClick={copy11}
                value="marie.doe@monmail.com"
                readOnly
                title="click here to copy marie doe's e-mail"
              />
            </td>
            <td>
              <input
                ref={inputRef12}
                className="toCopy"
                onClick={copy12}
                value="Doe@123"
                readOnly
                title="click here to copy marie doe's identifiant"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="advert-copy">
        * just click on an identifiant or password to copy in clipboard
      </div>
      <div className="advert-copy">* then click on an input to paste</div>
    </div>
  );
}
