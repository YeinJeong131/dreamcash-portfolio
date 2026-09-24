import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from 'lucide-react'
import { capabilities, projects, skills } from './data/content'

const fade = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .55 } }

function Nav() {
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-[#070a08]/75 backdrop-blur-xl">
    <div className="shell flex h-16 items-center justify-between">
      <a href="#top" className="text-sm font-semibold tracking-tight">YJ<span className="text-lime-300">.</span></a>
      <nav className="hidden items-center gap-6 text-xs text-white/55 md:flex">
        <a className="transition hover:text-white" href="#about">About</a>
        <a className="transition hover:text-white" href="#work">Work</a>
        <a className="transition hover:text-white" href="#dreamcash">Dreamcash Study</a>
        <a className="transition hover:text-white" href="#contact">Contact</a>
      </nav>
      <a href="mailto:bella060131@gmail.com" className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium transition hover:border-lime-300/50 hover:bg-lime-300 hover:text-black">Let’s talk</a>
    </div>
  </header>
}

function Hero() {
  return <section id="top" className="relative min-h-[92vh] overflow-hidden pt-16">
    <div className="grid-bg absolute inset-0" />
    <div className="absolute left-[10%] top-28 h-72 w-72 rounded-full bg-lime-300/10 blur-[110px]" />
    <div className="shell relative flex min-h-[calc(92vh-4rem)] flex-col justify-center py-20">
      <motion.div {...fade} className="max-w-4xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3 py-2 text-[11px] font-medium text-lime-200">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,.9)]" />
          Sydney · Final-year IT student · Open to emerging product teams
        </div>

        <h1 className="max-w-4xl text-5xl font-medium leading-[.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[92px]">
          Building software across <span className="text-white/35">backend, cloud & Web3.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
          I’m Yein Jeong, a final-year IT student at UTS with a background in software development, cloud infrastructure, networking and cybersecurity. I’m currently exploring Web3, with a particular interest in trading products and the systems behind them.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#dreamcash" className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200">See my Dreamcash study <ArrowDown size={15} className="transition group-hover:translate-y-0.5" /></a>
          <a href="https://github.com/YeinJeong131" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm text-white/70 transition hover:border-white/25 hover:text-white">GitHub</a>
        </div>
      </motion.div>

      <div className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
        {[['Major','Enterprise Software'],['Sub-major','Networking & Cybersecurity'],['Certified','AWS Cloud Practitioner'],['Languages','Korean · English']].map(([a,b]) => <div key={a} className="bg-[#0a0d0b] p-4"><p className="text-[10px] uppercase tracking-[.18em] text-white/30">{a}</p><p className="mt-2 text-xs leading-5 text-white/75">{b}</p></div>)}
      </div>
    </div>
  </section>
}

