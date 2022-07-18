import BoardListItem from "./BoardListItem";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    if (board.board_id === props.currentBoard) {
      return (
        <li>
          <BoardListItem
            key={board.board_id}
            active={true}
            id={board.board_id}
            title={board.title}
            setCurrentBoard={props.setCurrentBoard}
          ></BoardListItem>
        </li>
      );
    } else {
      return (
        <li>
          <BoardListItem
            key={board.board_id}
            active={false}
            id={board.board_id}
            title={board.title}
            setCurrentBoard={props.setCurrentBoard}
          ></BoardListItem>
        </li>
      );
    }
  });

  return (
    <section className="BoardList">
      <h2>Boards</h2>
      <ul>{boardComponents}</ul>
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
