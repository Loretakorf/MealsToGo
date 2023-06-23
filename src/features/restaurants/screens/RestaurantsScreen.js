import { Searchbar } from "react-native-paper";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListcontainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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
