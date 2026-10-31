import { socialLinks } from '../constants'

const linkedin = socialLinks.find((s) => s.name === 'LinkedIn').link

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Want to talk cloud, automation, or AI?
        <br className="sm:block hidden"/>
        Let's connect!</p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer"
        className="btn">Connect on LinkedIn</a>
    </section>
  )
}

export default CTA