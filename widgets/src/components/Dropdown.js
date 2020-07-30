import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        // 이벤트 버블링이 일어나는 순서는 addEventListner로 붙혀준 이벤트 먼저 일어난 후에
        // 리엑트의 이벤트가 실행됨. 이해가 안되면 Dropdown 컴포넌트 내부의 모든 click 이벤트에
        // log 붙여서 실행순서를 확인해보자
        document.body.addEventListener('click', (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false)
        })
        console.log('what')
    }, [])


    const renderedOption = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className='item'
                onClick={() => { onSelectedChange(option) }}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>Select a Color</label>
                <div
                    onClick={() => { setOpen(!open) }}
                    className={`ui selection dropdown ${open ? 'visible active' : ""}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOption}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Dropdown;