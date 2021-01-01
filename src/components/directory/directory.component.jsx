import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import {connect} from 'react-redux';
import {selectDirectorySections} from "../../redux/directory/directory.selectors";

// use class component here insteadd of functional component
// need to access lifecycle methods here
/*
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
*/

const Directory = ({sections}) => {
    return (
        <div className="directory-menu">
                {
                   sections.map(s => {
                        return (
                            <MenuItem key={s.id} title={s.title} imageUrl={s.imageUrl} 
                                size={s.size} linkUrl={s.linkUrl} />
                        )
                   })
                }
            </div>
    );
}

const mapStateToProps = (reducer) => {
    return {
        sections: selectDirectorySections(reducer) //reducer.directory.sections
    };
  }

export default connect(mapStateToProps)(Directory);