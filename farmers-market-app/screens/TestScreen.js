import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getMessages } from '../services/apiservice'; // Adjust the import path

const TestScreen = () => {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const content = await getMessages(); // Fetch the content
                setMessage(content); // Update state with the content
            } catch (error) {
                setMessage('Error fetching message'); // Handle errors
            }
        };

        fetchMessage(); // Call the async function
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{message}</Text>
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
});

export default TestScreen;