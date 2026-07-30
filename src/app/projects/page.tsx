import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoFlashlet from '@/images/logos/flashlet-logo.png'
import laPerlaLogo from '@/images/logos/laperla.jpg'
import socialLogo from '@/images/logos/24social.png'
import schoolifyLogo from '@/images/logos/schoolify.png'
import groundsureLogo from '@/images/logos/groundsure.png'
import vseriesLogo from '@/images/logos/vseries.png'

const projects = [
  {
    name: 'Groundsure Insights platform',
    description:
      'Customer facing web application with geo spatial mapping features for customers to order environmental reports',
    link: { href: 'https://www.groundsure.io', label: 'groundsure.io' },
    logo: groundsureLogo,
  },
  {
    name: '24social CMS Platform',
    description:
      'Next.js CMS platform for 1,000+ UK hospitality locations with Firebase integration and branded frontend experiences',
    link: { href: 'https://www.24social.io/', label: '24social.io' },
    logo: socialLogo,
  },
  {
    name: 'La Perla Beauty E-commerce',
    description:
      'Luxury beauty e-commerce site built with Gatsby.js, BigCommerce integration, and custom design system',
    link: { href: 'https://www.laperla.com', label: 'laperla.com' },
    logo: laPerlaLogo,
  },
  {
    name: 'Schoolify Learning Platform',
    description:
      'Remote learning platform with live video classrooms, interactive tools, and teacher dashboard built during COVID-19',
    link: { href: 'https://www.schoolify.co', label: 'schoolify.co' },
    logo: schoolifyLogo,
  },
  {
    name: 'Flashlet',
    description:
      'Personal project: An AI-powered tool to transcribe YouTube videos and convert them to flashcards for efficient learning',
    link: { href: 'https://flashlet.app', label: 'flashlet.app' },
    logo: logoFlashlet,
  },
  {
    name: 'Vseries FC',
    description:
      'An online footballing platform where users would be able to showcase their abillities to scouts and clubs around the world',
    link: {
      href: 'https://vseriesfc-khalidna7aris-projects.vercel.app/',
      label: 'vseriesfc.com',
    },
    logo: vseriesLogo,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Building scalable digital products across environmental tech, e-commerce, media, and education sectors.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Building scalable digital products across diverse industries."
      intro="Over the past six years, I've contributed to projects spanning environmental tech, luxury e-commerce, media platforms, and education technology. From Ruby-based report systems handling millions in revenue to React applications serving thousands of users, here are some highlights from my professional journey."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
