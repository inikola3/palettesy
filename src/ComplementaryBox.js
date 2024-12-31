import React from 'react'
import { useState } from 'react'
import ColorInfoBox from './ColorInfoBox'
import CardButtons from './CardButtons'

const ComplementaryBox = ({ complementaryValue, handleTextContrast, handleCopy, copied, setCopied, id, handleRemoveCard, cardTotal, handleAddCard, handleAddHover, handleRemoveHover, layoutSelected }) => {
    const style = {
        backgroundColor: `${complementaryValue}`,
        borderRadius: layoutSelected.name === 'Round' ? '1000px' : ''
    }
    const namer = require('color-namer')
    const names = namer(complementaryValue)

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={layoutSelected.name === 'Swiss Geometric' ? `grid-item item-${id + 1}` : 'color-box'} style={style}>
            {isActive && (<ColorInfoBox
                colorValue={complementaryValue}
                handleTextContrast={handleTextContrast}
                setIsActive={setIsActive}
                copied={copied}
                setCopied={setCopied}
                handleCopy={handleCopy}
            />)}
            {layoutSelected.name !== 'Swiss Geometric' && <div className='colorSpecBox'>
                <p className='colorName'
                    style={{ color: handleTextContrast(complementaryValue), textAlign: 'center' }}
                >
                    {!complementaryValue ? ('Empty Value') : (names.ntc[0].name)}
                </p>
                <CardButtons
                    setIsActive={setIsActive}
                    handleTextContrast={handleTextContrast}
                    colorValue={complementaryValue}
                    handleCopy={handleCopy}
                    copied={copied}
                    id={id}
                    handleRemoveCard={handleRemoveCard}
                    handleAddCard={handleAddCard}
                    cardTotal={cardTotal}
                    handleAddHover={handleAddHover}
                    handleRemoveHover={handleRemoveHover}
                    layoutSelected={layoutSelected.name}
                />
                <p className='hexValue'
                    style={{ color: handleTextContrast(complementaryValue) }}
                >
                    {complementaryValue.toUpperCase()}
                </p>

            </div>}

            {layoutSelected.name === 'Swiss Geometric' && <div className='flex flex-col gap-14 justify-center items-center'>
                <p className='flex absolute'
                    style={{ color: handleTextContrast(complementaryValue) }}
                >
                    {complementaryValue.toUpperCase()}
                </p>
                <CardButtons
                    setIsActive={setIsActive}
                    handleTextContrast={handleTextContrast}
                    colorValue={complementaryValue}
                    handleCopy={handleCopy}
                    copied={copied}
                    id={id}
                    handleRemoveCard={handleRemoveCard}
                    handleAddCard={handleAddCard}
                    cardTotal={cardTotal}
                    handleAddHover={handleAddHover}
                    handleRemoveHover={handleRemoveHover}
                    layoutSelected={layoutSelected.name}
                />
            </div>}
        </div >
    )
}

export default ComplementaryBox