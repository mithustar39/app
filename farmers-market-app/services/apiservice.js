import axios from 'axios';
const API_URL = 'http://localhost:9095/';

export const getMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}/hello`);
        console.log(response.data); // Log the entire response
        const content = response.data[0]?.content || 'No Content'; // Extract content
        return content;
    } catch (error) {
        console.error('Error fetching messages:', error.response ? error.response.data : error.message);
        return 'Error fetching message', error.response ? error.response.data : error.message;
    }
};

export const saveMessage = async (content) => {
    try {
        const response = await axios.post(`${API_URL}/hello`, { content });
        return response.data;
    } catch (error) {
        console.error('Error saving message:', error);
        throw error;
    }
};