const Card = ({ handleChoice, card, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="front" />
        <img
          src="/img/cover.png"
          className="back"
          alt="back"
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};
export default Card;
