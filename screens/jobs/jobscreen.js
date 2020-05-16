import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import CustomHeaderButton from "../../UI/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import * as jobActions from "../../actions/jobActions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import JobItem from "../../UI/JobItem";
const JobsScreen = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const allJobs = useSelector((state) => state.job.availableJobs);
  const loadJobs = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(jobActions.fetchAllJobs());
    } catch (err) {}

    setIsRefreshing(false);
  }, [dispatch]);
  useEffect(() => {
    setIsLoading(true);
    loadJobs().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadJobs]);

  useEffect(() => {
    const willFocusSub = props.navigation.addListener("willFocus", loadJobs);

    return () => {
      willFocusSub.remove();
    };
  }, [dispatch, loadJobs]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="red" animating />
      </View>
    );
  }
  return (
    <FlatList
      data={allJobs}
      onRefresh={loadJobs}
      refreshing={isRefreshing}
      keyExtractor={(item) => item.id}
      style={{ flex: 1 }}
      renderItem={(itemData) => (
        <JobItem
          description={itemData.item.description}
          phone={itemData.item.phone.toString()}
          bgColor={itemData.item.bgColor}
        />
      )}
    />
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

JobsScreen.navigationOptions = (navData) => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerTitle: "Latest Available Jobs",
  };
};
export default JobsScreen;
