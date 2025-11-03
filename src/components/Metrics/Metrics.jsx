import './Metrics.css'
import { profile } from '../../data/profile'

export default function Metrics(){
    const items = [
        { value: profile.youtube.totalSubscribers, label: 'Total Subscribers' },
        { value: profile.youtube.totalViews, label: 'Total Views' },
        { value: '5+ years', label: 'Content Experience' }
    ]
    return (
        <div>
            <h2 className="section__title">Highlights</h2>
            <div className="metrics">
                {items.map((m,i)=>(
                    <div key={i} className="metric card">
                        <div className="metric__value">{m.value}</div>
                        <div className="metric__label">{m.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
