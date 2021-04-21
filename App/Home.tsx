import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import HomeDetail from '../App/components/HomeDetail';
import axios from 'axios';

export const Home = ({navigation}) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetailsFromAPI();
  }, []);

  function getDetailsFromAPI() {
    axios
      .get('https://api.github.com/users')
      .then(async function (response) {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!details) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={details}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return <HomeDetail item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default Home;
