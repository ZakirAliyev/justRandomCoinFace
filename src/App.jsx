import React, {useState} from 'react';
import './App.css';
import coinFront from './assets/coin-front.png';
import coinBack from './assets/coin-back.png';

function App() {
    const [isSpinning, setIsSpinning] = useState(false);
    const [coinFace, setCoinFace] = useState('front');

    const toggleSpin = () => {
        if (isSpinning) {
            setIsSpinning(false);
            const randomFace = Math.random() > 0.5 ? 'front' : 'back';
            setCoinFace(randomFace);
        } else {
            setIsSpinning(true);
        }
    };


    return (
        <section id="body">
            <div className="container">
                <div className="wrapper">
                    <div
                        className={`coin ${isSpinning ? 'spin' : ''} ${!isSpinning && coinFace === 'back' ? 'stop' : ''}`}>
                        {!isSpinning && coinFace === 'front' ? (
                            <div className={`coin-face coin-front show`}>
                                <img src={coinFront} alt="Coin Front"/>
                            </div>
                        ) : !isSpinning && coinFace === 'back' ? (
                            <div className={`coin-face coin-back stop`}>
                                <img src={coinBack} alt="Coin Back"/>
                            </div>
                        ) : (
                            <>
                                <div className={`coin-face coin-front`}>
                                    <img src={coinFront} alt="Coin Front"/>
                                </div>
                                <div className={`coin-face coin-back`}>
                                    <img src={coinBack} alt="Coin Back"/>
                                </div>
                            </>
                        )}
                    </div>
                    <button onClick={toggleSpin}>
                        {isSpinning ? 'STOP' : 'SPIN'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default App;
