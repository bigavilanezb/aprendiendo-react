import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'bigavilanezb00',
        name: 'Bryan Gavilanez Bacilio',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdesz',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]
export function App() {  
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                ))
            }            
        </section >
    )
}