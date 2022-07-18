import "./index.css";
import { useEffect, useState } from "react";
import NewBoardForm from "./components/NewBoardForm";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import axios from "axios";

const BACKENDURL = "https://team-sunshine.herokuapp.com";

function App() {
  // const [cards, setCards] = useState([]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentOwner, setCurrentOwner] = useState(null);

  const updateCurrentBoard = (id) => {
    axios
      .get(`${BACKENDURL}/boards/${id}`)
      .then((res) => {
        const title = res.data.title;
        const owner = res.data.owner;
        const cards = res.data.cards.map((card) => {
          return {
            card_id: card.card_id,
            message: card.message,
            likes: card.likes_count,
          };
        });
        setCurrentTitle(title);
        setCurrentOwner(owner);
        setCardData(cards);
      })
      .catch((error) => {
        console.log(error);
      });
    setCurrentBoard(id);
  };

  const [boardData, setBoardData] = useState([]);

  const getAllBoards = () => {
    axios
      .get(`${BACKENDURL}/boards`)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            board_id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardData(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getAllBoards, []);

  const addBoardData = (boardinfo) => {
    axios
      .post(`${BACKENDURL}/boards`, boardinfo)
      .then((res) => {
        getAllBoards();
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    //   const newBoardList = [...boardData];

    //   newBoardList.push({
    //     title: newBoard.title,
    //     owner: newBoard.owner,
    //   });

    //   setBoardData(newBoardList);

    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const [cardData, setCardData] = useState([]);

  return (
    <section id="App">
      <header>
        <h1>Team Sunshine Inspiration Board</h1>
      </header>
      <main>
        <BoardList
          currentBoard={currentBoard}
          boards={boardData}
          cards={cardData}
          setCurrentBoard={updateCurrentBoard}
        />
        <Board title={currentTitle} owner={currentOwner} cards={cardData} />
        <NewBoardForm addBoardData={addBoardData} />
      </main>
    </section>
  );
}

export default App;
