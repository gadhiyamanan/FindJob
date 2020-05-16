import React, { Component, useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomHeaderButton from "../../UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as jobActions from "../../actions/jobActions";
import OwnJobItem from "../../UI/OwnJobItem";
const UserJobScreen = (props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const dispatch = useDispatch();
  const userOwnJobs = useSelector((state) => state.job.userOwnJobs);

  const loadOwnJobs = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(jobActions.fetchAllJobs());
    } catch (err) {}
    setIsRefreshing(false);
  }, [dispatch, userOwnJobs]);

  const deleteJob = (jobId) => {
    Alert.alert("Are you sure", "Do you want to delete?", [
      {
        text: "No",
        style: "default",
      },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(jobActions.deleteJob(jobId));
        },
      },
    ]);
  };

  const editJob = (id) => {
    props.navigation.navigate("EditMode", { id: id });
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={userOwnJobs}
        onRefresh={loadOwnJobs}
        refreshing={isRefreshing}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <OwnJobItem
            description={itemData.item.description}
            // bgColor={itemData.item.bgColor}
            deleteJob={() => deleteJob(itemData.item.id)}
            editJob={() => editJob(itemData.item.id)}
          />
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

UserJobScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Jobs you have posted",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="md-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default UserJobScreen;
