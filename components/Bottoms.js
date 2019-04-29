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

export default class Bottoms extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('bottoms');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      bottoms: [],
    };
    this.getBottoms = this.getBottoms.bind(this);
  }

  getBottoms(querySnapShot) {
    let bottoms = [];
    querySnapShot.forEach(doc => {
      bottoms.push(doc.data());
    });
    this.setState({
      isLoading: false,
      bottoms,
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.getBottoms);
    this.unsubscribe = null;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.bottoms.map((bottom, i) => {
            return (
              <View style={styles.imageContainer} key={i}>
                <Image source={{ uri: bottom.image }} style={styles.image} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48D1CC',
    paddingTop: 15,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'blue',
  },
});
