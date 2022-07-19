const LikeButton = (props) => {
  const likeThisCard = () => {
    props.likeCardCallback(props.cardID);
  };
  return <button onClick={likeThisCard}>+1</button>;
};

export default LikeButton;
