import React, { useContext, useState, useEffect } from "react";
import { SearchBar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../servises/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchBar
        icon={isFavouritesToggled ? "heart" : "heartout"}
        onIconPress={onFavouritesToggled}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditting={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
