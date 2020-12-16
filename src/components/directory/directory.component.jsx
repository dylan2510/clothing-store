import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

// use class component here insteadd of functional component
// need to access lifecycle methods here
class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }               
            ]
        };
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    // for each of the section, generate menu-item component
                    /*
                    this.state.sections.map(s => (
                         <MenuItem key={s.id} title={s.title} imageUrl={s.imageUrl} />
                    ))
                    */
                   this.state.sections.map(s => {
                        return (
                            <MenuItem key={s.id} title={s.title} imageUrl={s.imageUrl} 
                                size={s.size} linkUrl={s.linkUrl} />
                        )
                   })
                }
            </div>
        )
    }
}

export default Directory;