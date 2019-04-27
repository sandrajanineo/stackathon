import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import closetReducer from './store/closetReducer';

const store = createStore(closetReducer);

export default class App extends React.Component {
  // state = {
  //   isLoadingComplete: false,
  // };

  // componentWillMount() {
  //   const config = {
  //     apiKey: 'AIzaSyBWraWn6i8CN1iCybjo4RWa-kcReB_YEaA',
  //     authDomain: 'personallyme-926de.firebaseapp.com',
  //     databaseURL: 'https://personallyme-926de.firebaseio.com',
  //     projectId: 'personallyme-926de',
  //     storageBucket: 'personallyme-926de.appspot.com',
  //     messagingSenderId: '620806870',
  //   };
  //   firebase.initializeApp(config);

  //   firebase
  //     .database()
  //     .ref('users/001')
  //     .set({
  //       name: 'Sandra',
  //       age: 29,
  //     })
  //     .then(() => {
  //       console.log('successful!');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
    // return (
    //   <View style={styles.container}>
    //     {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
    //     <Provider store={store}>
    //       <AppNavigator />
    //     </Provider>
    //   </View>
    // );
  }
}

// _loadResourcesAsync = async () => {
//   return Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     Font.loadAsync({
//       // This is the font that we are using for our tab bar
//       ...Icon.Ionicons.font,
//       // We include SpaceMono because we use it in HomeScreen.js. Feel free
//       // to remove this if you are not using it in your app
//       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//     }),
//   ]);
// };

// _handleLoadingError = error => {
//   // In this case, you might want to report the error to your error
//   // reporting service, for example Sentry
//   console.warn(error);
// };

// _handleFinishLoading = () => {
//   this.setState({ isLoadingComplete: true });
// };
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
