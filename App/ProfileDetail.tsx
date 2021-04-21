import React from 'react';
import {View, Text, StyleSheet, Button, CheckBox} from 'react-native';
import {AuthContext} from './context';

export const ProfileDetail = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Profile Detail Screen</Text>

      <Button title="Sign Out" onPress={() => signOut()} />
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

export default ProfileDetail;
