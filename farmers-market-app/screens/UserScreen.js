import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import Footer from './Footer';

const UserScreen = ({ navigation }) => {
  const members = [
  { name: 'Xiao Chen', imageUri: 'https://i.imgur.com/fsKxubl.png', description: "Chen has been selling his home grown vegetables since he was in his late twenties, and he is committed to ensuring that Happiness Farms only sells the freshest produce. " },
  { name: 'Wei Wang', imageUri: 'https://i.imgur.com/3TMdhpS.png', description: "Wang ensures that all the operations of Happiness Farms go smoothly. He oversees all the app, website, and Wechat channels to ensure they all are up to date and functioning seamlessly. " },
  { name: 'Jamal Thompson', imageUri: 'https://i.imgur.com/5UwE3YF.jpeg', description: "Thompson helps market Happiness Farms, so you could find us. He promotes a strong connection between the community and the business by always engaging face to face with customers. " },
];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Happiness Farms</Text>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.navItem}>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}><Text style={styles.navItem}>Events</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Products')}><Text style={styles.navItem}>Products</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reviews')}><Text style={styles.navItem}>Reviews</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PlaceOrder')}><Text style={styles.navItem}>Place Order</Text></TouchableOpacity>
      </View>
      <Text style={styles.heading}>Happiness Farms</Text>
      <Text style={styles.subheading}>A local Chinese business dedicated to providing healthy, fresh, and delicious produce</Text>
      
      <Text style={styles.heading}>Our Mission</Text>
      <Text style={styles.text}>Welcome to Happiness Farms! We started off selling on WeChat but have excitingly expanded to create our own website! We are committed to bringing you the freshest, healthiest vegetables straight from our farm. Our mission is to provide our community with sustainable and nutritious food options, ensuring you get the best produce available.</Text>
      
      <Text style={styles.heading}>Meet Our Members</Text>
    {members.map((member, index) => (
        <View key={index} style={styles.member}>
          <Image source={{ uri: member.imageUri }} style={styles.image} />
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text>{member.description}</Text>
        </View>
      </View>
    ))}
      
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#4CAF50',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
  },
  navItem: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#4CAF50',
  },
  subheading: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333333',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333333',
  },
  member: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  }
});

export default UserScreen;
