import React from 'react';
import './homepage.styles.scss';
import Directory from "../components/directory/directory.component";

// using styled components
import {HomePageContainer} from "./homepage.styles";

const HomePage = () => {
    return (
        /*
        <div className="homepage">
            <Directory />
        </div>
        */

        // using styled components
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
};

// export HomePage for use by other components
export default HomePage;