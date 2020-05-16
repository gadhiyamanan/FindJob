import React from "react";
import { StyleSheet, Text, View } from "react-native";
import JobsNavigater from "./Navigation/JobsNavigator";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import AuthReducers from "./reducers/authReducer";
import jobReducers from "./reducers/jobReducer";
const rootreducers = combineReducers({ auth: AuthReducers, job: jobReducers });
const store = createStore(rootreducers, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <JobsNavigater></JobsNavigater>
    </Provider>
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
