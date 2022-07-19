import "./index.css";
import { useEffect, useState } from "react";
import NewBoardForm from "./components/NewBoardForm";
// import NewCardForm from "./components/NewCardForm";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import axios from "axios";

const BACKENDURL = "https://team-sunshine.herokuapp.com";

function App() {
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentOwner, setCurrentOwner] = useState(null);
  const [apiError, setApiError] = useState(null);

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
  };

  const [cardData, setCardData] = useState([]);

  const addCardData = (cardInfo) => {
    console.log("adding card");
    // cardInfo: {"message":msg}
    cardInfo["board_id"] = currentBoard;
    axios
      .post(`${BACKENDURL}/cards`, cardInfo)
      .then((res) => {
        updateCurrentBoard(currentBoard);
        console.log(res);
      })
      .catch((err) => {
        setApiError(err.message);
        console.error(err.message);
      });
  };

  const likeCard = (cardID) => {
    console.log(`liking card ${cardID}`);
    axios
      .patch(`${BACKENDURL}/cards/${cardID}/like`)
      .then((res) => {
        console.log(res);
        updateCurrentBoard(currentBoard);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBoard = (id) => {
    axios
      .delete(`${BACKENDURL}/boards/${id}`)
      .then(() => {
        getAllBoards();
        setCurrentBoard(null);
        setCurrentTitle(null);
        setCurrentOwner(null);
        setCardData([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [boardFormVisible, setBoardFormVisible] = useState(true);
  const toggleFormVisible = () => {
    setBoardFormVisible(!boardFormVisible);
  };
  const deleteCard = (cardID) => {
    axios
      .delete(`${BACKENDURL}/cards/${cardID}`)
      .then((res) => {
        updateCurrentBoard(currentBoard);
        console.log(`deleting card ${cardID}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <Board
          title={currentTitle}
          owner={currentOwner}
          boardId={currentBoard}
          cards={cardData}
          likeCardCallback={likeCard}
          deleteCallback={deleteBoard}
          addCardCallback={addCardData}
          deleteCardCallback={deleteCard}
        />
        <NewBoardForm
          addBoardData={addBoardData}
          boardFormVisible={boardFormVisible}
          toggleFormVisible={toggleFormVisible}
        />
      </main>
    </section>
  );
}

export default App;
