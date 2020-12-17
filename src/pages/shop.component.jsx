import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from "../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        const state = this.state;
        return(
            <div className="shop-page">
                {
                    state.collections.map(c => {
                        return (
                            <CollectionPreview key={c.id} title={c.title} items={c.items} />
                        )
                    })
                }
            </div>
        );
    }
}

export default ShopPage;