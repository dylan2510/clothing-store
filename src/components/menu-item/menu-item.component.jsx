import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom'

// {title} is actually props.title
// history prop is accessible using withRouter()
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return(
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            } className="background-image"></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

// withRouter() allow this component to access Router props such as history
export default withRouter(MenuItem);