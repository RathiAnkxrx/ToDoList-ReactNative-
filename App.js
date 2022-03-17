import List from "./src/Components/Main";
import Header from "./src/Components/Header";
import { Provider } from "react-redux";
import store from "./src/store/index";
import { Font } from "expo";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <List />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Manrope",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
  },
});
