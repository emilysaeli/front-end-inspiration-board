import Board from "./Board";
import BoardListItem from "./BoardListItem";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return (
      <li>
        <BoardListItem
          key={board.id}
          id={board.id}
          title={board.title}
          setCurrentBoard={props.setCurrentBoard}
        ></BoardListItem>
        {/* <Board
          key={board.id}
          title={board.title}
          owner={board.owner}
          cards={props.cards}
        ></Board> */}
      </li>
    );
  });

  return (
    <section>
      <h2>Board List</h2>
      {boardComponents}
      <main></main>
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
