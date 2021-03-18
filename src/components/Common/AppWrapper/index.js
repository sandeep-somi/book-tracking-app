import React from 'react'

export default function AppWrapper(props) {
    return <div className="app-content">
        {props.children}
    </div>
}