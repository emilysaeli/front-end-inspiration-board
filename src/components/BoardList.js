import Board from "./Board";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return (
      <li>
        <Board key={board.id} title={board.title} owner={board.owner}></Board>
      </li>
    );
  });

  return (
    <div>
      <h2>Board List</h2>
      {boardComponents}
    </div>
  );
};

// Board.propTypes = {
//   cards: PropTypes.array.isRequired,
// };

export default BoardList;
