import React from 'react';
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import {withRouter} from 'react-router-dom';


const CollectionPreview = ({title, items, history}) => {
    return (
        <div className="collection-preview">
            <h1 className="title" onClick={()=>history.push(`/shop/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    // only want to display 4 items as preview
                    items
                    .filter((item, index) => index < 4 )
                    // resulting item is destructured into all of its properties
                    .map((item) => {
                        return(
                            // pass all props of items to component as per their name
                            <CollectionItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);