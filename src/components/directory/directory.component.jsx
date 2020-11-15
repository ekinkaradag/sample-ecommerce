import React from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: process.env.PUBLIC_URL + '/images/hats.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: process.env.PUBLIC_URL + '/images/jackets.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: process.env.PUBLIC_URL + '/images/sneakers.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'women',
                    imageUrl: process.env.PUBLIC_URL + '/images/women.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/women'
                },
                {
                    title: 'men',
                    imageUrl: process.env.PUBLIC_URL + '/images/men.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/men'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;