function SectionTitle({ kicker, title, copy }: { kicker: string, title: string, copy?: string }) {
  return <motion.div {...fade} className="mb-12 max-w-3xl">
    <p className="eyebrow">{kicker}</p>
    <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-white sm:text-5xl">{title}</h2>
    {copy && <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">{copy}</p>}
  </motion.div>
}

function App() {
  return <div className="noise overflow-hidden">
    <Nav />
    <Hero />

    <main>
      <section id="about" className="shell py-24 sm:py-32">
        <SectionTitle
          kicker="What I bring"
          title="What I’ve been working with so far."
          copy="I’m a final-year IT student with experience across backend development, cloud infrastructure, networking and security. Most of my experience comes from university and personal projects, where I’ve learned by building and working with different technologies."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((c, i) => <motion.article {...fade} transition={{duration:.5, delay:i*.05}} key={c.title} className="glass group rounded-3xl p-6 sm:p-8">
            <div className="flex items-start justify-between"><span className="text-xs font-mono text-lime-300/70">{c.index}</span><Sparkles size={16} className="text-white/15 transition group-hover:text-lime-300/60"/></div>
            <h3 className="mt-10 text-xl font-medium tracking-tight">{c.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/48">{c.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">{c.tags.map(t => <span key={t} className="pill">{t}</span>)}</div>
          </motion.article>)}
        </div>
      </section>

      <section id="dreamcash" className="border-y border-white/[0.07] bg-[#0a0d0b] py-24 sm:py-32">
        <div className="shell">
          <SectionTitle
            kicker="Product study · Dreamcash"
            title="Why I’m interested in Dreamcash."
            copy="I’m interested in how Dreamcash combines trading infrastructure with a simple experience across mobile, web and desktop."
          />

          <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div {...fade} className="relative overflow-hidden rounded-[30px] border border-lime-300/15 bg-gradient-to-br from-lime-300/[0.09] to-transparent p-7 sm:p-10">
              <p className="text-xs font-medium text-lime-200">MY EXPLORATION QUESTION</p>

              <p className="mt-6 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                How can complex trading features stay easy to use across different devices?
              </p>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
                Dreamcash describes a self-custodial experience built on Hyperliquid across mobile, web and desktop. I’m looking at how complex trading features are presented across these platforms and how the systems behind the product support the user experience.
              </p>

              <a href="https://dreamcash.xyz/" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-lime-200 hover:text-lime-100">Visit Dreamcash <ArrowUpRight size={15}/></a>
            </motion.div>

            <div className="grid gap-5">
              <motion.div {...fade} className="glass rounded-[30px] p-7">
                <p className="eyebrow">01 · Product</p>
                <h3 className="mt-5 text-xl font-medium">Cross-platform experience</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  I’m comparing how trading information is presented across mobile, browser and desktop, and what changes when the same product is used on different screen sizes.
                </p>
              </motion.div>

              <motion.div {...fade} className="glass rounded-[30px] p-7">
                <p className="eyebrow">02 · Build</p>
                <h3 className="mt-5 text-xl font-medium">From research to a prototype</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  My next step is to build a small working prototype based on what I learn from Dreamcash, its developer resources and its connection with Hyperliquid.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div {...fade} className="mt-5 rounded-[30px] border border-white/[0.07] bg-black/20 p-7 sm:p-9">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                ['What I’m looking at','How the trading experience changes across mobile, web and desktop.'],
                ['What connects','My background in backend development, cloud, networking and security, technical communication, and experience with Korean crypto communities.'],
                ['Next step','Build a small Dreamcash-focused prototype based on what I learn from the product and its developer resources.']
              ].map(([h,p]) => <div key={h}><p className="text-sm font-medium text-white/80">{h}</p><p className="mt-3 text-sm leading-6 text-white/42">{p}</p></div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="shell py-24 sm:py-32">
        <SectionTitle
          kicker="Selected work"
          title="Projects I’ve worked on."
          copy="These projects cover backend development, cloud infrastructure, networking and industry collaboration."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p,i) => <motion.article {...fade} key={p.title} className="glass rounded-3xl p-6 sm:p-8">
            <p className="eyebrow">{p.eyebrow}</p>
            <h3 className="mt-4 text-2xl font-medium tracking-tight">{p.title}</h3>
            <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/48">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{p.stack.map(t => <span className="pill" key={t}>{t}</span>)}</div>
            {p.href && <a href={p.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-lime-200">View project <ArrowUpRight size={14}/></a>}
          </motion.article>)}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.015] py-24">
        <div className="shell">
          <SectionTitle
            kicker="Experience beyond code"
            title="Working with people and technology."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {[
              ['Community Leader','Discord · 1,300+ members · 2023–2026','Led a 1,300+ member crypto and tech community focused on airdrops and emerging technology. I also ran Discord sessions on Notion, vibe coding, browsers and digital tools.'],
              ['Korean Tutor','AmazingTalker · Remote · 2025','Created structured learning materials and used Notion to organise lessons and student information while teaching Korean to individual learners.'],
              ['Student Representative','UTS College · Seoul · 2024','Acted as a communication point between students and faculty, collecting feedback and helping follow up on issues with academic staff.']
            ].map(([a,b,c]) => <motion.div {...fade} key={a} className="rounded-3xl border border-white/[0.07] p-6"><h3 className="text-lg font-medium">{a}</h3><p className="mt-2 text-xs text-lime-300/65">{b}</p><p className="mt-5 text-sm leading-6 text-white/45">{c}</p></motion.div>)}
          </div>
        </div>
      </section>

      <section className="shell py-24 sm:py-32">
        <SectionTitle
          kicker="Toolkit"
          title="Technologies I’ve worked with."
          copy="These are tools and technologies I’ve used in coursework, personal projects and hands-on technical work."
        />

        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {Object.entries(skills).map(([group, list]) => <motion.div {...fade} key={group} className="border-t border-white/10 pt-5"><p className="text-sm font-medium">{group}</p><div className="mt-4 flex flex-wrap gap-2">{list.map(x => <span className="pill" key={x}>{x}</span>)}</div></motion.div>)}
        </div>
      </section>

      <section id="contact" className="shell pb-16 pt-10">
        <motion.div {...fade} className="relative overflow-hidden rounded-[36px] border border-lime-300/15 bg-lime-300 p-8 text-black sm:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[40px] border-black/[0.05]" />

          <p className="text-xs font-semibold uppercase tracking-[.2em] text-black/55">Let’s build something useful</p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-.045em] sm:text-6xl">
            Looking for opportunities to build, learn and contribute.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-6 text-black/60">
            I’m based in Sydney and finishing my Bachelor of IT at UTS in December 2026. I’m interested in early-career opportunities across software development, Web3 and emerging technology.
          </p>

          <div className="relative mt-8 flex flex-wrap gap-3">
            <a href="mailto:bella060131@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"><Mail size={15}/> Email me</a>
            <a href="https://www.linkedin.com/in/yein-jeong/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/20 px-5 py-3 text-sm font-medium">LinkedIn</a>
            <a href="https://github.com/YeinJeong131" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/20 px-5 py-3 text-sm font-medium">GitHub</a>
          </div>
        </motion.div>

        <footer className="flex flex-col gap-2 py-8 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Yein Jeong</span>
          <span>Built with React · TypeScript · Tailwind · Vite</span>
        </footer>
      </section>
    </main>
  </div>
}

export default App