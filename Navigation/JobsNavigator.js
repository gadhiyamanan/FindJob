import "react-native-gesture-handler";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Welcomescreencreen from "../screens/users/welcomescreen";
import startupScreen from "../screens/users/startupscreen";
import Authscreen from "../screens/users/Authscreen";
import JobScreen from "../screens/jobs/jobscreen";
import PostJobsJobscreen from "../screens/users/postjobsscreen";
import UserJobscreen from "../screens/users/userjobscreen";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import EditModeScren from "../screens/users/Editmodescreen";
import logout from "../screens/users/Logout";
import { useSelector } from "react-redux";
const JobNavigator = createStackNavigator(
  {
    Jobs: { screen: JobScreen },
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-business" size={23} color="#a29bfe" />
      ),
    },

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "white",
    },
  }
);

const PostJobsJobNavigator = createStackNavigator(
  {
    Jobs: { screen: PostJobsJobscreen },
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-paper" size={23} color="#a29bfe" />
      ),
    },

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "white",
    },
  }
);

const UserJobsNavigator = createStackNavigator(
  {
    Jobs: { screen: UserJobscreen },
    EditMode: {
      screen: EditModeScren,
    },
  },

  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="ios-square" size={23} color="#a29bfe" />
      ),
    },

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "white",
    },
  }
);

const LogoutNavigator = createStackNavigator(
  {
    Logout: { screen: logout },
  },

  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-log-out" size={23} color="#a29bfe" />
      ),
    },

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "white",
    },
  }
);
const DrawerNavigator = createDrawerNavigator(
  {
    LatestJobs: {
      screen: JobNavigator,
      navigationOptions: { drawerLabel: "Letest Jobs" },
    },
    PostNewJobs: {
      screen: PostJobsJobNavigator,
      navigationOptions: { drawerLabel: "Post New Jobs" },
    },
    UserOwnJobs: {
      screen: UserJobsNavigator,
      navigationOptions: { drawerLabel: "User Own Jobs" },
    },
    Logout: {
      screen: LogoutNavigator,
      navigationOptions: { drawerLabel: "Logout" },
    },
  },
  {
    headerMode: "none",
    contentComponent: (props) => {
      const authUser = useSelector((state) => state.auth.name);
      const image = useSelector((state) => state.auth.image);
      return (
        <View style={{ marginTop: 20 }}>
          <SafeAreaView forceInset={{ top: "Always", horizontal: "never" }}>
            <DrawerItems {...props} />
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Image
                source={{ uri: image }}
                style={{ height: 60, width: 60, borderRadius: 30 }}
              ></Image>
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                alignSelf: "center",
                fontWeight: "bold",
              }}
            >
              {authUser}
            </Text>
          </SafeAreaView>
        </View>
      );
    },
  },
  {
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#636e72",
      itemContainerStyle: {
        marginVertical: 45,
      },
    },
    drawerWidth: 150,
    // drawerPosition:"right",
    drawerType: "front",
  }
);
const MainNavigator = createSwitchNavigator({
  StartupScreen: startupScreen,
  Jobs: DrawerNavigator,
  Auth: Authscreen,
});
export default createAppContainer(MainNavigator);
