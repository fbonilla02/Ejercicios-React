import React from "react";


export default function Input({label, ...rest}) {
  return (
    <div>
    <label>{label}</label>
    <input {...rest}/>
    </div>
  )
}
