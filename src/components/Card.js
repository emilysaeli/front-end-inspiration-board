import "./Card.css";
// requirements:
// Create a new card for the selected board by filling out a form
// Display an error message if invalid or incomplete information is provided
// Display all cards of a selected board
// Delete a card
// “+1” a card

const Card = (props) => {
  return (
    <div className="Card">
      <h2>Card</h2>
      <ul>
        <li>Message: {props.message}</li>
        <li>Likes: {props.likes}</li>
      </ul>
    </div>
  );
};

export default Card;
