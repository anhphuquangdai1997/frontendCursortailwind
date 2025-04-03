import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold">Home Page</h1>
                <p>Welcome to the application!</p>
            </div>
            <Footer />
        </>
    );
};

export default Home;