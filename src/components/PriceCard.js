import React from 'react';
import BitcoinImage from '../assets/bitcoin.png';

export default function PriceCard() {
  return (
    <>
        <section class="price-card">
            <div class="logo">
                {/* Bitcoin Logo */}
                <div class="logo-image">
                    <img src={BitcoinImage} alt="" />
                    <h3>Bitcoin</h3>
                </div>
                <span>BTC</span>
            </div>
            <div class="value">
                <h1>3.529020</h1>
                <span className='dprice'>
                    <h3>$ 19,153 USD</h3>
                    <span class="percentage">2.32%</span>
                </span>
            </div>
            <span class="material-symbols-outlined">expand_more</span>        
        </section>
    </>
  )
}
