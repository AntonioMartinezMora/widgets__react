// import { render } from '@testing-library/react'
import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                return;
            }
         
          setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick)

        // clean up funtion to avoid errors if the ref is not displaying
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }

    }, []);

    const renderedOptions = options.map((option)=>{
        if(option.value === selected.value){
            return null
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={()=> onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div
                    onClick={()=> setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="tetx">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
