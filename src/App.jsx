import { useState, useEffect, useRef } from 'react'

// ─── HOOKS ───
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

// ─── UTILITY ICONS ───
const CheckIcon = ({ className = '', style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
  </svg>
)

const ChevronDown = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const IconX = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ─── CLINICAL SVG ICONS ───
const IconClipboard = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
)

const IconCalendarCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
)

const IconStar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const IconSpine = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
    <ellipse cx="12" cy="4" rx="4" ry="2" />
    <ellipse cx="12" cy="9.5" rx="4.5" ry="2.2" />
    <ellipse cx="12" cy="15" rx="4" ry="2" />
    <ellipse cx="12" cy="20" rx="3.5" ry="1.8" />
    <line x1="12" y1="6" x2="12" y2="7.3" />
    <line x1="12" y1="11.7" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12" y2="18.2" />
  </svg>
)

const IconAdjust = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
    <path d="m7.05 7.05 1.4 1.4M15.55 15.55l1.4 1.4M7.05 16.95l1.4-1.4M15.55 8.45l1.4-1.4" />
  </svg>
)

const IconActivity = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const IconHand = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 11V6a2 2 0 0 0-4 0" />
    <path d="M14 10V4a2 2 0 0 0-4 0v2" />
    <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
    <path d="M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 13" />
  </svg>
)

const IconFoot = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0z" />
    <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0z" />
    <path d="M16 17h4" /><path d="M4 13h4" />
  </svg>
)

const IconBrain = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
  </svg>
)

// ─── LOGO ───
function AtlasIcon({ size = 36, color = 'gradient' }) {
  const id = `atlasGrad_${Math.random().toString(36).slice(2, 8)}`
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="16" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="2.2" fill="none" />
      <circle cx="20" cy="20" r="5" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.8" fill="none" opacity="0.7" />
      <circle cx="5" cy="20" r="3.5" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.9" />
      <circle cx="35" cy="20" r="3.5" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.9" />
      <path d="M8.5 20 L14 20" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <path d="M26 20 L31.5 20" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <circle cx="20" cy="4" r="2" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.5" />
      <circle cx="20" cy="36" r="2" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.5" />
    </svg>
  )
}

function AtlasAvatarIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avatarGrad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#avatarGrad)" />
      <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.8" fill="none" opacity="0.9" />
      <circle cx="20" cy="20" r="3.5" stroke="white" strokeWidth="1.4" fill="none" opacity="0.6" />
      <circle cx="10.5" cy="20" r="2.5" fill="white" opacity="0.9" />
      <circle cx="29.5" cy="20" r="2.5" fill="white" opacity="0.9" />
      <path d="M13 20 L16.5 20" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <path d="M23.5 20 L27 20" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function Logo() {
  return (
    <div className="logo">
      <AtlasIcon size={36} />
      <span className="logo__text">ATLAS</span>
    </div>
  )
}

// ─── SPINE BACKGROUND DECORATION ───
function SpineDecoration({ side = 'left' }) {
  return (
    <svg className={`spine-deco spine-deco--${side}`} viewBox="0 0 60 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <g key={i} opacity={0.035 + (i % 3) * 0.01}>
          <ellipse cx="30" cy={40 + i * 80} rx="18" ry="10" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="30" cy={40 + i * 80} r="4" stroke="currentColor" strokeWidth="0.6" />
          {i < 6 && <line x1="30" y1={50 + i * 80} x2="30" y2={70 + i * 80} stroke="currentColor" strokeWidth="0.6" />}
          <line x1="12" y1={40 + i * 80} x2="6" y2={38 + i * 80} stroke="currentColor" strokeWidth="0.6" />
          <line x1="48" y1={40 + i * 80} x2="54" y2={38 + i * 80} stroke="currentColor" strokeWidth="0.6" />
        </g>
      ))}
    </svg>
  )
}

