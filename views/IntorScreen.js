import React from "react";
import { StyleSheet, StatusBar, Text, View, Image } from "react-native";
import logo from "../assets/cal.png";

const IntorScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {/* <Text style={styles.text}>Calculator Pro</Text> */}
        <Image source={logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 50,
    // elevation: "top",
    // elevation: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  inner: {
    // width: 100,
    // height: 100,
    // justifyContent: "center",
  },
});

export default IntorScreen;
