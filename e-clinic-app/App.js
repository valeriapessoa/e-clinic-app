import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import TabNavigator from "./src/navigation/TabNavigation";

import { theme } from "./src/core/theme";

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
