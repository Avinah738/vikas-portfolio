import './Education.css'
import { profile } from '../../data/profile'

export default function Education(){
    return (
        <div>
            <h2 className="section__title">Education & Languages</h2>
            <div className="grid edu">
                <div className="card">
                    <div className="edu__title">Education</div>
                    <ul className="clean edu__list">
                        {profile.education.map((e,idx)=>(
                            <li key={idx}>
                                <div className="edu__row">
                                    <span className="edu__level">{e.level}</span>
                                    <span className="edu__period">{e.period}</span>
                                </div>
                                <div className="edu__school">{e.school} — {e.place}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="card">
                    <div className="edu__title">Languages</div>
                    <ul className="clean edu__list">
                        {profile.languages.map((l,idx)=>(
                            <li key={idx} className="edu__lang">
                                <span>{l.name}</span>
                                <span className="badge">{l.level}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
