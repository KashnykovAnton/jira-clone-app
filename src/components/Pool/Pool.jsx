import { Droppable } from "@hello-pangea/dnd";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CardsList from "../CardsList/CardsList";
import styles from "./Pool.module.css";

const Pool = ({ provided, snapshot, pool, cards }) => (
  <>
    <Box
      className={`${styles.swimmingPool} ${snapshot.isDragging ? styles.poolDragging : ""}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
    >
      <Typography variant="h6" className={styles.swimmingPoolTitle} {...provided.dragHandleProps}>
        {pool.label}
      </Typography>
      <Droppable droppableId={pool.value} type="card">
        {(provided, snapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${styles.cardsContainer} ${snapshot.isDraggingOver ? styles.poolDraggingOver : ""}`}
          >
            <CardsList cards={cards} status={pool.value} />
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
    <Divider
      orientation="vertical"
      variant="middle"
      flexItem
      className={styles.divider}
    />
  </>
);

export default Pool;
