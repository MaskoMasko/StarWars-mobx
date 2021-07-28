import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { CharacterListScreen } from "./screens/CharacterListScreen";
import { FavCharacterListScreen } from "./screens/FavCharacterListScreen";
import { CharacterDetailScreen } from "./screens/CharacterDetailScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "Star Wars Character Collection",
            headerStyle: { backgroundColor: "black", height: 120 },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: "Character List",
            headerStyle: { backgroundColor: "black", height: 120 },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
          name="CharList"
          component={CharacterListScreen}
        />
        <Stack.Screen
          options={{ title: "Favorite Char List Screen" }}
          name="FavList"
          component={FavCharacterListScreen}
        />
        <Stack.Screen
          options={{
            title: "Character Details",
            headerStyle: { backgroundColor: "black", height: 120 },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
          name="CharDetail"
          component={CharacterDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
