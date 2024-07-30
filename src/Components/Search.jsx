import React, { useContext } from "react";
import "../Search.css";
import { BsExclamationOctagon } from "react-icons/bs";
import { Store } from "../store/store";

const Search = React.forwardRef(({}, ref) => {
  const store = useContext(Store);
  return (
    <>
      <div className="text-center p-2 search">
        {store.flag && (
          <div
            className="alert alert-danger d-flex align-items-center w-50 mx-auto"
            role="alert"
          >
            <div className="mx-auto">
              <BsExclamationOctagon />
              <span className="p-2 fw-bold">No such flight available.</span>
            </div>
          </div>
        )}
        <h1 className="display-5 fw-bold">Check Flight Status</h1>
        <form onSubmit={store.fetch}>
          <div className="input-group flex-nowrap w-50 mx-auto">
            <input
              type="text"
              className="form-control"
              ref={ref}
              placeholder="Flight No."
              aria-label="flight"
              aria-describedby="addon-wrapping"
            />
            <button
              type="submit"
              className="input-group-text"
              id="addon-wrapping"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
});

export default Search;
