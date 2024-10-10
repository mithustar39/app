import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PlaceOrderScreen = ({ navigation }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const events = [
    { id: '1', pickupSchedule: '8/3/2024', deliverySchedule: '8/3/2024', address: 'here', productName: ['tomato', 'cabbage'], qty: ['1', '3'], unitPrice: ['3', '2'], description: 'selling good stuff' },
    { id: '2', pickupSchedule: '8/2/2024', deliverySchedule: '8/2/2024', address: 'there', productName: ['tomato', 'cabbage'], qty: ['2', '2'], unitPrice: ['3', '2'], description: 'selling good stuff' }
  ];

  const products = [
    { name: 'tomato', pricePerPound: '3', picture: 'https://i.imgur.com/v3V18EJ.jpeg', stock: '40' },
    { name: 'lettuce', pricePerPound: '2', picture: 'https://i.imgur.com/tVhbWGY.jpeg', stock: '30' },
    { name: 'potato', pricePerPound: '1', picture: 'https://i.imgur.com/JCXNx8W.jpeg', stock: '50' },
    { name: 'carrot', pricePerPound: '2', picture: 'https://i.imgur.com/UkONHka.jpeg', stock: '60' }
  ];

  const items = events.map(event => ({
    label: `event: ${event.id} - pickup: ${event.pickupSchedule} - delivery: ${event.deliverySchedule} - address: ${event.address}`,
    value: event.id, // Ensure value is unique and identifiable
  }));

  const itemsProduct = products.map(product => ({
    label: `name: ${product.name} - price: ${product.pricePerPound} dollar/lb - stock: ${product.stock}`,
    value: product.name, // Ensure value is unique and identifiable
  }));

  const handleSaveOrder = () => {
    navigation.navigate("ThankYou")
    // Implement save logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Place Order</Text>
      </View>
      <Text style={styles.heading}>Select an Event</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedEvent(value)}
        items={items}
        style={{ inputIOS: styles.picker, inputAndroid: styles.picker }}
        placeholder={{ label: 'Select an event...', value: null }}
      />
      <Text style={styles.heading}>Select a Product</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedProduct(value)}
        items={itemsProduct}
        style={{ inputIOS: styles.picker, inputAndroid: styles.picker }}
        placeholder={{ label: 'Select a product...', value: null }}
      />
      <Text style={styles.heading}>Input Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#AAAAAA"
      />
      <Text style={styles.heading}>Input Quantity</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        placeholderTextColor="#AAAAAA"
      />
      <Button title="Submit" onPress={handleSaveOrder} color="#4CAF50" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#AAAAAA',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    color: '#333333',
    width: '80%', // Ensure input width matches the picker width
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: 20,
  },
  picker: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20, // Add margin bottom for spacing between elements
  },
});

export default PlaceOrderScreen;