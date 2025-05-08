'use client';

import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
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
    </div>
  );
}         