import "./App.css";
import Card from "./components/Card";
import React from "react";
import NewCard from "./components/NewCard";

const data = [
  {
    ques: "1 lorenlehd ewkc wckw ckjw???",
    ans: "hwhlow 1",
  },
  {
    ques: "2 lorenlehd ewkc wckw ckjw???",
    ans: "hwhlow 2",
  },
];
function App() {
  const [list, setlist] = React.useState(data);
  const [showForm, setShowForm] = React.useState(true);
  return (
    <div className="App  d-flex text-center flex-column align-items-center">
      <h1>Hello</h1>
      {list.map((element, index) => {
        return (
          <Card
            key={index}
            list={list}
            setlist={setlist}
            index={index}
            data={element}
          />
        );
      })}
      {showForm === true ? (
        <NewCard list={list} showForm={setShowForm} addNewCard={setlist} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
