import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ManageOrdersScreen = () => {
  const [orders, setOrders] = useState([
    { id: '1', customer: 'Customer1', items: 'Tomatoes', qty: '2', total: '$5.00', date: '8/3/2024'},
    { id: '2', customer: 'Customer2', items: 'Potatoes', qty: '3', total: '$7.50', date: '8/2/2024'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.order}>
            <Text style={styles.orderText}>Customer: {item.customer}</Text>
            <Text style={styles.orderText}>Item: {item.items}</Text>
            <Text style={styles.orderText}>Quantity: {item.qty}</Text>
            <Text style={styles.orderText}>Event Date: {item.date}</Text>
            <Text style={styles.orderText}>Total: {item.total}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  order: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default ManageOrdersScreen;
