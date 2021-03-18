import axios from 'axios'
import React, { useEffect } from 'react'
import AppWrapper from '../Common/AppWrapper'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import AppContent from '../Common/AppContent'

export default function Main() {

    useEffect(() => {
        
    }, [])


    return (
        <div className="app-container">
            <Sidebar />
            <AppWrapper>
                <Header />
                <AppContent />
            </AppWrapper>
        </div>
    )
}
