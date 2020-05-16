/*import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ShadowPropTypesIOS,
} from "react-native";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
Facebook.initializeAsync("2572734649642331");
export default function App(props) {
  async function facebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "2572734649642331",
      {
        permissions: "public_profile",
      }
    );
    if ((type = "success")) {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      //  console.log(credential);
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          console.log("credential error");
        });
    }
    props.navigation.navigate("Job");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: "center", paddingBottom: 8 }}>
        Find Job or
      </Text>
      <Text style={{ fontSize: 30, textAlign: "center", paddingBottom: 8 }}>
        Submit job
      </Text>
      <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
        <TouchableOpacity onPress={facebook}>
          <Image
            source={require("../../assets/facebook.png")}
            //style={styles.ImageClass}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
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

*/
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";

// create a component
Facebook.initializeAsync("2572734649642331");
const Authscreen = (props) => {
  async function facebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "2572734649642331",
      {
        permission: "public_profile",
      }
    );

    if (type == "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          console.log(error);
        });
    }

    props.navigation.navigate("Jobs");
  }

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 35, textAlign: "center", paddingBottom: 8 }}
      >{`Find Jobs or \nSubmit Jobs`}</Text>
      <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => {
            facebook();
          }}
        >
          <Image
            source={require("../../assets/facebook.png")}
            //style={styles.ImageClass}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
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
  },
});

//make this component available to the app
export default Authscreen;
