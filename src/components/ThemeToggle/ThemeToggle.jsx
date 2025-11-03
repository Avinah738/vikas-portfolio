import './ThemeToggle.css'
import { useEffect, useState } from 'react'

export default function ThemeToggle(){
    const [dark, setDark] = useState(false)
    useEffect(()=>{
        const saved = localStorage.getItem('theme-dark') === 'true'
        setDark(saved)
        if(saved) document.documentElement.classList.add('theme-dark')
    },[])
    const onToggle = ()=>{
        const next = !dark
        setDark(next)
        localStorage.setItem('theme-dark', String(next))
        document.documentElement.classList.toggle('theme-dark', next)
    }
    return (
        <button className="theme-toggle" onClick={onToggle} aria-label="Toggle dark mode">
            {dark ? '☀️' : '🌙'}
        </button>
    )
}
