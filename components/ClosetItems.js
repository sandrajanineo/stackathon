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

export default class ClosetItems extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigate('Tops')}
            style={styles.imageDiv}
          >
            <Image
              source={{
                uri:
                  'https://images.express.com/is/image/expressfashion/0097_08634710_0046_f033?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
              }}
              style={styles.image}
            />
            <Text>{'\n'}</Text>
            <Text style={styles.title}>Tops</Text>
            <Text>{'\n'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigate('Bottoms')}
            style={styles.imageDiv}
          >
            <Image
              source={{
                uri:
                  'https://images.express.com/is/image/expressfashion/0085_07167984_0025_f001?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
              }}
              style={styles.image}
            />
            <Text>{'\n'}</Text>
            <Text style={styles.title}>Bottoms</Text>
            <Text>{'\n'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigate('FullBody')}
            style={styles.imageDiv}
          >
            <Image
              source={{
                uri:
                  'https://images.express.com/is/image/expressfashion/0094_07822564_1412_f029?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
              }}
              style={styles.image}
            />
            <Text>{'\n'}</Text>
            <Text style={styles.title}>Full Body</Text>
            <Text>{'\n'}</Text>
          </TouchableOpacity>
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
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
    borderRadius: 100,
  },
  imageDiv: {
    marginTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
    lineHeight: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
