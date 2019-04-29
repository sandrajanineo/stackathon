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
import { MonoText } from '../components/StyledText';
import ClosetItems from '../components/ClosetItems';
import firebase from 'firebase';

export default class AllProducts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <ClosetItems navigate={this.props.navigation.navigate} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48D1CC',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
