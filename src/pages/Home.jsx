import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const referenceImages = {
  hero: 'https://framerusercontent.com/images/pZWEUfZK7goYm8x4NLlezXMQ1FY.png?height=970&width=1600',
  doctor: 'https://framerusercontent.com/images/Z8fSuv9XKjfSHDCMhnu4uW0Xq0w.png?height=520&width=520',
  doctorPortrait: 'https://framerusercontent.com/images/5isxMVXETo2eIuNdHdekzlcWEE4.png?height=413&width=422',
  patient: 'https://framerusercontent.com/images/75B2lTH3wkJtDXN0rX8hSPADB4.png?height=200&width=200',
  about: 'https://framerusercontent.com/images/Wc2Igy1XlkSwsPPbUDOUp4uUqzQ.png?height=1320&width=1200',
  why: 'https://framerusercontent.com/images/u5KDmsEaFhyj2ja56OHXOHoA424.webp?height=958&width=1641',
}

const services = [
  ['✚', 'Emergency care', 'Immediate, expert attention whenever you need us.'],
  ['♡', 'General medicine', 'Thoughtful care for your everyday health and wellbeing.'],
  ['✿', "Women’s health", 'Personalized care through every stage of life.'],
  ['⌕', 'Diagnostic imaging', 'Clear answers with advanced imaging technology.'],
]
const departments = [
  ['Cardiology', 'Expert care for your heart and cardiovascular health.', '♥'],
  ['Neurology', 'Specialized care for your brain and nervous system.', '✳'],
  ['Radiology', 'Advanced diagnostic imaging and expert interpretation.', '⌕'],
  ['Orthopedics', 'Helping you move freely, comfortably, and confidently.', '⌁'],
]
const plans = [
  ['Essential', '$99', 'A thoughtful starting point for your annual health check.', ['Doctor consultation', 'Complete blood count', 'Blood pressure screening']],
  ['Wellness', '$189', 'A more complete picture of your health and wellbeing.', ['Everything in Essential', 'Liver function test', 'Chest X-ray']],
  ['Complete', '$299', 'Our most comprehensive preventive health package.', ['Everything in Wellness', 'Heart health screening', 'Vitamin D & B12 tests']],
]

function Brand() {
  return <Link to="/#home" className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight text-[#183c36]" aria-label="Hospic home"><span className="brand-mark">✚</span>hospic<span className="text-[#6c7774]">.</span></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) return
    const target = document.getElementById(location.hash.slice(1))
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }))
  }, [location.hash, location.pathname])
  return <header className="sticky top-0 z-50 border-b border-[#e9eeeb] bg-[#fbfcfa]/95 backdrop-blur-md">
    <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 lg:px-8">
      <Brand />
      <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-5 border-b border-[#e9eeeb] bg-[#fbfcfa] px-6 py-6 text-sm font-medium text-[#45534f] md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
        <Link onClick={() => setOpen(false)} to="/#home" className="hover:text-[#16866b]">Home</Link><Link onClick={() => setOpen(false)} to="/#about" className="hover:text-[#16866b]">About</Link><Link onClick={() => setOpen(false)} to="/#departments" className="hover:text-[#16866b]">Departments</Link><Link onClick={() => setOpen(false)} to="/#packages" className="hover:text-[#16866b]">Pricing</Link><Link onClick={() => setOpen(false)} to="/#contact" className="hover:text-[#16866b]">Contact</Link>
        <Link onClick={() => setOpen(false)} to="/#appointment" className="button button-dark md:hidden">Book an appointment <span>↗</span></Link>
      </nav>
      <Link to="/#appointment" className="button button-dark hidden md:inline-flex">Book an appointment <span>↗</span></Link>
      <button className="grid h-10 w-10 place-items-center rounded-xl border border-[#dce5e0] text-xl text-[#183c36] md:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
    </div>
  </header>
}

function SectionHeading({ eyebrow, title, copy, center = false }) {
  return <div className={`${center ? 'mx-auto text-center' : ''} mb-10 max-w-[620px]`}><p className="eyebrow"><span>✳</span>{eyebrow}</p><h2 className="section-title">{title}</h2>{copy && <p className="mt-4 leading-7 text-[#707d78]">{copy}</p>}</div>
}

