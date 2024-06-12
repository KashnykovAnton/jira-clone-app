import CardsListItem from "../CardsListItem/CardsListItem";
import s from "./CardsList.module.css";

const CardsList = ({ cards, status }) => {
  const filteredCards = cards.filter((card) => card.status === status);
  return (
    <ul className={s.list}>
      {filteredCards.map((card) => {
        return <CardsListItem key={card.id} card={card} />;
      })}
    </ul>
  );
};

export default CardsList;
