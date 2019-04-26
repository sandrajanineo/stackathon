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
  Button,
} from 'react-native';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
      occassion: '',
      color: '',
      season: '',
      category: '',
    };
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton() {
    console.log('state is now ', this.state);
    console.log('button clicked!');
    //do i add the item to the closet from here?
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <TextInput
            style={{
              height: 40,
              width: '70%',
              borderColor: 'white',
              borderWidth: 2,
              alignSelf: 'center',
            }}
            onChangeText={text => this.setState({ imageUrl: text })}
            value={this.state.imageUrl}
            placeholder={'Enter image URL:'}
          />

          <Picker
            selectedValue={this.state.occassion}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ occassion: itemValue });
            }}
          >
            <Picker.Item label="Select the type of occassion:" value="" />
            <Picker.Item label="Formal" value="formal" />
            <Picker.Item label="Casual" value="casual" />
            <Picker.Item label="Sporty" value="sporty" />
            <Picker.Item label="Business" value="business" />
            <Picker.Item label="Night Out" value="nightOut" />
          </Picker>

          <Picker
            selectedValue={this.state.color}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ color: itemValue });
            }}
          >
            <Picker.Item label="Select the color:" value="" />
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

          <Picker
            selectedValue={this.state.season}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ season: itemValue });
            }}
          >
            <Picker.Item label="Select the season:" value="" />
            <Picker.Item label="Fall" value="fall" />
            <Picker.Item label="Winter" value="winter" />
            <Picker.Item label="Spring" value="spring" />
            <Picker.Item label="Summer" value="summer" />
          </Picker>

          <Picker
            selectedValue={this.state.category}
            style={styles.formOptions}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ category: itemValue });
            }}
          >
            <Picker.Item label="Select the item type:" value="" />
            <Picker.Item label="Top" value="top" />
            <Picker.Item label="Bottom" value="bottom" />
            <Picker.Item label="Full Body" value="fullBody" />
          </Picker>

          <Button
            style={styles.button}
            title="Add to Closet"
            onPress={this.clickButton}
          />
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
    borderColor: 'white',
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
    color: '#00ffff',
  },
});
