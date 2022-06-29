const NewBoardForm = (props) => {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" name="title"></input>
      <label htmlFor="owner">Owner</label>
      <input type="text" name="owner"></input>
    </form>
  );
};

export default NewBoardForm;
