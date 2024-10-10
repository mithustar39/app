import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import Footer from './Footer';

const handleSaveEvent = () => {
  //save event
  };

const EventsScreen = () => {
  const handleSaveEvent = () => {
  //save event
  };
  const scheduleData = [
  { day: 'Sunday', address: '', timeOfDay: '' },
  { day: 'Monday', address: '', timeOfDay: '' },
  { day: 'Tuesday', address: '', timeOfDay: '' },
  { day: 'Wednesday', address: '', timeOfDay: '' },
  { day: 'Thursday', address: '', timeOfDay: '' },
  { day: 'Friday', address: '303 Cedar St', timeOfDay: '2:00 PM - 4:00 PM' },
  { day: 'Saturday', address: '404 Willow St', timeOfDay: '3:00 PM - 5:00PM' },
];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <Text style={styles.subtitle}>When and where you're able to buy our produce</Text>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleTitle}>Pick Up Schedule</Text>
        <View style={styles.calendar}>
          {scheduleData.map((item, index) => (
            <View key={index} style={styles.dayColumn}>
              <Text style={styles.day}>{item.day}</Text>
              <View style={styles.event}>
                <Text style={styles.eventText}>Address: {item.address}</Text>
                <Text style={styles.eventText}>Time: {item.timeOfDay}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleTitle}>Delivery Schedule</Text>
        <View style={styles.calendar}>
          {/* Mocked Calendar Entries */}
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
            <View key={index} style={styles.dayColumn}>
              <Text style={styles.day}>{day}</Text>
              <View style={styles.event}>
                <Text style={styles.eventText}>YOUR ADDRESS</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 20,
  },
  scheduleContainer: {
    marginBottom: 30,
  },
  scheduleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 10,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayColumn: {
    alignItems: 'center',
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  event: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    width: 80,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventText: {
    fontSize: 14,
    color: '#333333',
  },
});

export default EventsScreen;
