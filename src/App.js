import './App.css';
import Content from './Content'
import { useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import tinycolor from "tinycolor2"
import Footer from './Footer';

function App() {
  const handleRandomHex = () => {
    let hex = '#'
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * 15)
      hex += values[randomIndex]
    }
    return hex
  }
  const [color, setColor] = useState(handleRandomHex());

  const handleConvertToRGB = (color) => {
    if (color.length === 4 || color.length === 7) {
      const longHex = color.length === 4 ? `#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}` : color
      const rgb = longHex.replace('#', '').match(/.{2}/g).map(h => parseInt(h, 16))
      return rgb
    } else {
      return [0, 0, 0]
    }
  }

  const handleComplementary = (rgbColor) => {
    const complementaryValue = rgbColor.map(c => 255 - c)
    const hex = `#${complementaryValue.map(c => c.toString(16).padStart(2, '0')).join('')}`
    return hex
  }

  const handleColorName = (color) => {
    if (color.length === 7 || color.length === 4) {
      const namer = require('color-namer')
      const names = namer(color)
      const name = names.ntc[0].name
      return name
    }
    else {
      return null
    }
  }

  const [complementaryValue, setComplementaryValue] = useState(handleComplementary(handleConvertToRGB(color)))
  const [colorName, setColorName] = useState(handleColorName(color))

  const handleChange = (e) => {
    e.preventDefault()
  }

  const [isPickerVisible, setPickerVisible] = useState(false)

  const handleFocus = () => {
    setPickerVisible(true)
  }
  const handleBlur = () => setPickerVisible(false)

  const handleTextContrast = (color) => {
    let longHex = color.length === 4
      ? `#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}` : color

    if (longHex.length === 7) {
      const rgb = longHex.replace('#', '').match(/.{2}/g).map(c => parseInt(c, 16))
      const [r, g, b] = rgb.map(c => c / 255)
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
      return luminance > 0.5 ? '#000000' : '#FFFFFF'
    }
  }

  const handleCardsValue = (color) => {
    const monochromatic = tinycolor(color).monochromatic()
    const triadColors = tinycolor(color).triad()
    const tetradColors = tinycolor(color).tetrad()
    const tetradIntermediate = tetradColors[1].clone()
    tetradColors.push(tetradIntermediate.spin(45))

    const analogous1 = tinycolor(color).spin(-30).toString()
    const analogous2 = tinycolor(color).spin(30).toString()
    const analogous3 = tinycolor(color).spin(-60).toString()
    const analogous4 = tinycolor(color).spin(60).toString()

    const splitComplementary1 = tinycolor(color).spin(150).toString()
    const splitComplementary2 = tinycolor(color).spin(210).toString()


    return {
      monochromatic: monochromatic.slice(1).map(m => m.toHexString()),
      triad: triadColors.slice(1).map(t => t.toHexString()),
      tetrad: tetradColors.slice(1).map(t => t.toHexString()),
      analogous: [analogous1, analogous2, analogous3, analogous4],
      splitComplementary1: splitComplementary1,
      splitComplementary2: splitComplementary2
    }
  }

  const handleComplementaryScheme = (color, cardCount) => {
    let interpolationValue = 180 / (cardCount - 1)
    const interpolationChange = interpolationValue
    const complementaryvalues = []
    for (let i = 0; i < cardCount - 1; i++) {
      complementaryvalues.push(tinycolor(color).spin(interpolationValue).toString())
      interpolationValue += interpolationChange
    }
    return complementaryvalues
  }

  const [copied, setCopied] = useState(false)

  const handleCopy = async (color) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to Copy: ', err)
    }

  }

  const [isRadioActive, setIsRadioActive] = useState(false)
  const [isLayoutActive, setIsLayoutActive] = useState(false)

  return (
    <div className='app'>
      <Header />
      <NavBar
        setColor={setColor}
        setColorName={setColorName}
        handleColorName={handleColorName}
        handleRandomHex={handleRandomHex}
        setIsRadioActive={setIsRadioActive}
        setIsLayoutActive={setIsLayoutActive}
      />
      <Content
        color={color}
        setColor={setColor}
        handleChange={handleChange}
        colorName={colorName}
        setColorName={setColorName}
        handleColorName={handleColorName}
        setComplementaryValue={setComplementaryValue}
        handleComplementary={handleComplementary}
        handleConvertToRGB={handleConvertToRGB}
        complementaryValue={complementaryValue}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        isPickerVisible={isPickerVisible}
        handleTextContrast={handleTextContrast}
        handleCardsValue={handleCardsValue}
        handleCopy={handleCopy}
        copied={copied}
        setCopied={setCopied}
        isRadioActive={isRadioActive}
        setIsRadioActive={setIsRadioActive}
        isLayoutActive={isLayoutActive}
        setIsLayoutActive={setIsLayoutActive}
        handleComplementaryScheme={handleComplementaryScheme}
      />
      <Footer />
    </div>
  );
}

export default App;
