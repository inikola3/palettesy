import React from 'react'
import ColorBox from './ColorBox'
import ComplementaryBox from './ComplementaryBox'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoExpandOutline } from 'react-icons/io5'
import SchemeRadioGroup from './SchemeRadioGroup'
import LayoutRadioGroup from './LayoutRadioGroup'

const Content = ({ color, setColor, handleChange, colorName, setColorName, complementaryValue, handleColorName, setComplementaryValue, handleComplementary, handleConvertToRGB, handleFocus, handleBlur, isPickerVisible, handleTextContrast, handleCopy, copied, setCopied, handleCardsValue, isRadioActive, setIsRadioActive, isLayoutActive, setIsLayoutActive, handleComplementaryScheme }) => {
    const schemes = [
        { name: 'Default', description: 'Use a Default Palette Scheme' },
        { name: 'Monochromatic', description: 'Use a Monochromatic Palette Scheme' },
        { name: 'Complementary', description: 'Use a Complementary Palette Scheme' },
        { name: 'Tetradic', description: 'Use a Tetradic Palette Scheme' },
    ]

    const layout = [
        { name: 'Classic', description: 'Traditional palette layout' },
        { name: 'Round', description: 'Softer arrangement' },
        { name: 'Swiss Geometric', description: 'Artistic composition' },
    ]
    const [layoutSelected, setLayoutSelected] = useState(layout[0])

    const [selected, setSelected] = useState(schemes[0])

    const [hoverId, setHoverId] = useState(null)
    const [removedValue, setRemovedValue] = useState('#FFF')

    const handleAddHover = (id) => {
        setHoverId(id)
    }

    const handleRemoveHover = () => {
        setHoverId(null)
    }

    const { monochromatic, triad, tetrad, analogous } = handleCardsValue(color)

    const [paletteValues, setPaletteValues] = useState([...analogous])

    const [colorCard, setColorCard] = useState([
        {
            id: 0,
            value: paletteValues[1]
        },

        {
            id: 1,
            value: paletteValues[3]
        },
        {
            id: 2,
            value: paletteValues[0]
        },
        {
            id: 3,
            value: paletteValues[2]
        },
    ])
    const [cardTotal, setCardTotal] = useState(colorCard.length)
    const complementary = handleComplementaryScheme(color, cardTotal + 1)

    // const handleSchemeChange = () => {
    //     const newPaletteValues = selected.name === 'Monochromatic' ? [...monochromatic] : selected.name === 'Complementary' ? [...complementary] : [...analogous]
    //     setPaletteValues(newPaletteValues)
    // }

    useEffect(() => {
        const newColorCards = []
        for (let i = 0; i < cardTotal; i++) {
            newColorCards.push({ id: i, value: paletteValues[i] })
        }
        // const newColorCards = [
        //     { id: 0, value: paletteValues[0] },
        //     { id: 1, value: paletteValues[1] },
        //     { id: 2, value: paletteValues[2] },
        //     { id: 3, value: paletteValues[3] },
        // ]

        setColorCard(newColorCards)
    }, [paletteValues])

    useEffect(() => {
        const newPaletteValues = selected.name === 'Monochromatic' ? [...monochromatic] : selected.name === 'Complementary' ? [...complementary] : selected.name === 'Tetradic' ? [...tetrad] : [...analogous]
        setPaletteValues(newPaletteValues)
    }, [color, selected])

    const handleAddCard = (id) => {
        const newId = id + 1
        const newCard = { id: newId, value: removedValue }
        const newList = colorCard.toSpliced(newId, 0, newCard)
        newList.forEach((card) => card.id = newList.indexOf(card))
        setColorCard(newList)
        setCardTotal(cardTotal + 1)
    }

    const handleRemoveCard = (id) => {
        const removedItem = colorCard.filter((card) => card.id === id)
        const value = removedItem[0].value
        setRemovedValue(value)
        const newList = colorCard.filter((card) => card.id !== id)
        newList.forEach((card) => card.id = newList.indexOf(card))
        setColorCard(newList)
        setCardTotal(newList.length)
    }

    const handleCheckId = (id) => {
        console.log('Id: ', id)
    }

    return (
        <div className='mainContent'>
            {isRadioActive && (<div style={{ display: 'flex' }} className='radioGroup'>
                <SchemeRadioGroup
                    setIsRadioActive={setIsRadioActive}
                    schemes={schemes}
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>)}
            {isLayoutActive && (<div style={{ display: 'flex' }} className='radioGroup'>
                <LayoutRadioGroup
                    setIsLayoutActive={setIsLayoutActive}
                    layout={layout}
                    layoutSelected={layoutSelected}
                    setLayoutSelected={setLayoutSelected}
                />
            </div>)}

            <div className={layoutSelected.name === 'Swiss Geometric' ? 'color-grid' : 'colorCardWrapper '}>
                <div className="colorCard">
                    <ColorBox
                        color={color}
                        setColor={setColor}
                        colorName={colorName}
                        handleTextContrast={handleTextContrast}
                        handleChange={handleChange}
                        setColorName={setColorName}
                        handleColorName={handleColorName}
                        setComplementaryValue={setComplementaryValue}
                        handleComplementary={handleComplementary}
                        handleConvertToRGB={handleConvertToRGB}
                        handleFocus={handleFocus}
                        handleBlur={handleBlur}
                        isPickerVisible={isPickerVisible}
                        handleCopy={handleCopy}
                        copied={copied}
                        setCopied={setCopied}
                        layoutSelected={layoutSelected}
                    />
                </div>
                {/* </div> */}
                {colorCard.map((card) => (

                    <div className="colorCard" key={card.id} >
                        <ComplementaryBox
                            complementaryValue={card.value}
                            handleTextContrast={handleTextContrast}
                            handleCopy={handleCopy}
                            copied={copied}
                            setCopied={setCopied}
                            id={card.id}
                            handleRemoveCard={handleRemoveCard}
                            handleAddCard={handleAddCard}
                            cardTotal={cardTotal}
                            handleAddHover={handleAddHover}
                            handleRemoveHover={handleRemoveHover}
                            layoutSelected={layoutSelected}
                        />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Content