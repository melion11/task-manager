import { DragEvent, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import s from "./DragnDropPage.module.scss";

type CardType = {
  id: number;
  order: number;
  text: string;
};

export const DragnDropPage = () => {
  const [cardList, setCardList] = useState<CardType[]>([
    { id: 1, order: 3, text: "Карточка 3" },
    { id: 2, order: 1, text: "Карточка 1" },
    { id: 3, order: 2, text: "Карточка 2" },
    { id: 4, order: 4, text: "Карточка 4" },
  ]);

  const [currentCard, setCurrentCard] = useState<CardType | null>(null);

  const dragStartHandler = (card: CardType) => {
    setCurrentCard(card);
  };
  // const dragEndHandler = (e: DragEvent<HTMLDivElement>) => {
  //   const target = e.target as HTMLDivElement;
  //
  //   target.style.backgroundColor = "#000";
  // };
  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;

    target.style.backgroundColor = "#808080";
  };
  const dropHandler = (e: DragEvent<HTMLDivElement>, card: CardType) => {
    e.preventDefault();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id && currentCard) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard?.id) {
          return { ...c, order: card.order };
        }

        return c;
      }),
    );
    const target = e.target as HTMLDivElement;

    target.style.backgroundColor = "#000";
  };

  const sortCards = (a: CardType, b: CardType) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <AnimatePresence>
      <section className={s.TodosPage}>
        <div className={"container"}>
          <div className={s.cardsWrap}>
            {cardList.sort(sortCards).map((card) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                  key={card.id}
                  className={s.cardList}
                  draggable
                  onDragStart={() => dragStartHandler(card)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => dropHandler(e, card)}
                >
                  {card.text}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};
