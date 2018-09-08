import React from 'react';
import { StyleSheet, View,StatusBar} from 'react-native';
import Signup from './src/pages/Signup';
import Login from './src/pages/Login';
import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <StatusBar
            backgroundColor="#2f96ab"
            barStyle="light-content"
       />

       <Routes/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
