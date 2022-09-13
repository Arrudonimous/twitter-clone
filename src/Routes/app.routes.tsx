import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens/Home";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Image } from "react-native";
import HomeIcon from "../Assets/HomeIconOutline.svg";

const Tab: any = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          width: 100,
          height: 50,
          borderTopWidth: 0,
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
                <Image
                  source={require("../Assets/homeIcon.png")}
                  style={{ width: 30, height: 30 }}
                />
                {/* <HomeIcon /> */}
              </>
            ) : (
              <>
                <Image source={require("../Assets/HomeIconOutline.png")} />
              </>
            ),
        }}
      />
    </Tab.Navigator>
  );
};
