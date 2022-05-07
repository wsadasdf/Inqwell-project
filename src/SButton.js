

const SButton = ({ onClick, onMouseEnter, hovering }) => {
    const buttonCol =  { hovering } ? 'aqua' : 'green' 

    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter} style={{ backgroundColor: buttonCol }} className='signButton'>
            Sign in
        </button>
    )

}

export default SButton