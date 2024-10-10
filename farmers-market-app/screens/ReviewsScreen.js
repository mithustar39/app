import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import Footer from './Footer';

const ReviewsScreen = () => {
  const [reviews, setReviews] = useState([
    { name: 'User1', rating: 5, comment: 'Great product!' },
    { name: 'User2', rating: 4, comment: 'Very fresh and tasty.' },
  ]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmitReview = () => {
    if (name && rating && comment) {
      setReviews([...reviews, { name, rating: Number(rating), comment }]);
      setName('');
      setRating('');
      setComment('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reviews</Text>

      <View style={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <View key={index} style={styles.review}>
            <Text style={styles.reviewText}>{review.name} - {review.rating} Stars</Text>
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
        ))}
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Rating (1-5)"
          value={rating}
          onChangeText={setRating}
          placeholderTextColor="#AAAAAA"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Comment"
          value={comment}
          onChangeText={setComment}
          placeholderTextColor="#AAAAAA"
        />
        <Button title="Submit Review" onPress={handleSubmitReview} color="#4CAF50" />
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
    marginBottom: 20,
  },
  reviewsContainer: {
    marginBottom: 20,
  },
  review: {
    marginBottom: 10,
  },
  reviewText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  reviewComment: {
    fontSize: 16,
    color: '#666666',
  },
  formContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
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

export default ReviewsScreen;
