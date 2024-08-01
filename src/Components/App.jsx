import { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Content from "./Content";
import Search from "./Search";
import { getData } from "../Services/Flight-service";

import { Store } from "../store/store";
import { onMessage } from "firebase/messaging";
import { generateToken, messaging } from "../firebase";
import NotificationTab from "./NotificationTab";

function App() {
  const flight = useRef();
  const [flag, setFlag] = useState(false);
  const [flightData, setFlightData] = useState();
  const [note, setNote] = useState(0);

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, [note]);

  function fetch(event) {
    event.preventDefault();
    getData(flight.current.value)
      .then((res) => {
        setFlightData(res);
        setNote(res.notifications.length);

        res ? setFlag(false) : setFlag(true);
      })
      .catch((error) => {
        console.log(error);
        setFlag(true);
      });
  }
  return (
    <Store.Provider
      value={{
        data: flightData,
        flag: flag,
        note: note,
        fetch: fetch,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Header></Header>
                <div className="w-25"></div>

                <Search ref={flight}></Search>
                <Content></Content>
              </>
            }
          ></Route>
          <Route
            path="notification"
            element={<NotificationTab></NotificationTab>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
