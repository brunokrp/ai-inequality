'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand className="text-xl font-mono" href="/">
            AI & Inequality
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="font-mono" href="/theory">Theory</Nav.Link>
            <Nav.Link className="font-mono" href="/viz">Viz</Nav.Link>
            <Nav.Link className="font-mono" href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="min-h-screen flex items-center justify-start">
        <div className="text-amber-400">
          <h1 className="text-xl font-bold font-mono text-left">About This Project</h1>
          <p className="text-base font-mono text-gray-700">
            This is an AI policy and visualization project. <br />
            It was built by <a href="https://www.linkedin.com/in/brunokrp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Bruno Kunzler</a> for the <br /> 
            AI Institutions class at Columbia University - SIPA.
          </p>
        </div>
      </Container>
    </div>
  );
}