// ─── NAV ───
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Logo />
        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#pricing" className="btn btn--primary btn--sm nav__mobile-cta" onClick={closeMenu}>Get Started</a>
        </div>
        <a href="#pricing" className="btn btn--primary btn--sm nav__desktop-cta">Get Started</a>
        <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`nav__burger-line ${menuOpen ? 'nav__burger-line--open' : ''}`} />
          <span className={`nav__burger-line ${menuOpen ? 'nav__burger-line--open' : ''}`} />
          <span className={`nav__burger-line ${menuOpen ? 'nav__burger-line--open' : ''}`} />
        </button>
      </div>
      {menuOpen && <div className="nav__overlay" onClick={closeMenu} />}
    </nav>
  )
}

// ─── HERO PHONE MOCKUP ───
function HeroPhone() {
  const messages = [
    { from: 'patient', text: "Hi, I've had lower back pain for about 2 weeks. Any availability?" },
    { from: 'atlas', text: "Hi! Sorry to hear that. Is this a new injury, or something recurring?" },
    { from: 'patient', text: "New - started after lifting at work." },
    { from: 'atlas', text: "I'd recommend an initial assessment. Thursday 10:30am or Friday 2pm work?" },
  ]

  const [phase, setPhase] = useState(0)
  const totalPhases = messages.length * 2

  useEffect(() => {
    let timer
    if (phase === 0) {
      timer = setTimeout(() => setPhase(1), 800)
    } else if (phase % 2 === 1) {
      timer = setTimeout(() => setPhase(phase + 1), 1300)
    } else if (phase < totalPhases) {
      timer = setTimeout(() => setPhase(phase + 1), 1800)
    } else {
      timer = setTimeout(() => setPhase(0), 5000)
    }
    return () => clearTimeout(timer)
  }, [phase, totalPhases])

  const visibleCount = Math.floor(phase / 2)
  const showTyping = phase % 2 === 1 && phase <= totalPhases

  return (
    <div className="hero-phone">
      <div className="hero-phone__notch" />
      <div className="hero-phone__header">
        <div className="hero-phone__avatar"><AtlasAvatarIcon size={28} /></div>
        <div>
          <div className="hero-phone__name">City Physio Clinic</div>
          <div className="hero-phone__status">
            <span className="hero-phone__status-dot" />
            ATLAS is online
          </div>
        </div>
      </div>
      <div className="hero-phone__messages">
        {messages.slice(0, visibleCount).map((msg, i) => (
          <div key={i} className={`hero-phone__msg hero-phone__msg--${msg.from}`}>
            {msg.text}
          </div>
        ))}
        {showTyping && (
          <div className="hero-phone__typing">
            <span /><span /><span />
          </div>
        )}
      </div>
    </div>
  )
}

// ─── HERO FLOATING TOASTS ───
function HeroToasts() {
  const toasts = [
    { icon: <IconClipboard className="hero-toast__svg" />, text: "New booking confirmed", color: 'blue' },
    { icon: <IconStar className="hero-toast__svg" />, text: "5-star review received", color: 'green' },
    { icon: <IconCalendarCheck className="hero-toast__svg" />, text: "Reminder sent automatically", color: 'cyan' },
  ]
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const startTimer = setTimeout(() => setActive(0), 2000)
    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (active < 0) return
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % toasts.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [active >= 0])

  return (
    <div className="hero-toasts">
      {toasts.map((toast, i) => (
        <div key={i} className={`hero-toast hero-toast--${toast.color} hero-toast--pos${i} ${active === i ? 'hero-toast--visible' : ''}`}>
          {toast.icon}
          <span>{toast.text}</span>
        </div>
      ))}
    </div>
  )
}

