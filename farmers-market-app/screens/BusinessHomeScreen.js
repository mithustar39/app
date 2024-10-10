import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BusinessHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Dashboard</Text>
      <Button
        title="Manage Schedules"
        onPress={() => navigation.navigate('ManageSchedules')}
        color="#4CAF50"
      />
      <Text style={styles.placeholder}> </Text>
      <Button
        title="View Orders"
        onPress={() => navigation.navigate('ManageOrders')}
        color="#4CAF50"
      />
      <Text style={styles.placeholder}> </Text>
      <Button
        title="Manage Products"
        onPress={() => navigation.navigate('ManageProducts')}
        color="#4CAF50"
      />
      <Text style={styles.placeholder}> </Text>
      <Button
        title="View Stats"
        onPress={() => navigation.navigate('ViewStats')}
        color="#4CAF50"
      />
      <Text style={styles.placeholder}> </Text>
      <Button
        title="View Reviews"
        onPress={() => navigation.navigate('ManageReviews')}
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

export default BusinessHomeScreen;
