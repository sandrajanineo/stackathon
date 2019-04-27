import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    tops: [],
  };

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDkjVhWU4aDvBdGmjsZE9MYalrozFGUvTQ',
      authDomain: 'personallyme2-a0c84.firebaseapp.com',
      databaseURL: 'https://personallyme2-a0c84.firebaseio.com',
      projectId: 'personallyme2-a0c84',
      storageBucket: 'personallyme2-a0c84.appspot.com',
      messagingSenderId: '172818178714',
    };
    firebase.initializeApp(config);

    const db = firebase.firestore();

    // firebase
    //   .database()
    //   .ref('users/001')
    //   .set({
    //     name: 'Sandra',
    //     age: 29,
    //   })
    //   .then(() => {
    //     console.log('successful!');
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
