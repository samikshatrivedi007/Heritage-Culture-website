import React from 'react';
import './Home.css'; // We’ll define styling separately

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="overlay">
                <header className="navbar">
                    <div className="logo">!INDIA</div>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Heritage Sites</a></li>
                            <li><a href="#">Travel With us</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Our Pride</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                </header>

                <main className="hero-content">
                    <h1>EXPLORE THE INDIAN CULTURE AND HERITAGE.</h1>
                    <p>
                        India is a country dotted with stunning wildlife diversity, and rich traditions.
                        While the Western coast greets you with mouth-watering delicacies, the East part invites you to experience its greenery.
                    </p>
                    <button className="read-more-btn">Read More</button>
                </main>
            </div>
        </div>
    );
};

export default Home;
