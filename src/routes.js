import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScreen from "./pages/main";
import DetailsScreen from "./pages/details";

const AppNavigator = createStackNavigator(
  {
    Home: MainScreen,
    Details: DetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#DA552F"
      },
      headerTintColor: "#FFF"
    },
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
