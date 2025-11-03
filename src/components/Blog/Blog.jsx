import './Blog.css'
import { posts, postsHi } from '../../data/blog'
import { useState } from 'react'
import { useI18n } from '../../i18n.jsx'

export default function Blog(){
    const { t, lang } = useI18n()
    const list = (lang === 'hi' && Array.isArray(postsHi) && postsHi.length) ? postsHi : posts

    return (
        <div>
            <h2 className="section__title">{t('blog')}</h2>
            <div className="blog">
                {list.map(p => <Post key={p.id} post={p} />)}
            </div>
        </div>
    )
}

function Post({post}){
    const { t } = useI18n()
    const [open, setOpen] = useState(false)

    return (
        <article className={`post card ${open ? 'post--expanded' : ''}`}>
            <div className="post__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            </div>
            <div className="post__head">
                <h3 className="post__title">{post.title}</h3>
                <div className="post__date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {new Date(post.date).toLocaleDateString()}
                </div>
            </div>
            <div className="post__summary">{post.summary}</div>
            {open && (
                <ul className="clean post__content">
                    {post.content.map((c,i)=> (
                        <li key={i} className="post__content-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                            <span>{c}</span>
                        </li>
                    ))}
                </ul>
            )}
            <button className="post__btn btn" onClick={()=>setOpen(v=>!v)}>
                {open ? (
                    <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        {t('readLess')}
                    </>
                ) : (
                    <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        {t('readMore')}
                    </>
                )}
            </button>
            <div className="post__tags">
                {post.tags.map((tg,i)=> (
                    <span className="post__tag" key={i}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                        </svg>
                        {tg}
                    </span>
                ))}
            </div>
        </article>
    )
}