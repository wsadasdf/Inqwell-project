// JavaScript source code
import SButton from './SButton';
import { useState, useEffect } from 'react'


//not implemented yet.
const onClick = () => {
    
}

//not used yet.
const mouseEnter = () => {

}

const Header = ({ click, onHov, isHovering }) => {

    return (
        <div className = 'mainHeader'>
            <header >
                <h1>
                    Inqwell< SButton onClick={click} onMouseEnter={onHov} hovering={isHovering} />
                </h1>
                
            </header>
            
        </div>
    )
    
}
export default Header