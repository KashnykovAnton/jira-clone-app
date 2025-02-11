import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import CardsListItem from "../CardsListItem/CardsListItem";
import styles from "./CardsList.module.css";

const CardsList = ({ cards, status }) => {
  const filteredCards = cards.filter((card) => card.status === status);

  return (
    <ul className={styles.list}>
      {filteredCards.map((card, index) => (
        <Draggable key={card.id} draggableId={card.id} index={index}>
          {(provided) => (
            <li
              className={styles.item}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <CardsListItem key={card.id} card={card} />
            </li>
          )}
        </Draggable>
      ))}
    </ul>
  );
};

export default CardsList;
