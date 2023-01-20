import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import styles from "./mainStyles";

const MainScreen = () => {
  return (
    <View style={styles.main}>
      <StatusBar />
      <View style={styles.mainScreen}>
        <ScrollView style={styles.main_display}>
          <Text style={styles.main_displayText}>123</Text>
        </ScrollView>
        <View style={styles.mainScreen_keypad}>
          {/* row1  */}
          <View style={styles.mainScreen_keypadRow}>
            {/* buttons */}
            <Pressable>
              <View style={styles.btn1_outer}>
                <Text style={styles.bg1_button}>AC</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>( )</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>%</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>/</Text>
              </View>
            </Pressable>
          </View>
          {/* row2  */}
          <View style={styles.mainScreen_keypadRow}>
            {/* buttons */}
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>7</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>8</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>9</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>*</Text>
              </View>
            </Pressable>
          </View>
          {/* row3  */}
          <View style={styles.mainScreen_keypadRow}>
            {/* buttons */}
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>4</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>5</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>6</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>-</Text>
              </View>
            </Pressable>
          </View>
          {/* row4  */}
          <View style={styles.mainScreen_keypadRow}>
            {/* buttons */}
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>1</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>2</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>3</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>+</Text>
              </View>
            </Pressable>
          </View>
          {/* row5  */}
          <View style={styles.mainScreen_keypadRow}>
            {/* buttons */}
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>.</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn_outer}>
                <Text style={styles.bg_button}>0</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn1_outer}>
                <Text style={styles.bg1_button}>&lt;</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>=</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
