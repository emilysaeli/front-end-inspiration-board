import BoardListItem from "./BoardListItem";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return (
      <li>
        <BoardListItem
          key={board.board_id}
          id={board.board_id}
          title={board.title}
          setCurrentBoard={props.setCurrentBoard}
        ></BoardListItem>
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
