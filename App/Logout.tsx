import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from './context';

export const Logout = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Logout Screen</Text>

      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);
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

export default Logout;
