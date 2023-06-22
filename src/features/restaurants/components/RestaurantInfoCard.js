import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { styled } from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;
const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://cdn.vox-cdn.com/thumbor/yI-2e7KItOv2q_gZxtdbegQz-TY=/0x0:6000x4000/920x690/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60318957/2023.01.15.Menu.167.Raw.CML.0354.83.jpg",
    ],

    address = "80 random street",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
