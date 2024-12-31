import React from 'react'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { IoGridOutline } from 'react-icons/io5'

const NavBar = ({ setColor, setColorName, handleColorName, handleRandomHex, setIsRadioActive, setIsLayoutActive }) => {

    const generate = () => {
        const random = handleRandomHex()
        setColor(random)
        setColorName(handleColorName(random))
        // setComplementaryValue(handleComplementary(handleConvertToRGB(random)))
    }

    return (
        <nav className='navBar bg-white' style={{ '--nav-color': '' }}>
            <h1 className='sm:text-4xl absolute left-20'>Palettesy</h1>
            {/* <p className='md:w-auto w-3/5 text-sm md:ml-14 ml-6 md:block hidden'>Generate infinite random palettes or select your base color to start</p> */}
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
                <li>
                    <button aria-label='Choose a palette scheme' className='navBtn md:ml-0 focus-visible:ring-4 focus-visible:ring-black' onClick={() => setIsLayoutActive(true)}>
                        <IoGridOutline
                            size={30}
                        />
                        <span className='tooltiptext'>Layout</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar