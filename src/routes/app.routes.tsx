import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { Historic } from "@screens/Historic";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import HomeIcon from "../assets/home.svg";
import HistoricIcon from "../assets/history.svg";
import ProfileIcon from "../assets/profile.svg";
import { useTheme } from "native-base";
import { Platform } from "react-native";

type AppRoutes = {
  home: undefined;
  historic: undefined;
  profile: undefined;
  exercise: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
  const theme = useTheme();
  const iconSize = theme.sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.green[500],
        tabBarInactiveTintColor: theme.colors.gray[200],
        tabBarStyle: {
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: theme.sizes[8],
          paddingTop: theme.sizes[8],
          borderTopWidth: 0,
          backgroundColor: theme.colors.gray[600],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="historic"
        component={Historic}
        options={{
          tabBarIcon: ({ color }) => (
            <HistoricIcon fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileIcon fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
