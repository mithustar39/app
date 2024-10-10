import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import Footer from './Footer';

const products = [
  { name: 'tomato', pricePerPound: '3', picture: 'https://i.imgur.com/v3V18EJ.jpeg', stock: '40' },
  { name: 'lettuce', pricePerPound: '2', picture: 'https://i.imgur.com/tVhbWGY.jpeg', stock: '30' },
  { name: 'potato', pricePerPound: '1', picture: 'https://i.imgur.com/JCXNx8W.jpeg', stock: '50' },
  { name: 'carrot', pricePerPound: '2', picture: 'https://i.imgur.com/UkONHka.jpeg', stock: '60' }
];

const ProductsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Products</Text>
      <View style={styles.productGrid}>
        {products.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <Image source={{ uri: product.picture }} style={styles.productImage} />
            <Text style={styles.productText}>{product.name}</Text>
            <Text style={styles.productPrice}>{`${product.pricePerPound} dollar per lb`}</Text>
            <Text style={styles.productStock}>Stock: {`${product.stock} lb`}</Text>
          </View>
        ))}
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
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  productItem: {
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productText: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#666666',
  },
});

export default ProductsScreen;