function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [faq, setFaq] = useState(0)
  return <div className="min-h-screen overflow-hidden bg-[#fbfcfa] text-[#183c36]">
    <Header />
    <main>
      <section id="home" className="hero-wrap">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-12 md:py-16 lg:grid-cols-[1fr_1.02fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="relative z-10"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#deebe5] bg-white px-3.5 py-2 text-xs font-semibold text-[#4c665e]"><span className="h-2 w-2 rounded-full bg-[#2ba77e]"/>Trusted care, close to home</div>
            <h1 className="max-w-[630px] text-[48px] font-semibold leading-[1.05] tracking-[-.055em] text-[#183c36] sm:text-6xl lg:text-[72px]">Exceptional care.<br/><span className="text-[#1c9874]">Better health.</span></h1>
            <p className="mt-6 max-w-[500px] text-base leading-7 text-[#697973] sm:text-lg">Feel confident in your care. Our compassionate specialists combine trusted expertise with the latest in modern medicine.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#appointment" className="button button-green">Book an appointment <span>↗</span></a><a href="#departments" className="button button-light">Explore our care <span>→</span></a></div>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#e8eeea] pt-7"><div className="flex -space-x-3">{[referenceImages.doctor,referenceImages.patient,referenceImages.doctorPortrait].map((image,i)=><img key={image} className="h-11 w-11 rounded-full border-[3px] border-[#fbfcfa] object-cover" src={image} alt="Care team member" style={{zIndex:4-i}} />)}</div><div className="text-xs leading-5 text-[#6a7772]"><div className="text-[14px] tracking-wide text-[#e3a847]">★★★★★ <span className="ml-1 font-bold text-[#183c36]">4.9/5</span></div>Trusted by 2,000+ patients</div><div className="ml-auto hidden border-l border-[#e3eae6] pl-6 sm:block"><div className="text-xl font-bold">24/7</div><div className="text-xs text-[#718079]">Emergency care</div></div></div>
          </div>
          <div className="hero-image-wrap"><img className="hero-image" src={referenceImages.hero} alt="Hospic hospital care"/><div className="image-scrim"/><div className="hero-note"><div className="note-icon">✚</div><div><div className="font-semibold">Here for your health</div><div className="mt-1 text-xs text-[#73817b]">Care that feels like it should.</div></div><span className="ml-auto text-[#1c9874]">↗</span></div><div className="hero-tag"><span className="text-xl">✳</span><span><b>Care you can count on</b><small>Every step of the way</small></span></div></div>
        </div>
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-3 px-5 pb-10 sm:grid-cols-4 lg:px-8"><div className="trust-item"><b>30+</b><span>years of trusted care</span></div><div className="trust-item"><b>120+</b><span>expert physicians</span></div><div className="trust-item"><b>18k</b><span>patients cared for</span></div><div className="trust-item"><b>98%</b><span>would recommend us</span></div></div>
      </section>

      <section id="about" className="section-pad"><div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8"><div className="about-photos"><img src={referenceImages.about} alt="Hospic medical team"/><div className="about-badge"><span>✚</span><div><b>People first.</b><small>Always.</small></div></div><div className="about-years"><b>30</b><span>years of<br/>better care</span></div></div><div><SectionHeading eyebrow="A little about us" title="Care that puts you at the center." copy="Good healthcare starts with listening. We take the time to understand what matters to you, then bring together the right people and expertise to help you feel your best."/><p className="leading-7 text-[#6f7d77]">From your first visit to the care you need along the way, our team is here with clear guidance, trusted expertise, and a little more heart.</p><a href="#services" className="button button-light mt-7">Get to know us <span>→</span></a><div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#e8eeea] pt-7"><div><b className="text-2xl">120<span className="text-[#1c9874]">+</span></b><p className="mt-1 text-sm text-[#718079]">Experienced specialists</p></div><div><b className="text-2xl">98<span className="text-[#1c9874]">%</span></b><p className="mt-1 text-sm text-[#718079]">Patient satisfaction</p></div></div></div></div></section>

      <section id="services" className="section-pad bg-[#f3f7f4]"><div className="mx-auto max-w-[1240px] px-5 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading eyebrow="Our services" title="Care for every part of life." copy="From everyday health to the unexpected, we’re right here when you need us."/><a href="#departments" className="button button-light mb-10">All services <span>→</span></a></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(([icon,title,copy],i)=><article className="service-card" key={title}><div className="service-icon">{icon}</div><span className="service-number">0{i+1}</span><h3>{title}</h3><p>{copy}</p><a href="#appointment" aria-label={`Learn about ${title}`}>Explore care <span>↗</span></a></article>)}</div></div></section>

      <section className="section-pad"><div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 lg:grid-cols-[.88fr_1.12fr] lg:gap-16 lg:px-8"><div><SectionHeading eyebrow="Why Hospic" title="Expert care, with a human touch." copy="The best care feels personal. We bring thoughtful people and modern medicine together to make your experience a little easier."/><div className="mt-8 space-y-5">{[['✳','People who listen','Your questions matter. We make time to hear them.'],['⌕','Modern medicine','The latest technology, guided by experienced hands.'],['♡','Here when you need us','A connected team, ready to support your health.']].map(([icon,title,copy])=><div key={title} className="flex gap-4"><span className="why-icon">{icon}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-[#718079]">{copy}</p></div></div>)}</div><a href="#appointment" className="button button-green mt-8">Meet our care team <span>↗</span></a></div><div className="why-photo"><img src={referenceImages.why} alt="Hospic hospital and patient care"/><div className="why-caption"><span className="note-icon">♡</span><div><b>Thoughtful care. Every visit.</b><small>Because you deserve to feel heard.</small></div></div></div></div></section>

      <section id="departments" className="section-pad bg-[#183c36] text-white"><div className="mx-auto max-w-[1240px] px-5 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-6"><div className="max-w-xl"><p className="eyebrow eyebrow-light"><span>✳</span>Find your specialist</p><h2 className="section-title text-white">The right expertise,<br/>right when you need it.</h2></div><a href="#appointment" className="button button-white mb-1">All departments <span>→</span></a></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{departments.map(([name,copy,icon],i)=><a href="#appointment" key={name} className="department-card"><span className="department-icon">{icon}</span><span className="department-index">0{i+1}</span><h3>{name}</h3><p>{copy}</p><span className="department-link">Explore department <span>↗</span></span></a>)}</div></div></section>

      <section id="appointment" className="section-pad"><div className="mx-auto max-w-[1240px] px-5 lg:px-8"><div className="appointment-wrap"><div className="appointment-copy"><p className="eyebrow eyebrow-light"><span>✳</span>We’re here to help</p><h2 className="text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Let’s make time<br/>for your health.</h2><p className="mt-4 max-w-sm leading-7 text-white/70">A healthier tomorrow can start with one simple conversation. Request a visit and our team will be in touch.</p><div className="mt-9 flex items-center gap-3 text-sm text-white/80"><span className="text-xl">◷</span> Mon–Fri, 8:00 am–6:00 pm <span className="mx-1 text-white/40">·</span> (212) 555-0148</div></div><form className="appointment-form" onSubmit={e=>{e.preventDefault();setSubmitted(true)}}><h3 className="text-xl font-semibold">Request an appointment</h3><p className="mb-6 mt-1 text-sm text-[#77847e]">We’ll get back to you within one business day.</p>{submitted ? <div className="rounded-2xl bg-[#eff8f3] p-6 text-center"><div className="text-3xl text-[#1c9874]">✓</div><b className="mt-2 block">Thanks for reaching out.</b><p className="mt-1 text-sm text-[#6d7c75]">Our care team will be in touch soon.</p></div> : <><div className="grid gap-4 sm:grid-cols-2"><label>Your name<input required placeholder="Jane Smith"/></label><label>Phone number<input required type="tel" placeholder="(212) 555-0100"/></label><label className="sm:col-span-2">Email address<input required type="email" placeholder="jane@example.com"/></label><label className="sm:col-span-2">How can we help?<select defaultValue=""><option value="" disabled>Select a department</option>{departments.map(([name])=><option key={name}>{name}</option>)}<option>General medicine</option><option>Emergency care</option></select></label></div><button className="button button-green mt-5 w-full justify-center">Request a visit <span>↗</span></button><p className="mt-3 text-center text-[11px] text-[#89938e]">For emergencies, please call 911.</p></>}</form></div></div></section>

      <section id="packages" className="section-pad bg-[#f3f7f4]"><div className="mx-auto max-w-[1240px] px-5 lg:px-8"><SectionHeading center eyebrow="Preventive care" title="A healthier you starts here." copy="Simple, transparent health checks to help you stay a step ahead."/><div className="grid gap-4 lg:grid-cols-3">{plans.map(([name,price,copy,features],i)=><article key={name} className={`plan-card ${i===1?'plan-featured':''}`}><div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.16em]">{name} check</span>{i===1&&<span className="rounded-full bg-[#d8f3e9] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#16866b]">Most popular</span>}</div><div className="mt-6"><b className="text-[42px] tracking-[-.05em]">{price}</b><span className="ml-2 text-sm text-[#78847e]">/ person</span></div><p className="mt-2 min-h-12 text-sm leading-6 text-[#718079]">{copy}</p><div className="my-6 border-t border-[#e7ece8]"/>{features.map(f=><p key={f} className="mb-3 flex items-center gap-2.5 text-sm text-[#53615b]"><span className="text-[#1c9874]">✓</span>{f}</p>)}<a href="#appointment" className={`button ${i===1?'button-green':'button-light'} mt-5 w-full justify-center`}>Choose this check <span>→</span></a></article>)}</div></div></section>

      <section className="section-pad"><div className="mx-auto max-w-[1240px] px-5 lg:px-8"><div className="testimonial-box"><div className="testimonial-quote">“</div><p className="eyebrow"><span>✳</span>Kind words from our patients</p><blockquote>“From the first call, I felt like I was in good hands. Everyone took the time to explain things and made a stressful day feel manageable.”</blockquote><div className="mt-8 flex items-center justify-center gap-3"><img src={referenceImages.patient} alt="Patient testimonial author" className="h-11 w-11 rounded-full object-cover"/><div className="text-left"><b className="text-sm">Emily R.</b><div className="text-xs text-[#7a8781]">Patient since 2021 <span className="ml-2 text-[#e3a847]">★★★★★</span></div></div></div><div className="mt-8 text-xs text-[#87938d]">01 <span className="mx-3 tracking-[.3em] text-[#1c9874]">● ○ ○</span> 03</div></div></div></section>

      <section className="section-pad bg-[#f3f7f4]"><div className="mx-auto grid max-w-[1240px] gap-10 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8"><div><SectionHeading eyebrow="Good to know" title="A few things you might be wondering." copy="Have another question? Our friendly team is always happy to help."/><a className="button button-light" href="#contact">Get in touch <span>↗</span></a></div><div className="faq-list">{[['How do I book an appointment?','Use our appointment form or call our team. We’ll help you find a time and the right specialist for your needs.'],['Do you accept insurance?','We work with many major insurance providers. Please contact us with your plan details and we can help confirm your coverage.'],['What should I bring to my first visit?','Bring a photo ID, your insurance card, a list of current medications, and any recent test results you would like to discuss.'],['Where are you located?','You can find us at 125 West 57th Street, New York, NY. Our team is here Monday through Friday.']].map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setFaq(faq===i?-1:i)}><span>{q}</span><span className="faq-plus">{faq===i?'−':'+'}</span></button>{faq===i&&<p>{a}</p>}</div>)}</div></div></section>
    </main>
    <footer id="contact" className="bg-[#183c36] text-white"><div className="mx-auto max-w-[1240px] px-5 pb-8 pt-14 lg:px-8"><div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Brand/><p className="mt-4 max-w-xs text-sm leading-6 text-white/60">Better health starts with care that feels personal. We’re here for you, every step of the way.</p><a href="#appointment" className="mt-5 inline-flex text-sm font-medium text-[#82d4b4]">Book your visit <span className="ml-2">↗</span></a></div><div><h3 className="footer-heading">Explore</h3><a href="#about">About Hospic</a><a href="#services">Our services</a><a href="#departments">Departments</a><a href="#packages">Health checks</a></div><div><h3 className="footer-heading">Patient care</h3><a href="#appointment">Book an appointment</a><a href="#appointment">Find a doctor</a><a href="#contact">Patient information</a><a href="#contact">Contact us</a></div><div><h3 className="footer-heading">Come say hello</h3><p>125 West 57th Street<br/>New York, NY 10019</p><p>(212) 555-0148<br/>hello@hospic.health</p></div></div><div className="flex flex-wrap justify-between gap-3 pt-6 text-xs text-white/45"><span>© 2025 Hospic Health. Your care, our commitment.</span><span>Privacy · Accessibility</span></div></div></footer>
  </div>
}

export default Home
