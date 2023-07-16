import React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Card = (props) => {
  const [arrow, setArrow] = React.useState("up");
  const del = (index) => {
    let tempList = props.list;
    tempList.splice(index, 1);
    console.log(tempList);
    props.setlist([...tempList]);
  };

  return (
    <div className="bg-secondary w-50 d-flex flex-row mb-3 p-4   justify-content-between">
      {/* <div className="">{props.data}</div> */}
      <div className="d-flex flex-column">
        <p>{props.data.ques}</p>
        {arrow === "down" ? (
          <>
            <p>{props.data.ans}</p>
            {props.list.length > 1 ? (
              <button
                type="button"
                onClick={() => {
                  del(props.index);
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            arrow === "up" ? setArrow("down") : setArrow("up");
          }}
          className="btn btn-info"
        >
          {arrow === "up" ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </button>
      </div>
    </div>
  );
};

export default Card;
