import "./index.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Board from "./components/Board";
import BoardList from "./components/BoardList";
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

  const boardData = [
    {
      id: 0,
      title: "the first board",
      owner: "team sunshine",
    },
    {
      id: 1,
      title: "the second board",
      owner: "gaby",
    },
  ];

  return (
    <section>
      <header>
        <h1>Team Sunshine Inspiration Board</h1>
      </header>
      <main>
        <BoardList boards={boardData}></BoardList>
        {/* <Board cards={cardData}></Board> */}
        {/* <Card></Card> */}
      </main>
    </section>
  );
}

export default App;
