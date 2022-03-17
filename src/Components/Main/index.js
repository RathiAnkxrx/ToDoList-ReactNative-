import {
  Items,
  MainContainer,
  MainWrapper,
  ListItems,
  ItemNumber,
  NotFound,
} from "./MainELement";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Text, View } from "react-native-elements";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";

const ItemList = () => {
  const { items } = useSelector((state) => state.addNewItem);
  const { inputItem } = useSelector((state) => state.inputSearch);
  let isFound = false;
  return (
    <MainWrapper style={{ flex: 1 }}>
      {!!inputItem && (
        <>
          {items.map((item, index) => {
            if (item.toLowerCase() === inputItem.toLowerCase()) {
              isFound = true;
              return (
                <Items key={index}>
                  <Text> {item} </Text>
                  <ItemNumber>
                    <Text> {index < 10 ? `0${index + 1}` : index + 1} </Text>
                  </ItemNumber>
                </Items>
              );
            }
          })}
          {!isFound && (
            <NotFound>
              <Text> No Items Found </Text>
            </NotFound>
          )}
        </>
      )}

      {!inputItem && (
        <FlatList
          data={items}
          renderItem={({ item, index }) => (
            <Items>
              <Text style={{ fontFamily: "Manrope-Bold", fontSize: 24 }}>
                {" "}
                {item}{" "}
              </Text>
              <ItemNumber>
                <Text>{index < 9 ? `0${index + 1}` : index + 1} </Text>
              </ItemNumber>
            </Items>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </MainWrapper>
  );
};

export default ItemList;
