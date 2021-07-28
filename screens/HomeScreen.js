import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello USER</Text>
      <Button title="Go To CharcterList Screen" onPress={() => navigation.navigate("CharList")}
      ></Button>

      <Button title="Go To FavCharcterList Screen" onPress={() => navigation.navigate("FavList")}
      ></Button>
    </View>
  );
}
