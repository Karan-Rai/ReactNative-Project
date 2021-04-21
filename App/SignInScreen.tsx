import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from './context';
//import AsyncStorage from '@react-native-async-storage/async-storage';
const SignInScreen = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const loginHandle = (username, password) => {
    signIn(username, password);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('/Users/karry/ReacNativeApp/App/image/react.png')}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Email/ userName"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.action}>
          <Feather name="lock" size={20} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.label}>Keep me signed in</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              loginHandle(username, password);
            }}>
            <Text style={{fontSize: 20, color: '#17202A'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  imageContainer: {
    marginTop: 70,
    alignSelf: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  body: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'column',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  checkbox: {},
  label: {
    margin: 8,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    marginTop: -12,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#3498DB',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default SignInScreen;
