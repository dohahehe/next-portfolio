import Link from 'next/link'
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'

const socialLinks = [
  { href: 'mailto:doha3312ismail@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://www.linkedin.com/in/doha-abou-greisha/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/dohahehe', icon: Github, label: 'GitHub' },
  { href: 'https://wa.me/01001062439', icon: MessageCircle, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4">
            Want to collaborate?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Feel free to reach out through any of these platforms!
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background hover:bg-accent transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Doha Abou-Greisha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}