import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens/Home";
// import { View, Image } from "react-native";
import { Search } from "../Screens/Search";
import { FloatButton } from "../Components/FloatButton";
import { StyleSheet } from "react-native";
const color = "#1e1e1e";

const Tab: any = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            width: "100%",
            height: 55,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: "#232628",
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarIcon: ({ focused }: { focused: Boolean }) =>
              focused ? (
                <>
                  <Icon color="white" size={24} name="home-sharp" />
                </>
              ) : (
                <>
                  <Icon color="white" size={24} name="home-outline" />
                </>
              ),
          }}
        />
        {/* <Tab.Screen */}
        {/* component={Search} */}
        {/* name="Search" */}
        {/* options={{ */}
        {/* tabBarIcon: ({ focused }: { focused: Boolean }) => */}
        {/* focused ? ( */}
        {/* <> */}
        {/* <Icon color="white" size={24} name="search-sharp" /> */}
        {/* </> */}
        {/* ) : ( */}
        {/* <> */}
        {/* <Icon color="white" size={24} name="search-outline" /> */}
        {/* </> */}
        {/* ), */}
        {/* }} */}
        {/* /> */}
        {/* <Tab.Screen */}
        {/* component={Home} */}
        {/* name="Notifications" */}
        {/* options={{ */}
        {/* tabBarIcon: ({ focused }: { focused: Boolean }) => */}
        {/* focused ? ( */}
        {/* <> */}
        {/* <Icon color="white" size={24} name="notifications-sharp" /> */}
        {/* </> */}
        {/* ) : ( */}
        {/* <> */}
        {/* <Icon color="white" size={24} name="notifications-outline" /> */}
        {/* </> */}
        {/* ), */}
        {/* }} */}
        {/* /> */}
        {/* <Tab.Screen */}
        {/* component={Home} */}
        {/* name="Direct" */}
        {/* options={{ */}
        {/* tabBarIcon: ({ focused }: { focused: Boolean }) => */}
        {/* focused ? ( */}
        {/* <> */}
        {/* <Icon color="white" size={24} name="md-mail-open" /> */}
        {/* </> */}
        {/* ) : ( */}
        {/* <> */}
        {/* <Icon color="white" size={24} name="ios-mail-outline" /> */}
        {/* <HomeIcon width="10px" height="10px" /> */}
        {/* </> */}
        {/* ), */}
        {/* }} */}
        {/* /> */}
      </Tab.Navigator>
      {/* <FloatButton /> */}
    </>
  );
};
