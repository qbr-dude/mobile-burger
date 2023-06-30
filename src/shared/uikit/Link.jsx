import React from 'react'

const Link = ({href, children}) => {
    return (
        <div className='text-base'>
            <a href={href}>
                {children}
            </a>
        </div>
    )
}

export default Link