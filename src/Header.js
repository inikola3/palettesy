import React from 'react'
import { IoColorFillOutline } from 'react-icons/io5'

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <IoColorFillOutline
                    size={40}
                />
                <div className="logoColors"></div>
            </div>
            <h1 style={{ color: '#85FF83', marginLeft: '5px' }}>Pal</h1>
            <h1 style={{ color: '#8385FF' }}>ett</h1>
            <h1 style={{ color: '#83C3FF' }}>esy</h1>
        </header>
    )
}

export default Header