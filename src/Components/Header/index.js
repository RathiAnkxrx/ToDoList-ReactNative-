import {
  AddItemContainer,
  HeaderWrapper,
  SearchContainer,
  SearchIcon,
  SearchItem,
} from "./HeaderElement";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/addItem";
import { searchItem } from "../../store/searchItem";
import { TextInput } from "react-native";

const Header = () => {
  const dispatch = useDispatch();
  const randomWords = require("random-words");
  return (
    <HeaderWrapper>
      <SearchContainer>
        <SearchItem
          placeholder="search"
          onChangeText={(text) => dispatch(searchItem(text))}
        />
        <SearchIcon>
          <Icon name="md-search" type="ionicon" color="#ff5a5f" />
        </SearchIcon>
      </SearchContainer>
      <AddItemContainer onPress={() => dispatch(addItem(randomWords()))}>
        <Icon name="add" type="ionicon" color="#ff5a5f" size={54} />
      </AddItemContainer>
    </HeaderWrapper>
  );
};

export default Header;
