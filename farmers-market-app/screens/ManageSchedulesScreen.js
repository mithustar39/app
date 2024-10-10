import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, ScrollView} from 'react-native';

const ManageSchedulesScreen = () => {
  const [pickupSchedule, setPickupSchedule] = useState('');
  const [deliverySchedule, setDeliverySchedule] = useState('');
  const [address, setAddress] = useState('');
  const [productName, setProductName] = useState('');
  const [qty, setQty] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [description, setDescription] = useState('');
  const [events, setEvents] = useState([
    { id: '1', pickupSchedule: '8/3/2024', deliverySchedule: "8/3/2024", address: 'here', productName: ["tomato", "cabbage"], qty: ["1","3"], unitPrice: ["3","2"], description: "selling good stuff"},
    { id: '2', pickupSchedule: '8/2/2024', deliverySchedule: "8/2/2024", address: 'there', productName: ["tomato", "cabbage"], qty: ["2","2"], unitPrice: ["3","2"], description: "selling good stuff"}
  ]);

  const handleSave = () => {
    // Implement save logic here
  };
  const deleteEvent = () => {
    // Implement delete logic here
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Manage Schedules</Text>
        <Text style={styles.eventText}>Event Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Pickup Schedule"
          value={pickupSchedule}
          onChangeText={setPickupSchedule}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Delivery Schedule"
          value={deliverySchedule}
          onChangeText={setDeliverySchedule}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          placeholderTextColor="#AAAAAA"
        />
        <Text style={styles.eventText}>Products</Text>
        <TextInput
          style={styles.input}
          placeholder="Product Name, seperate by coma"
          value={productName}
          onChangeText={setProductName}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="QTY (lb), seperate by coma"
          value={qty}
          onChangeText={setQty}
          placeholderTextColor="#AAAAAA"
        />
        <Text style={styles.eventText}>Event Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          placeholderTextColor="#AAAAAA"
        />
        <Button title="Save" onPress={handleSave} color="#4CAF50" />
          <FlatList
            data={events}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.events}>
                <Text style={styles.eventTitle}>Event: {item.id} </Text>
                <Text style={styles.eventText}>Pickup Schedule: {item.pickupSchedule} </Text>
                <Text style={styles.eventText}>Delivery Schedule: {item.deliverySchedule} </Text>
                <Text style={styles.eventText}>Address: {item.address} </Text>
                <Text style={styles.eventText}>Product Name: {item.productName.join(', ')} </Text>
                <Text style={styles.eventText}>QTY: {item.qty.join(', ')} </Text>
                <Text style={styles.eventText}>Unit Price: {item.unitPrice.join(', ')} </Text>
                <Text style={styles.eventText}>Description: {item.description} </Text>
                <Button title="delete" onPress={() => deleteEvent(item.id)} color="#4CAF50" />
              </View>
            )}
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
  eventText: {
    fontSize: 14,
    color: '#333333',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  events: {
    marginBottom: 10,
  },
});

export default ManageSchedulesScreen;
