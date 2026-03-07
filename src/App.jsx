import { useState, useEffect, useRef } from 'react'

const CheckIcon = ({ className = '' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
  </svg>
)

const ChevronDown = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
      {/* Outer vertebra ring */}
      <circle cx="20" cy="20" r="16" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="2.2" fill="none" />
      {/* Spinal canal */}
      <circle cx="20" cy="20" r="5" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.8" fill="none" opacity="0.7" />
      {/* Lateral masses */}
      <circle cx="5" cy="20" r="3.5" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.9" />
      <circle cx="35" cy="20" r="3.5" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.9" />
      {/* Transverse process bridges */}
      <path d="M8.5 20 L14 20" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <path d="M26 20 L31.5 20" stroke={color === 'white' ? '#fff' : `url(#${id})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      {/* Spinous process dots */}
      <circle cx="20" cy="4" r="2" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.5" />
      <circle cx="20" cy="36" r="2" fill={color === 'white' ? '#fff' : `url(#${id})`} opacity="0.5" />
    </svg>
  )
}

// Small gradient icon for chat avatars
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

// ─── NOTIFICATION CARDS ───
function NotificationCards() {
  const cards = [
    {
      icon: "📋",
      iconClass: "notif-card__icon--blue",
      label: "New Booking",
      labelClass: "notif-card__label--blue",
      title: "Initial Assessment - Physiotherapy",
      time: "2 minutes ago",
    },
    {
      icon: "💆",
      iconClass: "notif-card__icon--cyan",
      label: "New Booking",
      labelClass: "notif-card__label--cyan",
      title: "Sports Massage - 60 min",
      time: "8 minutes ago",
    },
    {
      icon: "⭐",
      iconClass: "notif-card__icon--green",
      label: "New Review",
      labelClass: "notif-card__label--green",
      title: "5-star Google Review received",
      time: "Just now",
    },
  ]

  return (
    <div className="notif-stack">
      {cards.map((card, i) => (
        <div key={i} className="notif-card">
          <div className="notif-card__header">
            <div className={`notif-card__icon ${card.iconClass}`}>{card.icon}</div>
            <span className={`notif-card__label ${card.labelClass}`}>{card.label}</span>
          </div>
          <div className="notif-card__title">{card.title}</div>
          <div className="notif-card__time">{card.time}</div>
        </div>
      ))}
    </div>
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

      <div className="hero__content">
        <div className="hero__badge">
          <div className="hero__badge-dot" />
          <span className="hero__badge-text">AI-Powered Patient Management</span>
        </div>

        <div className="hero__title-group">
          {/* Spine line above */}
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
          {/* Spine line below */}
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

        <p className="subtitle subtitle--center hero__subtitle">
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

        <NotificationCards />
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  )
}

// ─── PROBLEM ───
function Problem() {
  const stats = [
    { icon: "📱", stat: "62%", label: "of calls to clinics go unanswered" },
    { icon: "⏰", stat: "3hrs+", label: "average reply time to DMs" },
    { icon: "🚪", stat: "40%", label: "of no-shows never get chased" },
    { icon: "⭐", stat: "8%", label: "of happy patients leave reviews" },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2>Your front desk has <span className="gradient-text">blind spots.</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            Every missed message is a patient who went somewhere else.
          </p>
        </div>
        <div className="grid-4">
          {stats.map((s, i) => (
            <div key={i} className="card stat-card">
              <div className="stat-card__icon">{s.icon}</div>
              <div className="stat-card__number">{s.stat}</div>
              <div className="stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FEATURES ───
function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">Two Channels, One Brain</span>
          <h2>Voice AI + DM Management</h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            ATLAS covers both channels your patients use to reach you. Choose one, or combine them.
          </p>
        </div>

        <div className="grid-2">
          {/* Voice AI */}
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

          {/* DM Management */}
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

// ─── CONVERSATION DEMO ───
function ConversationDemo() {
  const messages = [
    { from: "patient", text: "Hi, I've been having lower back pain for about 2 weeks. Do you have availability this week?" },
    { from: "atlas", text: "Hi there! Sorry to hear about your back pain. I can help you get booked in. Quick question - is this a new injury, or something recurring?" },
    { from: "patient", text: "It started after lifting something at work. Never had it before." },
    { from: "atlas", text: "Got it - sounds like an acute mechanical injury. I'd recommend an initial assessment. We have Thursday at 10:30am or Friday at 2pm - which works?" },
    { from: "patient", text: "Thursday 10:30 works perfectly" },
    { from: "atlas", text: "Brilliant - you're booked for Thursday 10:30am, initial physiotherapy assessment. Wear comfortable clothing and arrive 5 mins early. See you then!" },
  ]

  return (
    <section className="section demo">
      <div className="demo__bg" />
      <div className="container--narrow" style={{ position: 'relative' }}>
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="eyebrow">See It In Action</span>
          <h2>Natural. Clinical. <span className="gradient-text">Effective.</span></h2>
          <p className="subtitle subtitle--center" style={{ marginTop: '16px' }}>
            From enquiry to booked appointment in under 2 minutes.
          </p>
        </div>

        <div className="phone">
          <div className="phone__header">
            <div className="phone__avatar"><AtlasAvatarIcon size={32} /></div>
            <div>
              <div className="phone__name">City Physio Clinic</div>
              <div className="phone__status">
                <div className="phone__status-dot" />
                ATLAS is online
              </div>
            </div>
          </div>
          <div className="phone__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg msg--${msg.from === 'patient' ? 'patient' : 'atlas'}`}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── HOW IT WORKS ───
function HowItWorks() {
  const steps = [
    { num: "01", title: "Patient reaches out", desc: "Via phone, Instagram, or Facebook. ATLAS responds in seconds.", color: "linear-gradient(135deg, #2563eb, #3b82f6)" },
    { num: "02", title: "ATLAS qualifies", desc: "Asks the right questions - injury type, urgency, location - tailored to your practice.", color: "linear-gradient(135deg, #3b82f6, #06b6d4)" },
    { num: "03", title: "Appointment booked", desc: "Checks real-time availability. Books into your calendar. You get notified.", color: "linear-gradient(135deg, #06b6d4, #22d3ee)" },
    { num: "04", title: "Reminders sent", desc: "24-hour and 1-hour reminders. Follows up if they go quiet.", color: "linear-gradient(135deg, #22d3ee, #2dd4bf)" },
    { num: "05", title: "Post-session follow-up", desc: "Checks how it went. Happy patients get a review link. Concerns get flagged to you.", color: "linear-gradient(135deg, #2dd4bf, #34d399)" },
  ]

  return (
    <section id="how-it-works" className="section">
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
            <div key={i} className="step">
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
  return (
    <section className="section">
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
            {[
              { name: "Physiotherapy", icon: "🦴" },
              { name: "Chiropractic", icon: "🔄" },
              { name: "Sports Rehab", icon: "🏃" },
              { name: "Osteopathy", icon: "🤲" },
              { name: "Podiatry", icon: "🦶" },
              { name: "Occupational Therapy", icon: "🧠" },
            ].map((s, i) => (
              <div key={i} className="card speciality-card">
                <div className="speciality-card__icon">{s.icon}</div>
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
    <section className="section live-chat">
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
    <section id="pricing" className="section">
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
    <section className="section">
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
  return (
    <section className="section cta">
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
      <ConversationDemo />
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
