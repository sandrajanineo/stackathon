import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  Picker,
} from 'react-native';
import { withOrientation } from 'react-navigation';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      occassion: '',
      color: '',
      season: '',
      category: '',
    };
  }
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <Text style={styles.formText}>Select the type of occassion:</Text>
          <Picker
            selectedValue={this.state.occassion}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ occassion: itemValue });
            }}
          >
            <Picker.Item label="Formal" value="formal" />
            <Picker.Item label="Casual" value="casual" />
            <Picker.Item label="Sporty" value="sporty" />
            <Picker.Item label="Business" value="business" />
            <Picker.Item label="Night Out" value="nightOut" />
          </Picker>
          <Text style={styles.formText}>Select the color:</Text>
          <Picker
            selectedValue={this.state.color}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ color: itemValue });
            }}
          >
            <Picker.Item label="Red" value="red" />
            <Picker.Item label="Blue" value="Blue" />
            <Picker.Item label="Yellow" value="yellow" />
            <Picker.Item label="White" value="White" />
            <Picker.Item label="Violet" value="violet" />
            <Picker.Item label="Pink" value="orange" />
            <Picker.Item label="Orange" value="orange" />
            <Picker.Item label="Black" value="black" />
            <Picker.Item label="Green" value="Green" />
          </Picker>
          <Text style={styles.formText}>Select the appropriate season:</Text>
          <Picker
            selectedValue={this.state.season}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ season: itemValue });
            }}
          >
            <Picker.Item label="Fall" value="fall" />
            <Picker.Item label="Winter" value="winter" />
            <Picker.Item label="Spring" value="spring" />
            <Picker.Item label="Summer" value="summer" />
          </Picker>

          <Text style={styles.formText}>Select the item type:</Text>
          <Picker
            selectedValue={this.state.category}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ category: itemValue });
            }}
          >
            <Picker.Item label="Top" value="top" />
            <Picker.Item label="Bottom" value="bottom" />
            <Picker.Item label="Full Body" value="fullBody" />
          </Picker>
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
    paddingBottom: 30,
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
  formText: {
    fontSize: 15,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
    paddingBottom: 10,
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
  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  formOptions: {
    height: 150,
    width: 100,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingTop: 30,
    paddingBottom: 30,
    alignSelf: 'center',
  },
});
