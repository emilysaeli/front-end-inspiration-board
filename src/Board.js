// requirements:
// Create a new board by filling out a form
// Display an error message if invalid or incomplete information is provided
// Display all boards and ‘select’ a single board
// Hide form to create boards

const Board = () => {
  return (
    <div className="Board">
      <h2>Board</h2>
      <ul>
        <li>id: 1 </li>
        <li>title: the first board! </li>
        <li>owner: team sunshine!</li>
      </ul>
    </div>
  );
};

export default Board;
