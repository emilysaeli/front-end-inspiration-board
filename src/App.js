import "./index.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";
// import Card from "./components/Card";

function App() {
  // const [cards, setCards] = useState([]);
  const cardData = [
    {
      id: 0,
      title: "card #1",
      message: "this is a test card!",
      likes: 0,
    },
    {
      id: 1,
      title: "card #2",
      message: "here's another test card!",
      likes: 2,
    },
    {
      id: 2,
      title: "card #3",
      message: "third card's the charm",
      likes: 3,
    },
  ];
  return (
    <main>
      <h1>Team Sunshine Inspiration Board</h1>
      <Board cards={cardData}></Board>
      {/* <Card></Card> */}
      <NewBoardForm />
    </main>
  );
}

export default App;
