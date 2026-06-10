import { socialLinks } from '../data/siteContent.js'

function Footer() {
  return (
    <footer className="bottom-0">
      <div>
        <p className="">Rotaract District 3191</p>
        <p className="">
          Connecting clubs, projects, and leaders across the district.
        </p>
      </div>

      <div className="" aria-label="Social links">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            className="social-link"
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer