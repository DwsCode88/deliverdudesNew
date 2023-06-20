import { View, Text } from "react-native";
import React from "react";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },

  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://www.recetasdesbieta.com/wp-content/uploads/2019/12/chilaquiles-rojos.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "One can never go wrong with a chicken caesar salad.",
    price: "$21.50",
    image:
      "https://www.cobornsinc.com/wp-content/uploads/2019/12/Chicken-Caesar-Salad-3.jpg",
  },
];

export default function MenuItem() {
  return (
    <View>
      <Text>MenuItem</Text>
    </View>
  );
}
