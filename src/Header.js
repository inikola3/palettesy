import React from 'react'
import { IoColorPaletteOutline } from 'react-icons/io5'
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
            {/* <h1 style={{ color: '#32F299' }}>Pa</h1>
            <h1 style={{ color: '#EBF232' }}>le</h1>
            <h1 style={{ color: '#F2328B' }}>tte</h1> */}
        </header>
    )
}

export default Header