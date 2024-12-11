import React from 'react'
import { IoColorPaletteOutline } from 'react-icons/io5'

const NavBar = ({ setColor, setColorName, handleColorName, setComplementaryValue, handleComplementary, handleConvertToRGB, handleRandomHex, setIsRadioActive }) => {

    const generate = () => {
        const random = handleRandomHex()
        setColor(random)
        setColorName(handleColorName(random))
        // setComplementaryValue(handleComplementary(handleConvertToRGB(random)))
    }

    return (
        <nav className='navBar'>
            <p className='md:w-auto w-3/5 text-sm md:ml-14 ml-6 md:block hidden'>Generate infinite random palettes or select your base color to start</p>
            <ul>
                <li>
                    <button aria-label='Choose a palette scheme' className='navBtn md:ml-4 focus-visible:ring-4 focus-visible:ring-black' onClick={() => setIsRadioActive(true)}>
                        <IoColorPaletteOutline
                            size={30}
                        />
                        <span className='tooltiptext'>Palette Scheme</span>
                    </button>
                </li>
                <li>
                    <button aria-label='Generate a random palette' className='generateBtn focus-visible:ring-4 focus-visible:ring-black' onClick={() => generate()}>
                        <p className='md:w-auto w-32'>Generate Random</p>
                        <span className='tooltiptext'>Random Palette</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar