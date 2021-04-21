import React from 'react';

import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
interface HomeDetailprops {}
const {width, height} = Dimensions.get('window');
const HomeDetail: React.FC<HomeDetailprops> = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.id}>
        {item.id} {item.login}
      </Text>
      <Image style={styles.image} source={{uri: item.avatar_url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  id: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.02,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: 'gray',
    fontSize: 18,
  },
  image: {
    height: height / 4,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: 'gray',
  },
});

export default HomeDetail;
