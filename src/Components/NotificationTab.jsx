import React, { useContext } from "react";
import Header from "./Header";
import { Store } from "../store/store";
import { convertDate } from "../Services/Helper";

function NotificationTab() {
  const store = useContext(Store);

  function modify(text) {
    const i = text.indexOf(":");
    const j = text.indexOf("Z");

    if (i > 0 && j > 0) {
      const date = text.substring(i + 1, j + 1);
      const convertedDate = convertDate(date.trim());
      const newText = text.replace(date, " " + convertedDate);

      return newText;
    }

    return text;
  }
  return (
    <>
      <Header note={store.note}></Header>

      <div className="text-center mt-5">
        {!store.data && <h1 className="display-4">No Updates !</h1>}
        {store.data
          ? store.data?.notifications.map((msg) => (
              <p key={msg.notificationId} className="display-5 mx-5">
                {modify(msg.message)}
              </p>
            ))
          : null}
      </div>
    </>
  );
}

export default NotificationTab;
