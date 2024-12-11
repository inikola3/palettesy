import React from 'react'
import { useState } from 'react'
import ColorInfoBox from './ColorInfoBox'
import CardButtons from './CardButtons'

const ComplementaryBox = ({ complementaryValue, handleTextContrast, handleCopy, copied, setCopied, id, handleRemoveCard, cardTotal, handleAddCard, handleAddHover, handleRemoveHover }) => {
    const style = {
        backgroundColor: `${complementaryValue}`
    }
    const namer = require('color-namer')
    const names = namer(complementaryValue)

    const [isActive, setIsActive] = useState(false)

    return (
        <div className='color-box' style={style}>
            {isActive && (<ColorInfoBox
                colorValue={complementaryValue}
                handleTextContrast={handleTextContrast}
                setIsActive={setIsActive}
                copied={copied}
                setCopied={setCopied}
                handleCopy={handleCopy}
            />)}
            <div className='colorSpecBox'>
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
                />
                <p className='hexValue'
                    style={{ color: handleTextContrast(complementaryValue) }}
                >
                    {complementaryValue.toUpperCase()}
                </p>

            </div>
        </div >
    )
}

export default ComplementaryBox