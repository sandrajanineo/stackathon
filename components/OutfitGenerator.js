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
import * as firebase from 'firebase';
import 'firebase/firestore';

let tops = [];

export default class OutfitGenerator extends React.Component {
  constructor() {
    super();
    this.refTops = firebase.firestore().collection('tops');
    this.refBottoms = firebase.firestore().collection('bottoms');
    this.refFullbody = firebase.firestore().collection('fullbody');
    this.unsubscribe = null;
    this.state = {
      tops: [],
      bottoms: [],
      fullbody: [],
    };
    this.getTops = this.getTops.bind(this);
    this.getBottoms = this.getBottoms.bind(this);
    this.getFullbody = this.getFullbody.bind(this);
  }

  getTops(querySnapShot) {
    let tops = [];
    querySnapShot.forEach(doc => {
      tops.push(doc.data());
    });
    this.setState({ tops });
  }

  getBottoms(querySnapShot) {
    let bottoms = [];
    querySnapShot.forEach(doc => {
      bottoms.push(doc.data());
    });
    this.setState({ bottoms });
  }

  getFullbody(querySnapShot) {
    let fullbody = [];
    querySnapShot.forEach(doc => {
      fullbody.push(doc.data());
    });
    this.setState({ fullbody });
  }

  componentDidMount() {
    this.refTops.onSnapshot(this.getTops);
    this.refBottoms.onSnapshot(this.getBottoms);
    this.refFullbody.onSnapshot(this.getFullbody);
  }

  render() {
    console.log('this.state!!!! ', this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.getStartedText}>
          You Reached the OutfitGenerator!
        </Text>
      </View>
    );
  }
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
