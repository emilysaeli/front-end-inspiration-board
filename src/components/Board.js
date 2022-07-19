// requirements:
// Create a new board by filling out a form
// Display an error message if invalid or incomplete information is provided
// Display all boards and ‘select’ a single board
// Hide form to create boards
// import PropTypes from "prop-types";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

// the Board component is a container component: it'll hold and manage Card data. it will pass this data into the presentational components (Card).

const Board = (props) => {
  const cardComponents = props.cards.map((card) => {
    // console.log(card.message);
    return (
      <li>
        <Card
          key={card.card_id}
          cardID={card.card_id}
          message={card.message}
          likes={card.likes}
          likeCardCallback={props.likeCardCallback}
        ></Card>
      </li>
    );
  });

  return (
    <div className="board">
      <h2>{props.title}</h2>
      <p>owner: {props.owner}</p>
      <ul>
        {/* <li>title: {props.title}</li> */}
        {cardComponents}
      </ul>
      <NewCardForm addCardCallback={props.addCardCallback}></NewCardForm>
    </div>
  );
};

// Board.propTypes = {
//   cards: PropTypes.array.isRequired,
// };

export default Board;
