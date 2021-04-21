import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <Image
        style={styles.imageContainer}
        source={require('/Users/karry/ReacNativeApp/App/image/react.png')}
      />
      <Text style={styles.text}>Mini Project on React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f6d7a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 20,
    color: '#ECF0F1',
    margin: 30,
  },
});

export default Splash;
