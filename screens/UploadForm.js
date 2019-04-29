import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Form from '../components/Form';

export default class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Form />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#48D1CC',
  },
});
