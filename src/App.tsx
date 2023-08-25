import { FC } from 'react';
import './App.scss';
import Countdown from './components/Countdown/Countdown';
import Footer from './components/Footer/Footer';

const App: FC = () => {
    return (
        <div className="app">
            <div className="top">
                <h1 className="title">We're launching soon</h1>

                <Countdown />
            </div>

            <Footer />
        </div>
    );
};

export default App;
