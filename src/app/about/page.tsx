'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand className="text-xl font-mono font-bold" href="/">
            AI & Inequality
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="font-mono" href="/theory">Theory</Nav.Link>
            <Nav.Link className="font-mono" href="/viz">Viz</Nav.Link>
            <Nav.Link className="font-mono" href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="p-8">
        <h1 className="text-2xl font-bold font-mono mb-4">About This Project</h1>
        <p className="text-base font-mono text-gray-700">
          This project visualizes how different policy mechanisms address the inequality created by advances in artificial intelligence. It was built as a project by Bruno Kunzler, at Columbia University - SIPA.
        </p>
      </div>
    </div>
  );
}