// ─── HERO ───
function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>
      <SpineDecoration side="left" />

      <div className="hero__split">
        <div className="hero__text">
          <div className="hero__badge">
            <div className="hero__badge-dot" />
            <span className="hero__badge-text">AI-Powered Patient Management</span>
          </div>

          <div className="hero__title-group">
            <div className="hero__spine">
              <div className="hero__spine-dot" />
              <div className="hero__spine-line" />
              <div className="hero__spine-dot hero__spine-dot--lg" />
              <div className="hero__spine-line hero__spine-line--short" />
            </div>
            <h1 className="hero__title">
              <span className="hero__title-letter">A</span>
              <span className="hero__title-letter">T</span>
              <span className="hero__title-letter">L</span>
              <span className="hero__title-letter">A</span>
              <span className="hero__title-letter">S</span>
            </h1>
            <div className="hero__spine">
              <div className="hero__spine-line hero__spine-line--short" />
              <div className="hero__spine-dot hero__spine-dot--lg" />
              <div className="hero__spine-line" />
              <div className="hero__spine-dot" />
            </div>
          </div>

          <div className="hero__tagline">
            <span className="gradient-text">Your first point of contact.</span>
          </div>

          <p className="subtitle hero__subtitle">
            AI-powered patient intake, appointment booking, and follow-up for physio clinics,
            chiropractors, and clinical practices. Never miss a patient enquiry again.
          </p>

          <div className="hero__actions">
            <a href="#pricing" className="btn btn--primary">See Plans</a>
            <a href="#how-it-works" className="btn btn--outline">How It Works</a>
          </div>

          <div className="hero__proof">
            {["No manual follow-ups", "Set up in 48 hours", "Cancel anytime"].map((t, i) => (
              <div key={i} className="hero__proof-item">
                <CheckIcon className="hero__proof-check" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <HeroPhone />
          <HeroToasts />
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  )
}

// ─── PROBLEM (Before / After comparison) ───
function Problem() {
  const [ref, visible] = useInView()
  const without = [
    { icon: <IconX className="compare__x" />, text: "Phone rings mid-session - goes straight to voicemail" },
    { icon: <IconX className="compare__x" />, text: "Instagram DMs sit unread until you finish for the day" },
    { icon: <IconX className="compare__x" />, text: "No-shows cost you revenue - no reminder system in place" },
    { icon: <IconX className="compare__x" />, text: "Satisfied patients leave without being asked to review" },
  ]
  const withAtlas = [
    { icon: <CheckIcon className="compare__check" />, text: "Every call answered instantly, 24/7 - booking confirmed" },
    { icon: <CheckIcon className="compare__check" />, text: "DMs replied to in under 60 seconds, day and night" },
    { icon: <CheckIcon className="compare__check" />, text: "Automated reminders 24h and 1h before - no-shows drop" },
    { icon: <CheckIcon className="compare__check" />, text: "Review requests sent after every appointment automatically" },
  ]

  return (
    <section ref={ref} className={`section ${visible ? 'in-view' : ''}`}>
      <SpineDecoration side="right" />
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">The Reality</span>
          <h2>Your front desk has <span className="gradient-text">blind spots.</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            Every missed message is a patient who went somewhere else.
          </p>
        </div>
        <div className="compare">
          <div className="compare__side compare__side--without">
            <div className="compare__label compare__label--without">Without ATLAS</div>
            {without.map((item, i) => (
              <div key={i} className="compare__item compare__item--without" style={{ animationDelay: `${i * 120}ms` }}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="compare__side compare__side--with">
            <div className="compare__label compare__label--with">With ATLAS</div>
            {withAtlas.map((item, i) => (
              <div key={i} className="compare__item compare__item--with" style={{ animationDelay: `${(i * 120) + 400}ms` }}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FEATURES ───
function Features() {
  const [ref, visible] = useInView()
  return (
    <section ref={ref} id="features" className={`section ${visible ? 'in-view' : ''}`}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">Two Channels, One Brain</span>
          <h2>Voice AI + DM Management</h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            ATLAS covers both channels your patients use to reach you. Choose one, or combine them.
          </p>
        </div>

        <div className="grid-2">
          <div className="feature-card feature-card--voice">
            <div className="feature-card__glow" style={{ background: 'rgba(37,99,235,0.06)' }} />
            <div style={{ position: 'relative' }}>
              <div className="feature-card__icon feature-card__icon--voice">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3>Voice AI</h3>
              <p>An AI receptionist that answers your phone 24/7. Handles enquiries, books appointments, and sounds natural - patients won't know the difference.</p>
              <ul className="feature-list">
                {[
                  "Answers calls instantly - no hold music, no voicemail",
                  "Understands clinical context - injury types, urgency, services",
                  "Books directly into your calendar - integrates with Cliniko and Acuity",
                  "Transfers to you when needed - seamless handoff",
                  "After-hours coverage - never miss a call again",
                ].map((item, i) => (
                  <li key={i} className="feature-list__item">
                    <CheckIcon className="feature-list__check feature-list__check--cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="feature-card feature-card--dm">
            <div className="feature-card__glow" style={{ background: 'rgba(6,182,212,0.06)' }} />
            <div style={{ position: 'relative' }}>
              <div className="feature-card__icon feature-card__icon--dm">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3>DM Management</h3>
              <p>Handles Instagram and Facebook DMs around the clock. Qualifies patients, answers questions, and books them in - all through the conversation.</p>
              <ul className="feature-list">
                {[
                  "Instant replies to every DM - day and night",
                  "Qualifies patients with the right clinical questions",
                  "Handles pricing, location, parking, and FAQ enquiries",
                  "Books appointments without leaving the chat - syncs with Cliniko and Acuity",
                  "Escalates complex cases to you with full context",
                ].map((item, i) => (
                  <li key={i} className="feature-list__item">
                    <CheckIcon className="feature-list__check feature-list__check--blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── HOW IT WORKS ───
function HowItWorks() {
  const [ref, visible] = useInView()
  const steps = [
    { num: "01", title: "Patient reaches out", desc: "Via phone, Instagram, or Facebook. ATLAS responds in seconds.", color: "linear-gradient(135deg, #2563eb, #3b82f6)" },
    { num: "02", title: "ATLAS qualifies", desc: "Asks the right questions - injury type, urgency, location - tailored to your practice.", color: "linear-gradient(135deg, #3b82f6, #06b6d4)" },
    { num: "03", title: "Appointment booked", desc: "Checks real-time availability. Books into your calendar. You get notified.", color: "linear-gradient(135deg, #06b6d4, #22d3ee)" },
    { num: "04", title: "Reminders sent", desc: "24-hour and 1-hour reminders. Follows up if they go quiet.", color: "linear-gradient(135deg, #22d3ee, #2dd4bf)" },
    { num: "05", title: "Post-session follow-up", desc: "Checks how it went. Happy patients get a review link. Concerns get flagged to you.", color: "linear-gradient(135deg, #2dd4bf, #34d399)" },
  ]

  return (
    <section ref={ref} id="how-it-works" className={`section ${visible ? 'in-view' : ''}`}>
      <div className="container--narrow">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">The Patient Journey</span>
          <h2>From first message to <span className="gradient-text">five-star review.</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            ATLAS manages the full lifecycle. You just deliver the treatment.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="step__indicator">
                <div className="step__num" style={{ background: step.color }}>{step.num}</div>
                {i < steps.length - 1 && <div className="step__line" />}
              </div>
              <div className="step__content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── BUILT FOR CLINICS ───
function BuiltForClinics() {
  const [ref, visible] = useInView()
  const specialities = [
    { name: "Physiotherapy", icon: <IconSpine className="speciality-card__svg" />, color: '#2563eb' },
    { name: "Chiropractic", icon: <IconAdjust className="speciality-card__svg" />, color: '#3b82f6' },
    { name: "Sports Rehab", icon: <IconActivity className="speciality-card__svg" />, color: '#06b6d4' },
    { name: "Osteopathy", icon: <IconHand className="speciality-card__svg" />, color: '#22d3ee' },
    { name: "Podiatry", icon: <IconFoot className="speciality-card__svg" />, color: '#2dd4bf' },
    { name: "Occupational Therapy", icon: <IconBrain className="speciality-card__svg" />, color: '#34d399' },
  ]

  return (
    <section ref={ref} className={`section ${visible ? 'in-view' : ''}`}>
      <div className="container">
        <div className="clinics-grid">
          <div className="clinics-left">
            <span className="eyebrow">Purpose-Built</span>
            <h2 style={{ marginBottom: '20px' }}>
              Built for clinical practices. <span className="gradient-text">Not generic chatbots.</span>
            </h2>
            <p className="subtitle">
              ATLAS understands clinical language, injury types, treatment pathways, and urgency levels.
              Your patients get intelligent, contextual responses - not scripted templates.
            </p>
            <ul className="check-list">
              {[
                "Trained on clinical intake workflows",
                "Understands urgency and triage priorities",
                "Speaks professionally - no informal chat",
                "Integrates with Cliniko, Acuity, Google Calendar",
                "GDPR compliant - patient data stays secure",
              ].map((item, i) => (
                <li key={i} className="check-list__item">
                  <div className="check-list__icon"><CheckIcon /></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="speciality-grid">
            {specialities.map((s, i) => (
              <div key={i} className="card speciality-card" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="speciality-card__icon-wrap" style={{ background: `${s.color}15`, color: s.color }}>
                  {s.icon}
                </div>
                <div className="speciality-card__name">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SPEAK TO ATLAS (Interactive Chat) ───
function SpeakToAtlas() {
  const [ref, visible] = useInView()
  const [messages, setMessages] = useState([
    { from: 'atlas', text: "Hi there! Welcome to City Physio Clinic. I'm ATLAS, your AI patient assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => { scrollToBottom() }, [messages, typing])

  const suggestions = [
    "I've got a sore lower back",
    "What services do you offer?",
    "How much is an initial assessment?",
    "Do you take insurance?",
  ]

  const getResponse = (userMsg) => {
    const msg = userMsg.toLowerCase()
    if (msg.includes('back') || msg.includes('pain') || msg.includes('injury') || msg.includes('hurt') || msg.includes('sore')) {
      return "Sorry to hear that! I can help get you booked in. Is this a new injury, or something that's been bothering you for a while?"
    }
    if (msg.includes('new') || msg.includes('started') || msg.includes('recent') || msg.includes('just')) {
      return "Got it - for a new issue, I'd recommend an initial assessment so we can properly diagnose what's going on. We have availability Thursday at 10:30am and Friday at 2pm. Would either of those work for you?"
    }
    if (msg.includes('thursday') || msg.includes('friday') || msg.includes('10:30') || msg.includes('2pm') || msg.includes('works') || msg.includes('yes') || msg.includes('book')) {
      return "Brilliant - I've booked you in! You'll get a calendar invite shortly. Wear comfortable clothing and arrive 5 minutes early. Anything else I can help with?"
    }
    if (msg.includes('service') || msg.includes('offer') || msg.includes('what do you')) {
      return "We offer physiotherapy, sports rehabilitation, manual therapy, dry needling, and post-surgical rehab. Our team specialises in musculoskeletal conditions. Would you like to book an initial assessment?"
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('fee')) {
      return "An initial assessment is \u00a365, and follow-up sessions are \u00a350. We also accept most major health insurers including Aviva, Bupa, and VHI. Would you like to book in?"
    }
    if (msg.includes('insurance') || msg.includes('bupa') || msg.includes('aviva') || msg.includes('vhi')) {
      return "Yes, we're registered with most major insurers including Bupa, Aviva, VHI, and Laya. You can typically claim back the full cost. Just bring your policy number to your first appointment. Shall I book you in?"
    }
    if (msg.includes('where') || msg.includes('location') || msg.includes('address') || msg.includes('parking')) {
      return "We're at 14 Strand Road, Derry, BT48 7AB. There's free parking directly outside and we're a 2-minute walk from the bus station. Would you like to book an appointment?"
    }
    if (msg.includes('thank') || msg.includes('no') || msg.includes('that\'s all') || msg.includes('cheers')) {
      return "You're welcome! If you need anything else, just message us anytime. Have a great day!"
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hi! How can I help you today? Are you looking to book an appointment, or do you have a question about our services?"
    }
    return "I'd be happy to help with that! We specialise in physiotherapy and sports rehabilitation. Would you like to book an initial assessment, or do you have a specific question about our services?"
  }

  const handleSend = (text) => {
    const msgText = text || input.trim()
    if (!msgText) return
    setMessages(prev => [...prev, { from: 'user', text: msgText }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'atlas', text: getResponse(msgText) }])
    }, 1200 + Math.random() * 800)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const showSuggestions = messages.length <= 1 && !typing

  return (
    <section ref={ref} className={`section live-chat ${visible ? 'in-view' : ''}`}>
      <div className="live-chat__bg" />
      <div className="container--narrow" style={{ position: 'relative' }}>
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">Try It Yourself</span>
          <h2>Speak to <span className="gradient-text">ATLAS</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            Type a message as if you were a patient enquiring about a physio appointment.
          </p>
        </div>

        <div className="live-chat__window">
          <div className="live-chat__header">
            <div className="live-chat__header-left">
              <div className="live-chat__avatar"><AtlasAvatarIcon size={36} /></div>
              <div>
                <div className="live-chat__header-name">City Physio Clinic</div>
                <div className="live-chat__header-status">
                  <div className="live-chat__header-status-dot" />
                  ATLAS is online
                </div>
              </div>
            </div>
            <div className="live-chat__header-badge">LIVE DEMO</div>
          </div>

          <div className="live-chat__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`live-msg live-msg--${msg.from === 'user' ? 'user' : 'atlas'}`}>
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="live-chat__typing">
                <div className="live-chat__typing-dot" />
                <div className="live-chat__typing-dot" />
                <div className="live-chat__typing-dot" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showSuggestions && (
            <div className="live-chat__suggestions">
              {suggestions.map((s, i) => (
                <button key={i} className="live-chat__suggestion" onClick={() => handleSend(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="live-chat__input-area">
            <input
              className="live-chat__input"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={typing}
            />
            <button className="live-chat__send" onClick={() => handleSend()} disabled={typing || !input.trim()}>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PRICING ───
function Pricing() {
  const [ref, visible] = useInView()
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: "DM Management",
      desc: "Instagram + Facebook DMs with full lifecycle automation.",
      price: annual ? "252" : "297",
      features: [
        "Instagram + Facebook DM responses",
        "Patient qualification",
        "Appointment booking",
        "Confirmation + reminders",
        "Post-appointment follow-up",
        "Google Review generation",
        "No-show recovery",
        "Lapsed patient re-engagement",
      ],
      featured: false,
    },
    {
      name: "Voice + DM",
      desc: "The complete package. Phone + DMs, one AI brain.",
      price: annual ? "422" : "497",
      features: [
        "Everything in DM Management",
        "AI phone receptionist (24/7)",
        "Call handling + booking",
        "Voicemail transcription",
        "Seamless handoff to your team",
        "After-hours coverage",
        "Priority support",
        "Custom voice personality",
      ],
      featured: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Voice AI Only",
      desc: "AI receptionist for your phone line. Never miss a call.",
      price: annual ? "295" : "347",
      features: [
        "AI phone receptionist (24/7)",
        "Patient qualification via phone",
        "Appointment booking",
        "Call transfer to your team",
        "After-hours coverage",
        "Voicemail transcription",
        "Confirmation reminders",
        "Post-appointment follow-up",
      ],
      featured: false,
    },
  ]

  return (
    <section ref={ref} id="pricing" className={`section ${visible ? 'in-view' : ''}`}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '16px' }}>
          <span className="eyebrow">Pricing</span>
          <h2>Choose what fits your practice.</h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            All plans include setup, onboarding, and ongoing support. No hidden fees.
          </p>
        </div>

        <div className="pricing-toggle">
          <span className={`pricing-toggle__label ${!annual ? 'pricing-toggle__label--active' : ''}`}>Monthly</span>
          <div
            className={`pricing-toggle__switch ${annual ? 'pricing-toggle__switch--on' : ''}`}
            onClick={() => setAnnual(!annual)}
          >
            <div className="pricing-toggle__knob" />
          </div>
          <span className={`pricing-toggle__label ${annual ? 'pricing-toggle__label--active' : ''}`}>Annual</span>
          {annual && <span className="pricing-toggle__save">Save 15%</span>}
        </div>

        <div className="grid-3">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.featured ? 'pricing-card--featured' : 'pricing-card--default'}`}>
              {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}
              <div className="pricing-card__name">{plan.name}</div>
              <div className="pricing-card__desc">{plan.desc}</div>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">&#163;{plan.price}</span>
                <span className="pricing-card__period"> /month</span>
                <div className="pricing-card__setup">+ one-time &#163;500 setup fee</div>
              </div>
              <ul className="pricing-card__features">
                {plan.features.map((f, j) => (
                  <li key={j} className="pricing-card__feature">
                    <CheckIcon style={{ color: plan.featured ? '#22d3ee' : 'rgba(37,99,235,0.5)' }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`pricing-card__btn ${plan.featured ? 'pricing-card__btn--primary' : 'pricing-card__btn--outline'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <p className="pricing-note text-center">
          Setup includes connecting your channels, configuring ATLAS for your services, and going live within 48 hours.
        </p>
      </div>
    </section>
  )
}

// ─── FAQ ───
function FAQ() {
  const [ref, visible] = useInView()
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: "Will patients know they're talking to AI?", a: "ATLAS is conversational and natural. Most patients won't realise - and those who do appreciate the instant responses. If anyone asks to speak to a person, ATLAS hands off immediately." },
    { q: "How does it book into my calendar?", a: "ATLAS connects to your Google Calendar, Cliniko, or Acuity. It reads real-time availability and creates bookings in free slots. You see appointments appear on your phone like any other booking." },
    { q: "What if a patient asks something ATLAS can't handle?", a: "ATLAS escalates to you with the full conversation context. You pick up seamlessly - nothing is lost." },
    { q: "How long does setup take?", a: "48 hours from go-ahead to live. We handle everything. You just need a 30-minute onboarding call." },
    { q: "Can I customise what ATLAS says?", a: "Absolutely. ATLAS is configured with your services, pricing, location, FAQs, and tone of voice. It represents your practice, not a template." },
    { q: "Is patient data secure?", a: "Yes. ATLAS handles booking conversations only - no medical records. All data encrypted and GDPR compliant. DPA available on request." },
  ]

  return (
    <section ref={ref} className={`section ${visible ? 'in-view' : ''}`}>
      <div className="container--tight">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2>Common Questions</h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className="faq-item__question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <ChevronDown className={`faq-item__arrow ${open === i ? 'faq-item__arrow--open' : ''}`} />
              </button>
              {open === i && <div className="faq-item__answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ───
function FinalCTA() {
  const [ref, visible] = useInView()
  return (
    <section ref={ref} className={`section cta ${visible ? 'in-view' : ''}`}>
      <div className="cta__bg" />
      <div className="cta__glow" />
      <div className="container--narrow text-center" style={{ position: 'relative' }}>
        <h2 style={{ marginBottom: '24px' }}>
          Ready to stop missing <span className="gradient-text">patient enquiries?</span>
        </h2>
        <p className="subtitle subtitle--center" style={{ marginBottom: '40px', fontSize: '18px' }}>
          ATLAS is live in 48 hours. No contracts, no complexity. Just more patients booked and fewer missed messages.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#pricing" className="btn btn--primary">View Plans</a>
          <a href="mailto:kevin.flowstate@gmail.com" className="btn btn--outline">Book a Demo</a>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Logo />
        <div className="footer__links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="mailto:kevin.flowstate@gmail.com">Contact</a>
        </div>
        <div className="footer__credit">Powered by <span>Flowstate</span></div>
      </div>
    </footer>
  )
}

// ─── APP ───
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <BuiltForClinics />
      <SpeakToAtlas />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
