import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Sidebar() {
    const [darkMode, setDarkMode] = useState(false)

    function handleChangeDarkMode({ target: { checked, value }}) {
        setDarkMode(checked)
    }


    return (
        <div className="sidebar">
            <Menu title="Library">
                <>
                    <MenuItem
                        label="My Books"
                        icon="./images/play-icon.png"
                        hasBadge
                        badgeValue={15}
                    />
                    <MenuItem
                        label="Add New Books"
                        icon="./images/plus-icon.png"
                    />
                </>
            </Menu>
            <Menu title="Settings">
                <MenuItem
                    label="Dark Mode"
                    icon="./images/dark-mode-icon.png"
                    hasSwitch
                    switchValue={darkMode}
                    onClick={handleChangeDarkMode}
                />
            </Menu>
        </div>
    )
}

function Menu({ title, children }) {
    return (
        <div>
            <h2>{title}</h2>
            <div className="sidebar-menu">
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    )
}

function MenuItem(props) {
    const {
        label,
        hasBadge = false,
        badgeValue,
        hasSwitch = false,
        switchValue = false,
        icon,
        onClick = () => []
    } = props

    return <li>
        <div className="menu-inner">
            <img src={icon} />
            <span>{label}</span>
            {hasBadge && <span className="badge">{badgeValue}</span>}
            {hasSwitch && <Form.Check
                type="switch"
                id="dark-mode-switch"
                className="dark-mode-switch"
                checked={switchValue}
                onChange={onClick}
            />}
        </div>
    </li>
}
