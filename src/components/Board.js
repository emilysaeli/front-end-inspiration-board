// requirements:
// Create a new board by filling out a form
// Display an error message if invalid or incomplete information is provided
// Display all boards and ‘select’ a single board
// Hide form to create boards
// import PropTypes from "prop-types";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CardSortMenu from "./CardSortMenu";

// the Board component is a container component: it'll hold and manage Card data. it will pass this data into the presentational components (Card).

const Board = (props) => {
  const cardComponents = props.cards.map((card) => {
    // console.log(card.message);
    return (
      <li key={card.card_id}>
        <Card
          cardID={card.card_id}
          message={card.message}
          likes={card.likes}
          likeCardCallback={props.likeCardCallback}
          deleteCardCallback={props.deleteCardCallback}
        ></Card>
      </li>
    );
  });

  const deleteMe = () => {
    props.deleteCallback(props.boardId);
  };

  return (
    <div className="board">
      <h2>{props.title}</h2>
      <p>owner: {props.owner}</p>
      <ul>
        {/* <li>title: {props.title}</li> */}
        {cardComponents}
      </ul>
      <CardSortMenu cardSortCallback={props.cardSortCallback}></CardSortMenu>
      <button onClick={deleteMe}>Delete</button>
      <NewCardForm addCardCallback={props.addCardCallback}></NewCardForm>
    </div>
  );
};

// Board.propTypes = {
//   cards: PropTypes.array.isRequired,
// };

export default Board;
