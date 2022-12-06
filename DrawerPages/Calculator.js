import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Calculator = () => {
  return (
    <View>
      <View style={styles.card}>
        <Text>0</Text>
        <View styles={styles.btncolumn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: "grey",
  },
  btntext: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    alignSelf: "center",
    paddingTop: 20,
  },
  btncolumn: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Calculator;
