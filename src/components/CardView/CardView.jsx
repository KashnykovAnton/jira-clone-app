import React from "react";
import s from "./CardView.module.css";
import Button from "../Button/Button";

const CardView = ({ card, onDeleteClick, onEditClick }) => {
  return (
    <div className={s.cardContainer}>
      <h2 className={s.cardHeader}>Detailed card information</h2>
      {card && (
        <>
          <div className={s.cardDetails}>
            <h3 className={s.cardDetailTitle}>
              <span>Name:</span> {card.name}
            </h3>
            <p className={s.cardDetailItem}>
              <span>Description:</span> {card.description}
            </p>
            <p className={s.cardDetailItem}>
              <span>Application group:</span> {card.group}
            </p>
            <p className={s.cardDetailItem}>
              <span>Importance:</span> {card.importance}
            </p>
            <p className={s.cardDetailItem}>
              <span>Status:</span> {card.status}
            </p>
          </div>
          <div className={s.buttonContainer}>
            <Button onClick={onEditClick} styleButton={"blue"}>Edit</Button>
            <Button onClick={onDeleteClick} styleButton={"red"}>Delete</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardView;
