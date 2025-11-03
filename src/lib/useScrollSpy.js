import { useEffect, useState } from 'react'

export default function useScrollSpy(ids = []){
    const [activeId, setActiveId] = useState(ids[0] || null)
    useEffect(()=>{
        const observers = []
        ids.forEach(id=>{
            const el = document.querySelector(id)
            if(!el) return
            const obs = new IntersectionObserver(([entry])=>{
                if(entry.isIntersecting){
                    setActiveId(id)
                }
            }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 })
            obs.observe(el)
            observers.push(obs)
        })
        return ()=> observers.forEach(o=>o.disconnect())
    }, [ids])
    return activeId
}
