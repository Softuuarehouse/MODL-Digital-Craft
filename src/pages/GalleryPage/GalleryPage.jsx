import { useState } from 'react'
import { useLang } from '../../i18n/LangContext'
import useInView from '../../hooks/useInView'
import './GalleryPage.css'

const IMG_SRCS = [
  '/gallery-urban.jpg',
  '/gallery-villa.jpg',
  '/gallery-hotel.jpg',
  '/gallery-interior.jpg',
  '/gallery-floorplan.jpg',
]
const CSS_CLS = [
  'gallery-card--feature',
  'gallery-card--tall',
  'gallery-card--tall-2',
  'gallery-card--wide',
  'gallery-card--panorama',
]

const AVATARS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDWBy2YkGjDVmGNlnxfsZkab5NUkPw6n3v_Ve050jh9BBCrCx2a0-_3Ld2YjH1MsluQSgL86phOHLxNT0IHlbx3mZWYJGG0cPqAAkmRw5GRsagEj6QzcJMIBbatafcGkpsWFsttRTLFO8JtKVZeAmldFowEbwoq7xUmJIVOAi4znExxOndWO9TbdlzyGVyZ0rvuJJydjYN3tF0iItP7rQP3FPTH2T3xlpWT1caH60WU52VJOV5qUzegPvppv98lBb4NdgNPeivvR8K8',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC4de3D7CcI_2kIkTVnmTCVh2j6fs2aZjIWfplcOhC8qewHNK6dxBO_T0icyul8U34rScPYULsjeaU6j7cDmoCBQ3Ao-nVwKIE91fFUrnJysx9HCVqC6EOE64zATnuMILzwW0DTStvOZivrpjlaaElLbTCkcmMymfjcfB6KoVF1guvBTuY6hLdOBln3KWhJSqcg49HLz-EFz7LYA4BZuAWgn2yur8V_ejd0RaAH7VztI2q1QB1O4sBClXyDOhstT_M9L45Xplmn3qEX',
]

export default function GalleryPage() {
  const { t } = useLang()
  const g = t.gallery
  const { ref, visible } = useInView(0.05)

  return (
    <div className="gallery page-enter">
      {/* Header */}
      <div className="gallery__header">
        <div className="gallery__header-top">
          <span className="gold-line" />
          <span className="section-eyebrow">{g.eyebrow}</span>
        </div>
        <h1 className="gallery__header-title">
          {g.title}<em>{g.titleEm}</em>
        </h1>
        <p className="gallery__header-desc">{g.desc}</p>
      </div>

      {/* Grid */}
      <div className="gallery__grid" ref={ref}>
        {g.works.map((work, i) => (
          <div key={i} className={`gallery-card ${CSS_CLS[i]} ${visible ? 'visible' : ''}`}>
            <div className="gallery-card__img-wrap">
              <img className="gallery-card__img" src={IMG_SRCS[i]} alt={work.title} loading="lazy" />
            </div>
            <div className="gallery-card__overlay" />
            <div className="gallery-card__content">
              <p className="gallery-card__tag">{work.tag}</p>
              <p className="gallery-card__date">{work.date}</p>
              <h2 className="gallery-card__title">{work.title}</h2>
              <p className="gallery-card__desc">{work.desc}</p>
              <span className="gallery-card__cta">{g.cta}</span>
            </div>
          </div>
        ))}

        {/* Study card */}
        <div className={`gallery-card gallery-card--study ${visible ? 'visible' : ''}`}>
          <div className="gallery-card__study-icon">◈</div>
          <h2 className="gallery-card__title">{g.studyTitle}</h2>
          <p className="gallery-card__desc">{g.studyDesc}</p>
          <div className="gallery-card__avatars">
            {AVATARS.map((src, i) => (
              <img key={i} className="gallery-card__avatar" src={src} alt="Team member" />
            ))}
            <div className="gallery-card__avatar-count">+4</div>
          </div>
        </div>
      </div>
    </div>
  )
}
