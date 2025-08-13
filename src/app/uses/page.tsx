import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    "What's in my toolkit - essential hardware, software, and apps for development and design.",
}

export default function Uses() {
  return (
    <SimpleLayout
      title="What's in my toolkit"
      intro="The essential hardware, software, and apps I use for development, design, and staying productive. No fluff, just the tools that earn their place on my desk and in my dock."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title='16" MacBook Pro, M1 Pro, 16GB RAM, 1TB (Space Grey)'>
            The M1 Pro has been a game-changer for development work. Silent,
            fast, and handles everything I throw at it from React builds to
            video editing without breaking a sweat.
          </Tool>
          <Tool title="Apple Studio Display (Standard Glass)">
            Perfect companion to the MacBook Pro. The 27" 5K display gives me
            all the screen real estate I need for coding, design work, and
            having multiple windows open simultaneously.
          </Tool>
          <Tool title="Logitech MX Master 3S Mouse">
            The best mouse I've ever used. The precision scroll wheel and
            customizable buttons make navigating through code and design files
            incredibly efficient.
          </Tool>
          <Tool title="Apple Magic Keyboard (Touch ID, no numpad)">
            Clean, minimal, and the Touch ID integration is seamless. The
            compact layout saves desk space while still being comfortable for
            long coding sessions.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Essential for macOS gestures and navigation. The multi-touch
            gestures make switching between spaces and apps feel natural and
            fast.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor & Kiro">
            My go-to IDEs for development. Cursor's AI-powered features and
            Kiro's intelligent assistance have transformed how I write and debug
            code.
          </Tool>
          <Tool title="iTerm2">
            Superior terminal experience on macOS. The split panes, search
            functionality, and customization options make it indispensable for
            development work.
          </Tool>
          <Tool title="Bruno">
            Clean, lightweight API testing tool. Much faster than Postman and
            the interface is intuitive for testing REST APIs and GraphQL
            endpoints.
          </Tool>
          <Tool title="AWS Console">
            Essential for managing Lambda functions, CloudFront distributions,
            SQS queues, and Cognito authentication across multiple environments.
          </Tool>
          <Tool title="MongoDB Compass">
            Visual interface for MongoDB databases. Makes querying and managing
            document collections much more intuitive than command line.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            The industry standard for UI/UX design and prototyping.
            Collaborative features make it perfect for working with teams and
            clients on design systems.
          </Tool>
          <Tool title="Adobe Creative Suite">
            Photoshop and Illustrator are still unmatched for detailed image
            editing and vector graphics. Essential tools for any creative work.
          </Tool>
          <Tool title="DaVinci Resolve">
            Professional video editing and color grading software. Incredibly
            powerful and free - perfect for creating content and promotional
            videos.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            My second brain for project management, documentation, and knowledge
            base. The flexibility to create custom workflows makes it perfect
            for organizing everything.
          </Tool>
          <Tool title="Apple Notes">
            Quick capture for ideas, meeting notes, and random thoughts. The
            sync across devices and simplicity make it perfect for rapid
            note-taking.
          </Tool>
          <Tool title="Raycast">
            Supercharged spotlight replacement. The extensions ecosystem and
            quick actions have made it an essential part of my daily workflow.
          </Tool>
          <Tool title="ChatGPT">
            AI assistant for brainstorming, code review, and problem-solving.
            Invaluable for getting unstuck and exploring different approaches to
            challenges.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
