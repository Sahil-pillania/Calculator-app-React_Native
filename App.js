// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, StatusBar, Text, View } from "react-native";
import IntorScreen from "./views/IntorScreen";
import MainScreen from "./views/MainScreen";

export default function App() {
  const [isloaded, setIsloaded] = useState(false);

  setTimeout(() => {
    setIsloaded(true);
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isloaded ? <MainScreen /> : <IntorScreen />}
      {/* <IntorScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
