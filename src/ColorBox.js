import React from 'react'
import ColorForm from './ColorForm'
import ColorInfoBox from './ColorInfoBox'
import { useState } from 'react'
import CardButtons from './CardButtons'

const ColorBox = ({ color, setColor, handleChange, colorName, setColorName, handleColorName, setComplementaryValue, handleComplementary, handleConvertToRGB, handleFocus, handleBlur, isPickerVisible, handleTextContrast, copied, setCopied, handleCopy, layoutSelected }) => {
    const style = {
        backgroundColor: `${color}`,
        borderRadius: layoutSelected.name === 'Round' ? '1000px' : '0px'
    }

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={layoutSelected.name === 'Swiss Geometric' ? `grid-item` : 'color-box'} style={style}>
            {isActive && (<ColorInfoBox
                colorValue={color}
                handleTextContrast={handleTextContrast}
                setIsActive={setIsActive}
                copied={copied}
                setCopied={setCopied}
                handleCopy={handleCopy}
            />)}
            {layoutSelected.name !== 'Swiss Geometric' && <div className='colorSpecBox'>
                <p className='colorName' style={{ color: handleTextContrast(color), textAlign: 'center' }}>{colorName ? colorName : null}</p>
                <CardButtons
                    setIsActive={setIsActive}
                    handleTextContrast={handleTextContrast}
                    colorValue={color}
                    handleCopy={handleCopy}
                    copied={copied}
                />

                <ColorForm
                    color={color}
                    setColor={setColor}
                    handleChange={handleChange}
                    setColorName={setColorName}
                    handleColorName={handleColorName}
                    setComplementaryValue={setComplementaryValue}
                    handleComplementary={handleComplementary}
                    handleConvertToRGB={handleConvertToRGB}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    isPickerVisible={isPickerVisible}
                    handleTextContrast={handleTextContrast}
                />
            </div>}

            {layoutSelected.name === 'Swiss Geometric' && <div className='flex flex-col gap-14 justify-center items-center'>
                <p className='flex absolute'
                    style={{ color: handleTextContrast(color) }}
                >
                    {color.toUpperCase()}
                </p>
                <CardButtons
                    setIsActive={setIsActive}
                    handleTextContrast={handleTextContrast}
                    colorValue={color}
                    handleCopy={handleCopy}
                    copied={copied}
                    layoutSelected={layoutSelected.name}
                />
                {/* <ColorForm
                    color={color}
                    setColor={setColor}
                    handleChange={handleChange}
                    setColorName={setColorName}
                    handleColorName={handleColorName}
                    setComplementaryValue={setComplementaryValue}
                    handleComplementary={handleComplementary}
                    handleConvertToRGB={handleConvertToRGB}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    isPickerVisible={isPickerVisible}
                    handleTextContrast={handleTextContrast}
                /> */}
            </div>}
        </div>
    )
}

export default ColorBox