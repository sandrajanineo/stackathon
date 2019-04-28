import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { WebBrowser } from 'expo';

export default class ClosetItems extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigate('Tops')}
            style={styles.helpContainer}
          >
            <Image
              source={{
                uri:
                  'https://images.express.com/is/image/expressfashion/0097_08634710_0046_f033?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
              }}
              style={styles.welcomeImage}
            />
            <Text>Tops</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigate('Bottoms')}
            style={styles.helpContainer}
          >
            <Image
              source={{
                uri:
                  'https://images.express.com/is/image/expressfashion/0085_07167984_0025_f001?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
              }}
              style={styles.welcomeImage}
            />
            <Text>Bottoms</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigate('FullBody')}
            style={styles.helpContainer}
          >
            <Image
              source={{
                uri:
                  'https://images.express.com/is/image/expressfashion/0094_07822564_1412_f029?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
              }}
              style={styles.welcomeImage}
            />
            <Text>Full Body</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
