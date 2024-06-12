import { Link } from "react-router-dom";
import s from "./CardsListItem.module.css";

const CardsListItem = ({card}) => {
  return (
    <li className={s.item}>
      <Link to={`/edit/${card.id}`}>
        <div className={s.itemDiv}>
          <p className={s.cardName}>{card.name}</p>
          <p className={s.cardGroup}>{card.group}</p>
          <p className={s.cardImportance}>{card.importance}</p>
        </div>
      </Link>
    </li>
  );
};

export default CardsListItem;
