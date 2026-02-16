import Image from 'next/image'
import Link from 'next/link'
import { Download, ArrowRight, Mail, Linkedin, Github } from 'lucide-react'
import image from "../../(Assets)/doha.jpeg"

export default function Intro() {
  return (
    <section id="about" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-1 lg:order-2 w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-100 md:h-100 lg:ms-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src={image}
                  alt="Doha Ismail"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating social links */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 bg-background border px-4 py-2 rounded-full shadow-lg">
                <Link href="mailto:doha3312ismail@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={18} />
                </Link>
                <Link href="https://linkedin.com/in/doha-abou-greisha" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={18} />
                </Link>
                <Link href="https://github.com/dohahehe" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={18} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Front End Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
              Hello, I'm{' '}
              <span className="text-primary">Doha Abou-Greisha</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a Front-End Web Developer skilled in{' '}
              <span className="font-semibold text-foreground">
                HTML, CSS, JavaScript, and React
              </span>
              , passionate about building clean, responsive, and user-friendly web applications. 
              As a recent{' '}
              <span className="font-semibold text-foreground">
                Software Engineering graduate
              </span>
              , I enjoy learning new technologies and turning ideas into impactful digital solutions!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </Link>
              
              <Link
                href="/Doha_Ismail_CV.pdf"
                download
                className="inline-flex items-center space-x-2 px-6 py-3 border border-input bg-background hover:bg-accent rounded-md transition-colors"
              >
                <span>Download CV</span>
                <Download size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}