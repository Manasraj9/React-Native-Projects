import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  return (
    <View >
      <StatusBar />
      <View> <Text>Music Player</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
