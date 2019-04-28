import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  Button,
  View,
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Outfit from './Outfit';

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
      type: '',
      occasion: '',
      season: '',
      selected: [],
      showImage: false,
    };
    this.getTops = this.getTops.bind(this);
    this.getBottoms = this.getBottoms.bind(this);
    this.getFullbody = this.getFullbody.bind(this);
    this.generateOutfit = this.generateOutfit.bind(this);
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

  generateOutfit() {
    // let tops = this.state.tops;
    // let bottoms = this.state.bottoms;

    if (this.state.type === 'fullbody') {
      let fullbody = this.state.fullbody;
      console.log('full body is ', fullbody);
      console.log('this.state.season is ', this.state.season);
      console.log('this.state.occassion is ', this.state.occasion);
      let selected = fullbody.filter(item => {
        if (
          item.season === this.state.season &&
          item.occassion === this.state.occasion
        ) {
          return item;
        }
      });
      console.log('selected item is!! ', selected);
      this.setState({ selected: selected, showImage: true });
    }
  }

  render() {
    console.log('this.state is!! ', this.state);
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.getStartedText}>
            You Reached the OutfitGenerator!
          </Text>

          <Picker
            selectedValue={this.state.type}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ type: itemValue });
            }}
          >
            <Picker.Item label="Select the type of outfit:" value="" />
            <Picker.Item label="One Piece" value="fullbody" />
            <Picker.Item label="Two Piece" value="topNbottom" />
          </Picker>

          <Picker
            selectedValue={this.state.occasion}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ occasion: itemValue });
            }}
          >
            <Picker.Item label="Select the type of occasion:" value="" />

            <Picker.Item label="Business" value="business" />
            <Picker.Item label="Casual" value="casual" />
            <Picker.Item label="Formal" value="formal" />
            <Picker.Item label="Night Out" value="nightOut" />
            <Picker.Item label="Sporty" value="sporty" />
          </Picker>

          <Picker
            selectedValue={this.state.season}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ season: itemValue });
            }}
          >
            <Picker.Item label="Select the season:" value="" />
            <Picker.Item label="Winter" value="winter" />
            <Picker.Item label="Spring" value="spring" />
            <Picker.Item label="Summer" value="summer" />
            <Picker.Item label="Fall" value="fall" />
          </Picker>

          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>

          <Button
            style={styles.button}
            title="Dress Me!"
            onPress={this.generateOutfit}
          />

          {this.state.showImage ? (
            <Outfit outfit={this.state.selected} />
          ) : (
            <Text>Nothing Yet...</Text>
          )}
        </View>
      </ScrollView>
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
    marginTop: 25,
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
  formOptions: {
    height: 200,
    width: '70%',
    paddingTop: 60,
    paddingBottom: 60,
    alignSelf: 'center',
  },
  form: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  button: {
    paddingTop: 60,
    paddingBottom: 60,
    color: 'white',
  },
});
