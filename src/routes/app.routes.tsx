import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { Historic } from "@screens/Historic";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

type AppRoutes = {
  home: undefined;
  historic: undefined;
  profile: undefined;
  exercise: undefined;
};

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="historic" component={Historic} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
