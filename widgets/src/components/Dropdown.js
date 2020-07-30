import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        // 이벤트 버블링이 일어나는 순서는 addEventListner로 붙혀준 이벤트 먼저 일어난 후에
        // 리엑트의 이벤트가 실행됨. 이해가 안되면 Dropdown 컴포넌트 내부의 모든 click 이벤트에
        // log 붙여서 실행순서를 확인해보자
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick)

        // cleanUp Func :디펜던시 argument로 빈 배열을 넘겨줬기 때문에 return을
        // 클린업 함수로 사용할 수 있음
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
        // Empty Array Dependency works only once when its component initially rendered
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