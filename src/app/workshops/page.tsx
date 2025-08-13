import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function WorkshopSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Workshops',
  description:
    'I share my knowledge through workshops and educational sessions.',
}

export default function Workshops() {
  return (
    <SimpleLayout
      title="Sharing knowledge through workshops and educational sessions"
      intro="I enjoy facilitating workshops where I can share my experiences and insights with students and professionals. These sessions provide an opportunity to connect with others and help them develop valuable skills for their careers."
    >
      <div className="space-y-20">
        <WorkshopSection title="Workshops">
          <Appearance
            href="#"
            title="Effective Teamwork & Collaboration"
            description="I led a workshop for second- and third-year students at London Metropolitan University, sharing insights on teamwork drawn from my experience across diverse industries—from fast-paced production environments to distributed development teams. I covered the challenges and benefits of working in both small and large teams, offering strategies to navigate obstacles, improve communication, and achieve goals in professional settings."
            event="London Metropolitan University, 2023"
            cta="Workshop details"
          />
        </WorkshopSection>
      </div>
    </SimpleLayout>
  )
}
