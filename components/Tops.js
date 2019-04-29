import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Tops extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('tops');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      tops: [],
    };
    this.getTops = this.getTops.bind(this);
  }

  getTops(querySnapShot) {
    let tops = [];
    querySnapShot.forEach(doc => {
      tops.push(doc.data());
    });
    this.setState({
      isLoading: false,
      tops,
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.getTops);
    this.unsubscribe = null;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.tops.map((top, i) => {
            return (
              <View style={styles.imageContainer} key={i}>
                <Image source={{ uri: top.image }} style={styles.image} />
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
