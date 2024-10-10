import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ViewStatsScreen = ({ navigation }) => {

  const handleSave = () => {
    // Implement save logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Stats</Text>
      <Button
        title="Popular Products"
        onPress={() => navigation.navigate('PopularProducts')}
        color="#4CAF50"
      />
      <Text style={styles.placeholder}> </Text>
      <Button
        title="Customer insights"
        onPress={() => navigation.navigate('CustomerInsights')}
        color="#4CAF50"
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
  placeholder: {
    fontSize: 10,
  }
});

export default ViewStatsScreen;