import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WalletOverview = () => {
    const [balance, setBalance] = useState(null);
    const userId = 'replace_with_your_mongodb_user_id';

    useEffect(() => {
        axios.get('http://localhost:5000/api/wallet', { params: { userId } })
            .then(res => setBalance(res.data.balance))
            .catch(err => console.error('Wallet error:', err));
    }, []);

    return (
        <div>
            <h2>Your Wallet</h2>
            {balance ? (
                Object.entries(balance).map(([coin, amount]) => (
                    <p key={coin}>{coin}: ${amount.toFixed(2)}</p>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default WalletOverview;
