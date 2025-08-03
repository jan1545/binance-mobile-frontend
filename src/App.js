import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Page imports
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WalletOverview from './pages/WalletOverview';
import TransactionsPage from './pages/TransactionsPage';
import DepositPage from './pages/DepositPage';
import WithdrawCryptoPage from './pages/WithdrawCryptoPage';
import Chat from './pages/Chat';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    return (
        <div style={{ textAlign: 'right', padding: '10px' }}>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>{' '}
            <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
        </div>
    );
};

const isAuthenticated = () => !!localStorage.getItem('token');

const App = () => {
    return (
        <>
            <LanguageSwitcher />
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/wallet"
                    element={isAuthenticated() ? <WalletOverview /> : <Navigate to="/login" />}
                />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/deposit" element={<DepositPage />} />
                <Route path="/withdraw" element={<WithdrawCryptoPage />} />
                <Route path="/chat" element={<Chat />} />
                {/* Optional fallback */}
                <Route path="*" element={<div>404 — Page Not Found</div>} />
            </Routes>
        </>
    );
};

export default App;
