import React, { useContext, useState } from "react";
import { SearchBar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../servises/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <SearchBar
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
