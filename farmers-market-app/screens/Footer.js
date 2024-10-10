import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.socialIcons}>
        <FontAwesome name="twitter" size={24} color="#1DA1F2" onPress={() => Linking.openURL('https://twitter.com')} />
        <FontAwesome name="facebook" size={24} color="#1877F2" onPress={() => Linking.openURL('https://facebook.com')} />
        <FontAwesome name="instagram" size={24} color="#C13584" onPress={() => Linking.openURL('https://instagram.com')} />
        <FontAwesome name="envelope" size={24} color="#D44638" onPress={() => Linking.openURL('mailto:email@example.com')} />
      </View>
      <Text style={styles.contactText}>Contact us: 0123 456 7890</Text>
      <Text style={styles.contactText}>Visit us: The London Eye, Riverside Building, County Hall, London SE1 7PB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    paddingVertical: 20,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default Footer;
