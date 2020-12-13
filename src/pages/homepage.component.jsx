import React from 'react';
import './homepage.styles.scss';
import Directory from "../components/directory/directory.component";

const HomePage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
};

// export HomePage for use by other components
export default HomePage;