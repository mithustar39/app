import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ManageReviewsScreen = () => {
  const [reviews, setReviews] = useState([
    { id: '1', customer: 'Customer1', rating: 5, comment: 'Great produce!' },
    { id: '2', customer: 'Customer2', rating: 4, comment: 'Very fresh!' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.review}>
            <Text style={styles.reviewText}>Customer: {item.customer}</Text>
            <Text style={styles.reviewText}>Rating: {item.rating} stars</Text>
            <Text style={styles.reviewText}>Comment: {item.comment}</Text>
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
  review: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 10,
  },
  reviewText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default ManageReviewsScreen;
