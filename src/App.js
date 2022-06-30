import "./index.css";
import { useState, useSyncExternalStore } from "react";
// import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import BoardList from "./components/BoardList";
import Board from "./components/Board";

const BACKENDURL = "https://team-sunshine.herokuapp.com/";

function App() {
  // const [cards, setCards] = useState([]);

  const [currentBoard, setCurrentBoard] = useState(null);

  const updateCurrentBoard = (id) => {
    setCurrentBoard(id);
    // axios call to get cards
    // set current cards
    // console.log(currentBoard);
    console.log("board set");
  };

  const testCardData = [
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
  const [boardData, setBoardData] = useState([
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
  ]);

  const addBoardData = (newBoard) => {
    const newBoardList = [...boardData];

    newBoardList.push({
      title: newBoard.title,
      owner: newBoard.owner,
    });

    setBoardData(newBoardList);
  };

  const [cardData, setCardData] = useState([]);

  return (
    <section>
      <header>
        <h1>Team Sunshine Inspiration Board</h1>
      </header>
      <main>
        <BoardList
          boards={boardData}
          cards={cardData}
          setCurrentBoard={updateCurrentBoard}
        />
        <Board cards={testCardData} />
        <NewBoardForm addBoardData={addBoardData} />
      </main>
    </section>
  );
}

export default App;
