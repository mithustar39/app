import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are you coming as?</Text>
      <Button
        title="User"
        onPress={() => navigation.navigate('UserStack')}
        color="#4CAF50"
      />
      <Button
        title="Business"
        onPress={() => navigation.navigate('BusinessStack')}
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
});

export default HomeScreen;
