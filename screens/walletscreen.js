import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import api from '../services/api'; // Make sure this path is correct in your project

const WalletScreen = ({ route }) => {
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = route?.params?.userId; // Passed from navigation params

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await api.get('/wallet', { params: { userId } });
                setBalance(response.data.balance);
            } catch (err) {
                console.error('Wallet fetch failed:', err);
            } finally {
                setLoading(false);
            }
        };

        if (userId) fetchBalance();
    }, [userId]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Your Wallet</Text>
            {loading ? (
                <Text style={styles.info}>Loading...</Text>
            ) : balance ? (
                Object.entries(balance).map(([coin, amount]) => (
                    <View key={coin} style={styles.card}>
                        <Text style={styles.coin}>{coin}</Text>
                        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
                    </View>
                ))
            ) : (
                <Text style={styles.info}>No balance data available</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#0B0F1E',
        flexGrow: 1
    },
    heading: {
        fontSize: 24,
        color: '#00FFE0',
        fontWeight: 'bold',
        marginBottom: 20
    },
    card: {
        padding: 15,
        backgroundColor: '#1A1F2B',
        borderRadius: 10,
        marginBottom: 10
    },
    coin: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    amount: {
        fontSize: 16,
        color: '#00FF99'
    },
    info: {
        color: '#CCCCCC',
        fontSize: 16
    }
});

export default WalletScreen;
