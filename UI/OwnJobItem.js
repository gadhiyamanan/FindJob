import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

// create a component
const OwnJobItem = (props) => {
  const randomColors = [
    "#EFC978",
    "#E0BBE4",
    "#EBA8FF",
    "#E0BBE4",
    "#FEC8D8",
    "#FFDFD3",
    "#D0FA96",
    "#E6E7EB",
    "#75BB81",
    "#C3C4C9",
    "#F5DDEE",
    "#B5DBD8",
    "#F9C8D0",
    "#FBDAB2",
    "#FEFAE2",
    "#CECECE",
    "#EAE0C7",
    "#FF7A8B",
    "#33C972",
  ];

  const colorNumber = Math.floor(Math.random() * 18) + 1;
  const bgColor = randomColors[colorNumber];
  console.log(
    "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    props.description
  );
  return (
    <View style={styles.container}>
      <View style={{ ...styles.card, backgroundColor: bgColor }}>
        <Text style={{ fontSize: 19, lineHeight: 22 }}>
          {props.description}
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableNativeFeedback onPress={props.editJob}>
            <View
              style={{
                alignSelf: "center",
                width: "30%",
                padding: 6,
                backgroundColor: "#d63031",
                borderRadius: 4,
                marginTop: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="edit"
                  size={23}
                  color="white"
                  style={{ paddingRight: 8 }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Edit
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={props.deleteJob}>
            <View
              style={{
                alignSelf: "center",
                width: "30%",
                padding: 6,
                backgroundColor: "#d63031",
                borderRadius: 4,
                marginTop: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="delete"
                  size={23}
                  color="white"
                  style={{ paddingRight: 8 }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Delete
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
  },
  card: {
    elevation: 5,
    borderRadius: 10,
    padding: 8,
  },
});

//make this component available to the app
export default OwnJobItem;
