'use client';

import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen mask-b-from-40% bg-[url(/abstract-ai-image.png)]">
      {/* Header with Tabs */}
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand className="text-xl font-mono font-bold" href="/">AI & Inequality</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="font-mono" href="/theory">Theory</Nav.Link>
            <Nav.Link className="font-mono" href="/viz">Viz</Nav.Link>
            <Nav.Link className="font-mono" href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Title */}
      <div className="text-left ml-15 mt-60">
        <h1 className="text-xl font-mono font-bold">Tackling AI Inequality</h1>
      </div>

      {/* Buttons */}
      <div className="flex left gap-4 mt-3 m-10 ml-15">
        <Link href="/theory" passHref legacyBehavior>
          <Button variant="warning" size="sm">Theoretical Background</Button>
        </Link>
        <Link href="/viz" passHref legacyBehavior>
          <Button variant="warning" size="sm">Mapping Alternatives</Button>
        </Link>
      </div>
    </div>
  );
}