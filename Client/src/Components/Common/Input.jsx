import React, {forwardRef} from 'react'


const Input = ({
    className = "",
    placeholder = "",
    type = "",
    ...prop
}, ref) => {
  return (
    <input type={type} placeholder={placeholder} className={` ${className}`} {...prop} ref={ref} />
  )
}

export default forwardRef(Input)
