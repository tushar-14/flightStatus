import React, { useContext } from "react";
import "../Content.css";
import { Store } from "../store/store";
import { convertDate } from "../Services/Helper";

function Content() {
  const store = useContext(Store);

  return (
    <>
      <div className="content mt-5">
        <div className="container text-center">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-3">
                <h5>Flight No.</h5>
                <span>{store.data?.flightId ? store.data.flightId : "-"}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <h5>Status</h5>
                <span>{store.data?.status ? store.data.status : "-"}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <h5>Departure Gate</h5>
                <span>
                  {store.data?.departureGate ? store.data.departureGate : "-"}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <h5>Arrival Gate</h5>
                <span>
                  {store.data?.arrivalgate ? store.data.arrivalgate : "-"}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <h5>Scheduled Departure</h5>
                <span>
                  {store.data?.scheduledDeparture
                    ? convertDate(store.data.scheduledDeparture)
                    : "-"}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <h5>Scheduled Arrival</h5>
                <span>
                  {store.data?.scheduledArrival
                    ? convertDate(store.data.scheduledArrival)
                    : "-"}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <h5>Actual Departure</h5>
                <span>
                  {store.data?.actualDeparture
                    ? convertDate(store.data.actualDeparture)
                    : "-"}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <h5>Actual Arrival</h5>
                <span>
                  {store.data?.actualArrival
                    ? convertDate(store.data.actualArrival)
                    : "-"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
