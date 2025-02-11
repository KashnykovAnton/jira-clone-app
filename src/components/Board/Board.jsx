import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Pool from "../Pool/Pool";
import ActionButton from "../ActionButton/ActionButton";
import { updateCard } from "../../store/cards/cards-thunks";
import { selectFilteredAndSortedCards } from "../../store/cards/cards-selectors";
import { statusOptions } from "../../utils/options";
import styles from "./Board.module.css";

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredAndSortedCards = useSelector(selectFilteredAndSortedCards);
  const [swimmingPools, setSwimmingPools] = useState(statusOptions);
  const [localCards, setLocalCards] = useState(filteredAndSortedCards);

  useEffect(() => {
    setLocalCards(filteredAndSortedCards);
  }, [filteredAndSortedCards]);

  const onDragEnd = (result) => {
    const { source, destination, draggableId, type } = result;

    if (!destination) return;

    if (type === "swimmingPool") {
      if (destination.index === source.index) return;

      const reorderedPools = Array.from(swimmingPools);
      const [movedPool] = reorderedPools.splice(source.index, 1);
      reorderedPools.splice(destination.index, 0, movedPool);

      setSwimmingPools(reorderedPools);
    } else if (type === "card") {
      if (source.droppableId === destination.droppableId && source.index === destination.index) return;

      const destinationStatus = destination.droppableId;
      setLocalCards((prevCards) =>
        prevCards.map((card) => (card.id === draggableId ? { ...card, status: destinationStatus } : card))
      );

      const movedCard = localCards.find((card) => card.id === draggableId);
      setTimeout(() => {
        dispatch(
          updateCard({
            id: movedCard.id,
            item: {
              ...movedCard,
              status: destinationStatus,
            },
          })
        );
      }, 0);
    }
  };

  const handleAddClick = () => {
    navigate("/create");
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box className={styles.boardContainer}>
        <Droppable droppableId="pools" direction="horizontal" type="swimmingPool">
          {(provided) => (
            <Box className={styles.poolsContainer} {...provided.droppableProps} ref={provided.innerRef}>
              {swimmingPools.map((pool, index) => (
                <Draggable key={pool.value} draggableId={pool.value} index={index}>
                  {(provided, snapshot) => (
                    <Pool provided={provided} snapshot={snapshot} pool={pool} cards={localCards} key={pool.value} />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
        <ActionButton href={"/create"} icon={<AddIcon />} title={"Create New Sprint Item"} onClick={handleAddClick} />
      </Box>
    </DragDropContext>
  );
};

export default Board;
