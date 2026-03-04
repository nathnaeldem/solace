import { useState, useEffect } from 'react';
import {
  Info, Briefcase, Zap, MapPin, Mail,
  ChevronDown, ChevronRight, Phone as PhoneIcon, Send,
  Heart, Target, Users, Star, CheckCircle, Clock,
  Palette, Music, UtensilsCrossed, Activity, Dumbbell, Mic2, Gem,
  Stethoscope, Brain, MessageCircle, Globe,
  Mountain, Trees, Waves, Leaf, Flower2,
  Menu, X, Facebook, Instagram, Sparkles,
  BadgeCheck, HeartHandshake, Home as HomeIcon, Smile, Landmark,
  Star as StarIcon, ShieldCheck, ChevronRight as ChevronRightIcon,
  Building, Utensils
} from 'lucide-react';
import './index.css';

// ===== NAVBAR =====
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const links = [
    { label: 'About', id: 'about', icon: <Info size={15} /> },
    { label: 'Services', id: 'services', icon: <Briefcase size={15} /> },
    { label: 'Activities', id: 'activities', icon: <Zap size={15} /> },
    { label: 'Outings', id: 'outings', icon: <MapPin size={15} /> },
    { label: 'Contact', id: 'contact', icon: <Mail size={15} /> },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="navbar-logo" onClick={() => scrollTo('home')}>
            <div className="navbar-logo-icon" style={{ width: '120px', height: 'auto' }}>
              <img src="/logo.png" alt="Solace Springs Logo" />
            </div>
          </div>

          <div className="navbar-links">
            {links.map(l => (
              <a
                key={l.id}
                className="nav-link"
                onClick={() => scrollTo(l.id)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && scrollTo(l.id)}
              >
                <span className="nav-link-icon">{l.icon}</span>
                {l.label}
              </a>
            ))}
            <a
              className="nav-cta"
              onClick={() => scrollTo('contact')}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && scrollTo('contact')}
            >
              <PhoneIcon size={14} />
              Get In Touch
            </a>
          </div>

          <button className="navbar-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>
          <X size={20} />
        </button>
        {links.map(l => (
          <button key={l.id} className="mobile-nav-link" onClick={() => scrollTo(l.id)}>
            {l.icon}
            {l.label}
          </button>
        ))}
        <button className="mobile-nav-link" style={{ color: '#4ecdc4', fontWeight: 700 }} onClick={() => scrollTo('contact')}>
          <PhoneIcon size={18} />
          Get In Touch
        </button>
      </div>
    </>
  );
}

// ===== HERO =====
function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/hero_facility.png" alt="Solace Springs Facility" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-content">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Licensed Group Home &bull; Oregon
            </div>

            <h1 className="hero-title">
              A Place Called{' '}
              <span className="hero-title-accent">Home</span>,<br />
              A Life Full of{' '}
              <span className="hero-title-accent">Purpose</span>
            </h1>

            <p className="hero-description">
              Compassionate, person-centered care for developmentally disabled adults — empowering each resident to thrive, connect, and live with dignity.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                <PhoneIcon size={16} />
                Request a Tour
              </button>
              <button className="btn-outline-white" onClick={() => scrollTo('about')}>
                Learn More
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">24/7</div>
                <div className="hero-stat-label">Dedicated Support</div>
              </div>
              <div>
                <div className="hero-stat-value">10+</div>
                <div className="hero-stat-label">Activities Offered</div>
              </div>
              <div>
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">Person-Centered</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">
            <div className="hero-card-main">
              <img src="/hero_facility.png" alt="Solace Springs Residential Home" />
              <div className="hero-card-overlay">
                <div className="hero-overlay-title">Solace Springs Residential Home</div>
                <div className="hero-overlay-sub">Oregon City Area &bull; Licensed &amp; Certified</div>
              </div>
            </div>

            <div className="hero-float-badge hero-float-1">
              <div className="hero-float-icon" style={{ background: 'linear-gradient(135deg,#eef9f7,#d4f4ef)' }}>
                <ShieldCheck size={18} style={{ color: '#0f6b8e' }} />
              </div>
              <div>
                <div className="hero-float-val">Licensed</div>
                <div className="hero-float-sub">State of Oregon</div>
              </div>
            </div>

            <div className="hero-float-badge hero-float-2">
              <div className="hero-float-icon" style={{ background: 'linear-gradient(135deg,#fff8e8,#ffefc0)' }}>
                <Heart size={18} style={{ color: '#c88500' }} />
              </div>
              <div>
                <div className="hero-float-val">Caring Staff</div>
                <div className="hero-float-sub">Always Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" onClick={() => scrollTo('trust')}>
        <span>SCROLL</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}

