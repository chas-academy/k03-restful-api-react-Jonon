import React, { Component } from 'react'

const Button = props => (
    <button onClick={() => props.onClick()}>{props.title}</button>
)

export default Button;