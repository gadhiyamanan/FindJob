import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ShadowPropTypesIOS,
} from "react-native";
import * as firebase from "firebase";
import { useDispatch } from "react-redux";
import * as authAction from "../../actions/authActions";
var firebaseConfig = {
  apiKey: "AIzaSyBWEBpkmb2uMZPvxQuC_zRsnQSAnprbHxc",
  authDomain: "findjob-f245c.firebaseapp.com",
  databaseURL: "https://findjob-f245c.firebaseio.com",
  projectId: "findjob-f245c",
  storageBucket: "findjob-f245c.appspot.com",
  messagingSenderId: "917575374292",
  appId: "1:917575374292:web:0ae898b6b8cb5b1dedf241",
  measurementId: "G-0QP4XVMNBY",
};

firebase.initializeApp(firebaseConfig);

const StarupScreen = (props) => {
  const dispatch = useDispatch();

  const tryLogin = async () => {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
          // dispatch(authActions.loggedIn(user.uid, user.getIdToken, user.displayName, user.photoURL ))
          console.log("use info------------", user);
          dispatch(
            authAction.loggedIn(
              user.uid,
              user.getIdToken,
              user.displayName,
              user.photoURL
            )
          );
          props.navigation.navigate("Jobs");
        } else {
          props.navigation.navigate("Auth");
        }
      });
    } catch {
      console.log("errrors");
    }
  };

  useEffect(() => {
    tryLogin();
  }, []);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

//make this component available to the app
export default StarupScreen;
