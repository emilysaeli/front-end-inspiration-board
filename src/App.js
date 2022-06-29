import "./index.css";
import { useState } from "react";
// import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import BoardList from "./components/BoardList";

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
        <BoardList boards={boardData} cards={cardData} />
        <NewBoardForm />
      </main>
    </section>
  );
}

export default App;
