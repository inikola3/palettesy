import React, { useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'


const ColorForm = ({ color, setColor, handleChange, setColorName, handleColorName, setComplementaryValue, handleComplementary, handleConvertToRGB, handleFocus, handleBlur, isPickerVisible, handleTextContrast }) => {
    const [input, setInput] = useState(color)

    useEffect(() => {
        setInput(color)
    }, [color])

    const handleColorChange = (color) => {
        setColor(color)
        setColorName(handleColorName(color))
        // setComplementaryValue(handleComplementary(handleConvertToRGB(color)))
        setInput(color)
    }

    const handleInput = (e) => {
        const input = e.target.value.trim();
        setInput(input);
        if (/^#?[0-9a-f]{3}([0-9a-f]{3})?$/i.test(input)) {
            const formattedInput = input.startsWith('#') ? input : `#${input}`;
            setInput(formattedInput)
            setColor(formattedInput);
            setColorName(handleColorName(formattedInput));
            setComplementaryValue(
                handleComplementary(handleConvertToRGB(formattedInput))
            );
        }
    }
    return (
        <form className='colorForm flex-col ' onFocus={handleFocus} onBlur={handleBlur} onSubmit={handleChange}>
            {isPickerVisible && (<section style={{ display: 'flex' }} className='hexColorPicker' id='hexColorPicker'>
                <HexColorPicker color={color} onChange={handleColorChange} />
            </section>)}
            <input
                style={{ color: handleTextContrast(color) }}
                id='selectColor'
                type='text'
                placeholder='Color'
                required
                value={input.toUpperCase()}
                onChange={handleInput}
            />
            <p style={{ color: handleTextContrast(color) }} className='absolute md:top-7 text-sm bottom-7'>Base</p>
        </form>
    )
}

export default ColorForm