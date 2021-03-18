import React from 'react'
import cn from 'classnames'

export default function Header() {

    return <div className="app-header">
        <div className="header-title">
            <h2>Book Library</h2>
        </div>
        <div className="header-actions">
            <HeaderAction
                icon="./images/grid-view-icon.png"
                isActive={true}
                onClick={() => []}
            />
            <HeaderAction
                icon="./images/list-view-icon.png"
                isActive={false}
                onClick={() => []}
            />
            <HeaderAction
                icon="./images/search-icon.png"
                isActive
                onClick={() => []}
            />
        </div>
    </div>
}

function HeaderAction({ icon, isActive = false}) {
    return <div className={cn("header-action", { "has-bg": isActive })}>
        <img src={icon} />
    </div>
}