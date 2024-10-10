import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Footer from './Footer';

const BusinessScreen = () => {
  const [event, setEvent] = useState('');
  const [availability, setAvailability] = useState('');
  const [stock, setStock] = useState('');
  const [portions, setPortions] = useState('');
  const [discounts, setDiscounts] = useState('');

  const handleSubmit = () => {
    console.log({ event, availability, stock, portions, discounts });
    // Add logic to handle business form submission
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business</Text>
      <TextInput
        style={styles.input}
        placeholder="Event"
        value={event}
        onChangeText={setEvent}
      />
      <TextInput
        style={styles.input}
        placeholder="Availability"
        value={availability}
        onChangeText={setAvailability}
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
      />
      <TextInput
        style={styles.input}
        placeholder="Portions for Pre-order"
        value={portions}
        onChangeText={setPortions}
      />
      <TextInput
        style={styles.input}
        placeholder="Discounts/Prices"
        value={discounts}
        onChangeText={setDiscounts}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Footer />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default BusinessScreen;
