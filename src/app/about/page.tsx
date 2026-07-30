import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait3.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full-stack developer with extensive experience across environmental tech, e-commerce, media, and education sectors. Based in London, blending creative design with technical expertise.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Khalid Nahary. I live in London, where I blend creative design
            with full-stack development.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey started with an illustration degree from London
              Metropolitan University and a passion for visual storytelling.
              I've always been drawn to creating things, whether through art,
              design, or problem-solving. During my studies, I discovered coding
              and found that my design background gave me an intuitive
              understanding of user experience and interface development.
            </p>
            <p>
              What began as curiosity quickly became expertise. I leveraged my
              design background to understand frontend development naturally,
              then progressed to full-stack development, diving into backend
              architecture, databases, and cloud infrastructure. The visual
              nature of web development felt natural, and I discovered that the
              creative problem-solving skills I'd developed as an artist
              translated perfectly to programming.
            </p>
            <p>
              Over the past six years, I've worked across diverse sectors—from
              environmental tech at Groundsure to luxury e-commerce with La
              Perla, media platforms at MVG Media, and education technology
              during COVID-19. Each role has expanded my technical toolkit and
              deepened my understanding of how to build scalable, user-focused
              digital products that balance performance with usability.
            </p>
            <p>
              Today, I work as a software developer at Groundsure, where I
              maintain Ruby-based environmental report systems, NextJS web
              applications, build interactive mapping tools with GeoServer and
              Mapbox, and contribute to AWS microservices architecture. I'm
              passionate about mentoring, knowledge sharing, and finding elegant
              solutions to complex technical challenges. The creative and
              technical sides of my brain are constantly feeding each other,
              whether I'm optimizing CI/CD pipelines or designing intuitive user
              interfaces.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/khalidna7ari" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/thingsiforgottoremember/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/khalidna7ari"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/khalid-nahary/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:knahary1989@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              knahary1989@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
