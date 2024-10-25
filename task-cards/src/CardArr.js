import React from "react";
import { Card } from "./Card";

function CardArr() {
  const cardsObj = [
    {
      imgurl: "./7gul-161561_19c5.jpeg",
      title: "buket 01",
      price: 140,
    },
    {
      imgurl: "./7gul-339511_8905.jpeg",
      title: "buket 02",
      price: 100,
    },
    {
      imgurl: "./7gul-393474_3be3.jpeg",
      title: "buket 03",
      price: 110,
    },
    {
      imgurl: "./7gul-485745_80ac.jpeg",
      title: "buket 04",
      price: 90,
    },
    {
      imgurl: "./7gul-900774_2118.jpeg",
      title: "buket 05",
      price: 70,
    },
    {
        imgurl: "./7gul-393474_3be3.jpeg",
        title: "buket 03",
        price: 110,
      },
      {
        imgurl: "./7gul-485745_80ac.jpeg",
        title: "buket 04",
        price: 90,
      },
      {
        imgurl: "./7gul-900774_2118.jpeg",
        title: "buket 05",
        price: 90,
      }
  ];
  return (
    <div className="CardContainer">
      {cardsObj.map((card, index) => (
        <Card
          key={index}
          img={card.imgurl}
          title={card.title}
          price={card.price}
        />
      ))}
    </div>
  );
}

export default CardArr;
