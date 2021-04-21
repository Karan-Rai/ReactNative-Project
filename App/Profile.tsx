import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from './context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import {add} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

export const Profile = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');

  const phoneNumber = (value: string) =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
      ? 'Invalid phone number, must be 10 digits'
      : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 30, color: '#616A6B'}}>Fill Your Details</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.action}>
          <FontAwesome name="user" size={30} />
          <TextInput
            placeholder="Enter your name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" size={30} />
          <TextInput
            placeholder="Enter your mobile no."
            style={styles.input}
            keyboardType="number-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="address-book" size={30} />
          <TextInput
            placeholder="Enter your address"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="road" size={30} />
          <TextInput
            placeholder="Enter your locality"
            style={styles.input}
            value={locality}
            onChangeText={setLocality}
          />
        </View>
        <View style={styles.action}>
          <Icon name="location" size={30} />
          <TextInput
            placeholder="Enter your city"
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="location-arrow" size={30} />
          <TextInput
            placeholder="Enter your Pin Code"
            style={styles.input}
            keyboardType="number-pad"
            value={pin}
            onChangeText={setPin}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="bookmark" size={30} />
          <TextInput
            placeholder="Enter your Pin Code"
            style={styles.input}
            keyboardType="number-pad"
            value={pin}
            onChangeText={setPin}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={{fontSize: 20, color: '#17202A'}}>Submit</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
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
  dropdown: {
    marginHorizontal: 50,
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

export default Profile;
