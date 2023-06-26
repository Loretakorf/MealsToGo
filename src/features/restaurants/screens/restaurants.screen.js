import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListcontainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListcontainer>
      <RestaurantInfoCard />
    </RestaurantListcontainer>
  </SafeArea>
);
