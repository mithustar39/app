import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginUser = () => {
    // Implement login logic here
    navigation.navigate('User');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#AAAAAA"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#AAAAAA"
      />
      <Button title="Login" onPress={handleLoginUser} color="#4CAF50" />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('UserSignup')}
        color="#FF9800"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#AAAAAA',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    color: '#333333',
  },
});

export default UserLoginScreen;
