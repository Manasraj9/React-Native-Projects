import {useState} from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff')
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color)
  }

  return (
    <>
      <Text>Test App</Text>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container,{backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={(generateColor)}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtntxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor: '#61b480',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtntxt:{
    fontSize:24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  }
});

export default App;
