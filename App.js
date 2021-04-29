/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#C24D34',
      padding: 15,
    },
  });


const App = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
    </View>
  </SafeAreaView>
)



export default App;
