import React, { useState } from 'react'
import { AuthProvider } from './src/context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './src/components/ProtectedLayout/index'
import Chat from './src/Chat'


function Rotas() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>

                <Route path='/chatee'>
                        <ProtectedLayout>
                            <Chat/>
                        </ProtectedLayout>
                    </Route>

                    <Route path='/login'>

                    </Route>

                    
                </Routes>
            </BrowserRouter>

        </AuthProvider>
    )
}