// ===== TRUST BAR =====
function TrustBar() {
  const items = [
    { icon: <Landmark size={18} />, label: 'State of Oregon Licensed' },
    { icon: <HeartHandshake size={18} />, label: 'Person-Centered Care' },
    { icon: <Clock size={18} />, label: '24/7 Staff Support' },
    { icon: <ShieldCheck size={18} />, label: 'Safe & Nurturing Environment' },
    { icon: <Users size={18} />, label: 'Family Partnership' },
  ];

  return (
    <section className="trust-bar" id="trust">
      <div className="container">
        <div className="trust-bar-inner">
          {items.map((item, i) => (
            <div key={item.label} style={{ display: 'contents' }}>
              <div className="trust-item">
                <div className="trust-icon">{item.icon}</div>
                <span className="trust-label">{item.label}</span>
              </div>
              {i < items.length - 1 && <div className="trust-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ABOUT =====
function About() {
  const values = [
    { icon: <Heart size={18} style={{ color: '#0f6b8e' }} />, bg: '#eef9f7', title: 'Dignity & Respect', text: 'Every resident is treated with the utmost respect and individuality.' },
    { icon: <Target size={18} style={{ color: '#009f74' }} />, bg: '#edfaf5', title: 'Goal-Oriented', text: 'Personalized plans help each resident achieve meaningful milestones.' },
    { icon: <HomeIcon size={18} style={{ color: '#2dbdad' }} />, bg: '#eef8f7', title: 'Home-Like Setting', text: "A warm residential environment that truly feels like home." },
    { icon: <Globe size={18} style={{ color: '#5050cc' }} />, bg: '#f0f0ff', title: 'Community Inclusion', text: "Active participation in Oregon's vibrant communities and events." },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img">
              <img src="/activities_art.png" alt="Residents enjoying activities" />
            </div>
            <div className="about-badge">
              <div className="about-badge-icon">
                <Heart size={28} color="white" fill="white" />
              </div>
              <div className="about-badge-text">Compassionate Care<br />Every Single Day</div>
            </div>
            <div className="about-chip">
              <CheckCircle size={15} style={{ color: '#0f6b8e' }} />
              Oregon DHS Licensed Facility
            </div>
          </div>

          <div>
            <span className="section-label">
              <span className="section-label-dot" />
              Who We Are
            </span>
            <h2 className="section-title">
              More Than a Home —<br />
              A <span>Community</span> of Care
            </h2>
            <p className="section-subtitle">
              Solace Springs Residential Services LLC is a licensed group home dedicated to providing compassionate, individualized support for adults with developmental disabilities in Oregon. We believe every person deserves to live a full, purposeful, and connected life.
            </p>
            <p className="section-subtitle" style={{ marginTop: '14px' }}>
              Our highly trained caregivers work alongside residents, families, and support teams to craft environments where growth, joy, and independence flourish every day.
            </p>

            <div className="about-values">
              {values.map(v => (
                <div key={v.title} className="about-card">
                  <div className="about-card-icon" style={{ background: v.bg }}>{v.icon}</div>
                  <div className="about-card-title">{v.title}</div>
                  <div className="about-card-text">{v.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== SERVICES =====
function Services() {
  const services = [
    { icon: <Stethoscope size={26} />, cls: 'si-1', title: 'Health & Medical Support', text: "Comprehensive symptom management, medication administration, and coordination with healthcare providers to support each resident's wellbeing." },
    { icon: <Brain size={26} />, cls: 'si-2', title: 'Developmental Programs', text: 'Individualized support plans designed to build life skills, encourage independence, and celebrate every achievement — big or small.' },
    { icon: <Utensils size={26} />, cls: 'si-3', title: 'Nutrition & Cooking', text: 'Residents participate in meal planning and cooking activities, promoting healthy habits and giving a sense of accomplishment.' },
    { icon: <ShieldCheck size={26} />, cls: 'si-4', title: '24/7 Supervision & Safety', text: 'Round-the-clock staffing ensures every resident is safe, supported, and never alone when they need assistance.' },
    { icon: <MessageCircle size={26} />, cls: 'si-5', title: 'Family Communication', text: 'Regular updates, family meetings, and open communication keep loved ones informed and involved in care decisions.' },
    { icon: <Globe size={26} />, cls: 'si-6', title: 'Community Integration', text: 'We actively connect residents with their communities through outings, events, and social opportunities throughout Oregon.' },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label"><span className="section-label-dot" />What We Offer</span>
          <h2 className="section-title">Comprehensive <span>Residential Services</span></h2>
          <p className="section-subtitle">
            Every service we provide is rooted in dignity, empowerment, and a genuine commitment to improving the quality of life for every resident.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className={`service-icon ${s.cls}`}>{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-text">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ACTIVITIES =====
function Activities() {
  const activities = [
    { icon: <Palette size={20} />, label: 'Art Therapy' },
    { icon: <Music size={20} />, label: 'Music Therapy' },
    { icon: <UtensilsCrossed size={20} />, label: 'Cooking Classes' },
    { icon: <Activity size={20} />, label: 'Symptom Management' },
    { icon: <Sparkles size={20} />, label: 'Dance & Movement' },
    { icon: <Gem size={20} />, label: 'Bracelet Making' },
    { icon: <Mic2 size={20} />, label: 'Karaoke' },
    { icon: <Dumbbell size={20} />, label: 'Group Fitness' },
  ];

  return (
    <section className="activities" id="activities">
      <div className="container">
        <div className="activities-grid">
          <div>
            <span className="section-label"><span className="section-label-dot" />Facility Activities</span>
            <h2 className="section-title">
              Engaging <span>Activities</span><br />
              for Every Resident
            </h2>
            <p className="section-subtitle">
              Our thoughtfully designed activities promote creativity, wellness, and social connection — from art and music therapy to karaoke nights and group fitness.
            </p>

            <div className="act-list">
              {activities.map(a => (
                <div key={a.label} className="act-chip">
                  <span className="act-icon">{a.icon}</span>
                  <span>{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="activities-visual">
            <div className="activities-img">
              <img src="/activities_art.png" alt="Residents doing art therapy" />
            </div>
            <div className="act-quote">
              <div className="act-quote-text">
                "The art and music therapy sessions have truly transformed how our residents express themselves. Watching them flourish brings us so much joy."
              </div>
              <div className="act-quote-author">— Solace Springs Care Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== OUTINGS =====
function Outings() {
  const outings = [
    { icon: <Landmark size={22} />, name: 'The Grotto', location: 'Portland, OR' },
    { icon: <Building size={22} />, name: 'OMSI', location: 'Oregon Museum of Science' },
    { icon: <Trees size={22} />, name: 'Oregon Zoo', location: 'Portland, OR' },
    { icon: <Star size={22} />, name: 'Bowling', location: 'Oregon City' },
    { icon: <Waves size={22} />, name: 'Seaside', location: 'Oregon Coast' },
    { icon: <Flower2 size={22} />, name: 'Tulip Festival', location: 'Woodburn — April' },
    { icon: <Leaf size={22} />, name: 'Peony Festival', location: 'Salem — Apr to Jun' },
    { icon: <Mountain size={22} />, name: 'Pumpkin Patch', location: 'Sherwood, OR' },
    { icon: <Utensils size={22} />, name: 'Tillamook Cheese', location: 'Factory & Creamery' },
    { icon: <Globe size={22} />, name: 'City Exploration', location: 'Portland Metro Area' },
  ];

  return (
    <section className="outings" id="outings">
      <div className="container">
        <div className="outings-header">
          <span className="section-label"><span className="section-label-dot" />Community Outings</span>
          <h2 className="section-title">
            Exploring{' '}
            <span style={{ background: 'linear-gradient(135deg,#4ecdc4,#00e8b0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Oregon Together
            </span>
          </h2>
          <p className="section-subtitle">
            We believe community connection is vital. Our residents regularly explore Oregon's beautiful sights and events — making memories and building bonds along the way.
          </p>
        </div>

        <div className="outings-grid">
          {outings.map(o => (
            <div key={o.name} className="outing-card">
              <div className="outing-icon">{o.icon}</div>
              <div className="outing-name">{o.name}</div>
              <div className="outing-location">{o.location}</div>
            </div>
          ))}
        </div>

        <div className="outings-photo">
          <img src="/community_outing.png" alt="Community outing in Oregon" />
        </div>
      </div>
    </section>
  );
}

// ===== TESTIMONIALS =====
function Testimonials() {
  const testimonials = [
    {
      text: "Solace Springs has been a beacon of hope for our family. The staff truly care about my brother's wellbeing and always keep us informed. He has blossomed in ways we never imagined possible.",
      name: 'Maria T.',
      role: 'Sister of a Resident',
      avatarBg: '#0f6b8e',
      avatarIcon: <Smile size={20} color="white" />,
    },
    {
      text: "The activities program at Solace Springs is incredible. My daughter loves the art therapy and karaoke nights. Seeing her happy and engaged every time we visit is everything to us.",
      name: 'Robert K.',
      role: 'Father of a Resident',
      avatarBg: '#2dbdad',
      avatarIcon: <Heart size={20} color="white" />,
    },
    {
      text: "From the community outings to the daily care, everything is handled with such professionalism and warmth. We are grateful every day for this remarkable team.",
      name: 'Sandra M.',
      role: 'Mother of a Resident',
      avatarBg: '#c88500',
      avatarIcon: <Star size={20} color="white" fill="white" />,
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label"><span className="section-label-dot" />Family Voices</span>
          <h2 className="section-title">What <span>Families</span> Are Saying</h2>
          <p className="section-subtitle">
            The trust of our residents' families is the highest honor we could receive.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.name} className="t-card">
              <div className="t-stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={15} fill="currentColor" />)}
              </div>
              <span className="t-quote">"</span>
              <p className="t-text">{t.text}</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: t.avatarBg }}>{t.avatarIcon}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CTA =====
function CTA() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <span className="cta-label"><Sparkles size={13} /> Take the Next Step</span>
          <h2 className="cta-title">Ready to Find the Right Home<br />for Your Loved One?</h2>
          <p className="cta-sub">
            Schedule a tour, speak with our caring team, or simply reach out with questions. We're here for you every step of the way.
          </p>
          <div className="cta-actions">
            <a className="btn-white-solid" href="tel:+19714278384">
              <PhoneIcon size={17} />
              Call Us Today
            </a>
            <button className="btn-outline-white" onClick={() => scrollTo('contact')}>
              <Send size={15} />
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== CONTACT =====
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const infos = [
    { icon: <MapPin size={20} />, label: 'Location', val: '14735 Purple Ash Way', sub: 'Oregon City, OR 97045' },
    { icon: <PhoneIcon size={20} />, label: 'Phone', val: '+1 (971) 427-8384', sub: 'Available Monday–Friday, 8am–6pm' },
    { icon: <Mail size={20} />, label: 'Email', val: 'Oliyadbekele@gmail.com', sub: 'We respond within 24 hours' },
    { icon: <BadgeCheck size={20} />, label: 'Licensing', val: 'State of Oregon Licensed', sub: 'Compliant with all DHS regulations' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="section-label"><span className="section-label-dot" />Get In Touch</span>
            <h2 className="section-title">We're Here to <span>Help You</span></h2>
            <p className="section-subtitle">
              Have questions about our services, availability, or care plans? Our team is ready to guide you with compassion and clarity.
            </p>

            <div className="contact-items">
              {infos.map(i => (
                <div key={i.label} className="contact-item">
                  <div className="contact-item-icon">{i.icon}</div>
                  <div>
                    <div className="contact-item-label">{i.label}</div>
                    <div className="contact-item-val">{i.val}</div>
                    <div className="contact-item-sub">{i.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-box">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '44px 0' }}>
                <CheckCircle size={52} style={{ color: '#00c896', margin: '0 auto 16px' }} />
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '10px' }}>Message Sent!</div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  Thank you for reaching out. A member of our care team will be in touch within 24 hours.
                </div>
                <button className="btn-primary" style={{ marginTop: '26px' }} onClick={() => setSent(false)}>
                  <Send size={15} />
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="form-box-title">Request a Tour or Information</div>
                <div className="form-box-sub">Fill out the form and our compassionate team members will reach out shortly.</div>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input id="contact-name" className="form-input" type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input id="contact-phone" className="form-input" type="tel" placeholder="(503) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input id="contact-email" className="form-input" type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">I am interested in…</label>
                    <select id="contact-interest" className="form-select" value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}>
                      <option value="">Select an option</option>
                      <option value="tour">Scheduling a Tour</option>
                      <option value="placement">Placement Inquiry</option>
                      <option value="services">Learning About Services</option>
                      <option value="employment">Employment Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea id="contact-message" className="form-textarea" placeholder="Tell us a bit about your loved one's needs or any questions you have…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <button type="submit" className="form-btn" id="contact-submit">
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: '16px' }}>
              <div className="navbar-logo-icon" style={{ width: '160px', height: 'auto' }}>
                <img src="/logo.png" alt="Solace Springs Logo" />
              </div>
            </div>
            <p className="footer-tagline">
              A licensed group home in Oregon providing compassionate, person-centered care for adults with developmental disabilities.
            </p>
            <div className="license-badge">
              <div className="license-badge-icon"><BadgeCheck size={22} /></div>
              <div className="license-badge-text">
                <strong>Oregon DHS Licensed Facility</strong><br />
                Fully compliant with all residential care regulations
              </div>
            </div>
            <div className="footer-social">
              <a className="footer-social-btn" href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a className="footer-social-btn" href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a className="footer-social-btn" href="mailto:Oliyadbekele@gmail.com" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-links">
              {[['About Us', 'about'], ['Our Services', 'services'], ['Activities', 'activities'], ['Community Outings', 'outings'], ['Contact', 'contact']].map(([label, id]) => (
                <button key={id} className="footer-link" onClick={() => scrollTo(id)}>
                  <ChevronRightIcon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-col-title">Activities</div>
            <div className="footer-links">
              {['Art & Music Therapy', 'Cooking Classes', 'Dance & Movement', 'Bracelet Making', 'Karaoke Nights', 'Group Fitness'].map(a => (
                <span key={a} className="footer-link" style={{ cursor: 'default', pointerEvents: 'none' }}>{a}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contact-item">
              <MapPin size={15} className="footer-contact-icon" />
              <div className="footer-contact-text">14735 Purple Ash Way,<br />Oregon City, OR 97045</div>
            </div>
            <div className="footer-contact-item">
              <PhoneIcon size={15} className="footer-contact-icon" />
              <div className="footer-contact-text"><a href="tel:+19714278384">+1 (971) 427-8384</a></div>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} className="footer-contact-icon" />
              <div className="footer-contact-text"><a href="mailto:Oliyadbekele@gmail.com">Oliyadbekele@gmail.com</a></div>
            </div>
            <div className="footer-contact-item">
              <Clock size={15} className="footer-contact-icon" />
              <div className="footer-contact-text">Mon–Fri: 8:00am – 6:00pm<br />On-call support 24/7</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © {new Date().getFullYear()} Solace Springs Residential Services LLC. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <span className="footer-bottom-link">Privacy Policy</span>
            <span className="footer-bottom-link">Terms of Service</span>
            <span className="footer-bottom-link">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===== APP =====
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Activities />
      <Outings />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
