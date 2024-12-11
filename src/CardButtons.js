import React from 'react'
import { useRef } from 'react'
import { IoInformationOutline } from 'react-icons/io5'
import { IoClipboardOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoDuplicateOutline } from 'react-icons/io5'

const CardButtons = ({ setIsActive, handleTextContrast, colorValue, handleCopy, copied, handleRemoveCard, id, cardTotal, handleAddCard, handleAddHover, handleRemoveHover }) => {

    const background = () => {
        return handleTextContrast(colorValue) === '#000000' ? ('rgba(0,0,0,0.05)') : ('rgba(255,255,255,0.3)')
    }

    const buttonRef = useRef(null);

    const handleClick = (id) => {
        buttonRef.current.blur();
        handleAddCard(id)
        handleRemoveHover()
    }

    return (
        <div className="btnContainer">
            <div tabIndex={0} className="colorBtn" onClick={() => setIsActive(true)} style={{ '--hover-color': background() }}>
                <IoInformationOutline
                    key={1}
                    style={{ color: handleTextContrast(colorValue) }}
                    role='button'
                />
                <span className='tooltiptext'>Color Info</span>
            </div>

            <div tabIndex={0} className="colorBtn" style={{ '--hover-color': background() }} onClick={() => handleCopy(colorValue.toUpperCase())}>
                {copied ? 'Copied'
                    : <IoClipboardOutline
                        key={2}
                        style={{ color: handleTextContrast(colorValue) }}
                        role='button'
                    />}
                <span className='tooltiptext'>Copy Hex</span>
            </div>

            {id >= 0 && cardTotal <= 3 && <div tabIndex={0} className="colorBtn"
                style={{ '--hover-color': background() }}
                onClick={() => handleClick(id)}
                onMouseEnter={() => handleAddHover(id)}
                onMouseLeave={() => handleRemoveHover()}
                ref={buttonRef}
            >
                <IoDuplicateOutline
                    key={3}
                    style={{ color: handleTextContrast(colorValue) }}
                    role='button'
                />
                <span className='tooltiptext'>Add Card</span>
            </div>}
            {id >= 0 && cardTotal > 1 && <div role='button' type="button" tabIndex={0} className="colorBtn" style={{ '--hover-color': background() }} onClick={() => handleRemoveCard(id)}>
                <IoTrashOutline
                    key={4}
                    style={{ color: handleTextContrast(colorValue) }}
                />
                <span className='tooltiptext'>Collapse Card</span>
            </div>}
        </div>
    )
}

export default CardButtons