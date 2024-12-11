import React from 'react'
import { useState } from 'react'
import tinycolor from 'tinycolor2'
import { IoCloseCircleOutline } from 'react-icons/io5'

const ColorInfoBox = ({ colorValue, handleTextContrast, setIsActive, copied, setCopied, handleCopy }) => {

    const namer = require('color-namer')
    const names = namer(colorValue)

    const color = tinycolor(colorValue)
    const rgb = color.toRgbString()
    const hsv = color.toHsvString()

    const [isNameHovered, setIsNameHovered] = useState(false)
    const [isHexHovered, setIsHexHovered] = useState(false)
    const [isRgbHovered, setIsRgbHovered] = useState(false)
    const [isHsvHovered, setIsHsvHovered] = useState(false)

    const background = () => {
        return handleTextContrast(colorValue) === '#000000' ? ('rgba(0,0,0,0.05)') : ('rgba(255,255,255,0.3)')
    }

    return (
        <div className="infoBox" style={{ display: 'flex', backgroundColor: colorValue }}>
            <IoCloseCircleOutline
                size={30}
                className='closeBtn'
                style={{ color: handleTextContrast(colorValue) }}
                onClick={() => setIsActive(false)}
            />
            <ul style={{ color: handleTextContrast(colorValue) }}>
                <div className="firstRow">
                    <li
                        onMouseEnter={() => setIsNameHovered(true)}
                        onMouseLeave={() => { setIsNameHovered(false); setCopied(false) }}
                        onClick={() => handleCopy(names.ntc[0].name)}
                        style={{ backgroundColor: isNameHovered ? background() : 'transparent' }}
                    >
                        <p className='infoLabel'>NAME</p>
                        {copied && isNameHovered ? <p>Copied Name!</p> : <p>{names.ntc[0].name}</p>}
                    </li>
                    <li
                        onMouseEnter={() => setIsHexHovered(true)}
                        onMouseLeave={() => { setIsHexHovered(false); setCopied(false) }}
                        onClick={() => handleCopy(colorValue.toUpperCase())}
                        style={{ backgroundColor: isHexHovered ? background() : 'transparent' }}
                    >
                        <p className='infoLabel'>HEX</p>
                        {copied && isHexHovered ? 'Copied Hex!' : colorValue.toUpperCase()}
                    </li>
                </div>
                <div className="secondRow">
                    <li
                        onMouseEnter={() => setIsRgbHovered(true)}
                        onMouseLeave={() => { setIsRgbHovered(false); setCopied(false) }}
                        onClick={() => handleCopy(rgb)}
                        style={{ backgroundColor: isRgbHovered ? background() : 'transparent' }}
                    >
                        <p className='infoLabel'>RGB</p>
                        {copied && isRgbHovered ? 'Copied RGB!' : rgb.toUpperCase()}
                    </li>
                    <li
                        onMouseEnter={() => setIsHsvHovered(true)}
                        onMouseLeave={() => { setIsHsvHovered(false); setCopied(false) }}
                        onClick={() => handleCopy(hsv)}
                        style={{ backgroundColor: isHsvHovered ? background() : 'transparent' }}
                    >
                        <p className='infoLabel'>HSV</p>
                        {copied && isHsvHovered ? 'Copied HSV!' : hsv.toUpperCase()}
                    </li>
                </div>
            </ul>
        </div >
    )
}

export default ColorInfoBox