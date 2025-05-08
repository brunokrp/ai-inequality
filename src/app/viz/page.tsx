"use client";

import { useState, useRef, useEffect } from "react";
import { Container, Nav, Navbar, Dropdown, ButtonGroup, Button } from 'react-bootstrap';

const channelColors = {
  "Competition": "#72197C",
  "Redistribution": "#C33E7A",
  "AI-labor Complementarity": "#273981",
  "Workers’ Bargaining Power": "#258AAF",
  "Algorithmic Justice": "#2B9993",
  "Information Symmetry": "#8EBF57"
};

const ringLabels = ["Mentioned", "Conceptualized" ,"Tested", "Product/Policy"];

type Policy = {
  index: number;
  title: string;
  description: string;
  references: string[];
  type: string;
  aiWorld: string;
  level: number;
  channel: string;
};

export default function AIInequalityRadar() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const [aiWorldFilter, setAiWorldFilter] = useState("");
  const [showWorldOptions, setShowWorldOptions] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const gRef = useRef<SVGGElement>(null);

  const radiusLevels = [120, 180, 240, 300];
  const outerLabelRadius = 320;
  const centerX = 800;
  const centerY = 800;

  const filteredPolicies = policies.filter(p => (!typeFilter || p.type === typeFilter) && (!aiWorldFilter || p.aiWorld === aiWorldFilter));
  const totalPolicies = filteredPolicies.length;
  const angleStep = (2 * Math.PI) / totalPolicies;

  useEffect(() => {
    fetch('/policies.json')
      .then(res => res.json())
      .then((data: Policy[]) => {
        const normalized = data.map(p => ({
          ...p,
          references: Array.isArray(p.references)
            ? p.references
            : [p.references]
        }));
        setPolicies(normalized);
      })
      .catch(err => console.error("Failed to load policies:", err));

    const container = svgContainerRef.current;
    const g = gRef.current!;
    if (!container || !g) return;

    let scale = 1;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const svgWidth = 1600;
    const svgHeight = 1600;

    let translateX = (containerWidth - svgWidth) / 2;
    let translateY = (containerHeight - svgHeight) / 2;

    g.setAttribute("transform", `translate(${translateX}, ${translateY}) scale(${scale})`);

    
    let isPanning = false;
    let startX = 0;
    let startY = 0;

    function updateTransform() {
      g.setAttribute("transform", `translate(${translateX}, ${translateY}) scale(${scale})`);
    }

    function handleWheel(e: WheelEvent) {
      e.preventDefault();
      const zoomFactor = 0.01;
      const delta = e.deltaY > 0 ? 1 - zoomFactor : 1 + zoomFactor;
      scale *= delta;
      updateTransform();
    }

    function handleMouseDown(e: MouseEvent) {
      isPanning = true;
      startX = e.clientX;
      startY = e.clientY;
    }

    function handleMouseMove(e: MouseEvent) {
      if (!isPanning) return;
      translateX += e.clientX - startX;
      translateY += e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;
      updateTransform();
    }

    function handleMouseUp() {
      isPanning = false;
    }

    container.addEventListener("wheel", handleWheel);
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

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
      
      <div ref={svgContainerRef} className="relative w-full h-[800px] bg-slate overflow-auto">
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 z-3 d-flex gap-2">
          <Dropdown as={ButtonGroup}>
            <Button
              variant={typeFilter ? "primary" : "light"}
              onClick={() => setShowTypeOptions(prev => !prev)}
            >
              Type of Instrument
            </Button>
            <Dropdown.Toggle split variant={typeFilter ? "primary" : "light"} />
            <Dropdown.Menu show={showTypeOptions}>
              {['Public Policy', 'Market Mechanism', 'Mixed'].map(type => (
                <Dropdown.Item
                  key={type}
                  active={typeFilter === type}
                  onClick={() => {
                    setTypeFilter(type);
                    setShowTypeOptions(false);
                  }}
                >
                  {type}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup}>
            <Button
              variant={aiWorldFilter ? "info" : "light"}
              onClick={() => setShowWorldOptions(prev => !prev)}
            >
              AI World
            </Button>
            <Dropdown.Toggle split variant={aiWorldFilter ? "info" : "light"} />
            <Dropdown.Menu show={showWorldOptions}>
              {['AI as Super Technology', 'AI as Normal Technology'].map(world => (
                <Dropdown.Item
                  key={world}
                  active={aiWorldFilter === world}
                  onClick={() => {
                    setAiWorldFilter(world);
                    setShowWorldOptions(false);
                  }}
                >
                  {world}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Button
            variant="danger"
            onClick={() => {
              setTypeFilter("");
              setAiWorldFilter("");
              setShowTypeOptions(false);
              setShowWorldOptions(false);
            }}
          >
            Clear Filters
          </Button>
        </div>
        
       <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded shadow p-3 space-y-1 z-20">
          <p className="font-semibold text-black text-lg">Channels</p>
          {Object.entries(channelColors).map(([channel, color]) => (
            <div key={channel} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
              <span className="capitalize text-black text-xs">{channel}</span>
            </div>
          ))}
        </div>

        <div className="absolute">
          <svg width={1600} height={1600}>
            <g ref={gRef} transform="scale(1)">
              <text
                x={centerX}
                y={centerY + 5}
                fill="#000"
                fontSize={15}
                fontFamily="monospace"
                textAnchor="middle"
              >
                <tspan x={centerX} dy="-0.6em">MECHANISMS TO CURB</tspan>
                <tspan x={centerX} dy="1.2em">AI INEQUALITY</tspan>
              </text>

              {radiusLevels.map((r, i) => (
                <circle key={`ring-${i}`} cx={centerX} cy={centerY} r={r} fill="none" stroke="#4B5563" strokeWidth={0.3} />
              ))}
              {ringLabels.map((label, i) => (
                <text
                  key={`ring-label-${i}`}
                  x={centerX}
                  y={centerY - radiusLevels[i] + 25}
                  fill="#374151"
                  fontSize={10}
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {label}
                </text>
              ))}

              {filteredPolicies.map((policy, i) => {
                const angle = (i + 0.5) * angleStep;
                const radius = radiusLevels[policy.level];
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                const labelX = centerX + outerLabelRadius * Math.cos(angle);
                const labelY = centerY + outerLabelRadius * Math.sin(angle);
                const rotation = (angle * 180) / Math.PI;
                const isLeftSide = angle > Math.PI / 2 && angle < (3 * Math.PI) / 2;
                const textRotation = isLeftSide ? rotation + 180 : rotation;
                const attributeKey = policy.channel || policy.type || policy.aiWorld;
                const fillColor = channelColors[policy.channel?.trim() as keyof typeof channelColors] || "#999";

                return (
                  <g key={i}>
                    <line 
                      x1={x} 
                      y1={y} 
                      x2={labelX} 
                      y2={labelY} 
                      stroke="#9CA3AF" 
                      strokeWidth={0.2} 
                      strokeDasharray="1.5"
                      className="hover:stroke-black hover:stroke-[3] cursor-pointer transition"
                      onClick={() => setSelectedPolicy(policy)} 
                    />

                    <circle 
                      cx={x} 
                      cy={y} 
                      r={8} 
                      fill={fillColor} 
                      onClick={() => setSelectedPolicy(policy)} 
                      className="cursor-pointer transition" 
                      style={{
                        transformBox: "fill-box",
                        transformOrigin: "center",
                      }}
                      onMouseEnter={(e) => e.currentTarget.setAttribute("r", "12")}
                      onMouseLeave={(e) => e.currentTarget.setAttribute("r", "8")}
                    />
                    <text
                      x={labelX}
                      y={labelY}
                      fill={fillColor}
                      fontSize={10}
                      fontFamily="monospace"
                      textAnchor={isLeftSide ? "end" : "start"}
                      transform={`rotate(${textRotation}, ${labelX}, ${labelY})`}
                      onClick={() => setSelectedPolicy(policy)}
                      className="cursor-pointer transition-all duration-200 hover:font-bold"
                    >
                      {policy.title}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {selectedPolicy && (
          <div className="fixed h-[93vh] mt-[7vh] inset-0 z-50 flex justify-end bg-opacity-50 transition-opacity duration-300 ease-out animate-fade-in">
            <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-lg relative transform transition-transform duration-300 scale-95 animate-fade-in">
              <button
                onClick={() => setSelectedPolicy(null)}
                className="absolute top-3 right-5 text-gray-500 hover:text-black text-xl font-bold"
              > x
              </button>
              <p className="font-mono text-sm font-mono font-bold mb-2">{selectedPolicy.channel}</p>
              <h2 className="font-mono text-xl font-bold mb-2">{selectedPolicy.title}</h2>

              <div className="flex flex-wrap mt-2">
                <p className="text-sm text-gray-800 font-mono">{selectedPolicy.description}</p>
              </div>

              <div className="flex gap-3 flex-wrap text-xs">
                <span className="bg-blue-600 font-mono text-white px-2 py-1 rounded-full">{selectedPolicy.type}</span>
                <span className="bg-purple-600 font-mono text-white px-2 py-1 rounded-full">{selectedPolicy.aiWorld}</span>
              </div>

              <div className="mt-4 font-mono">
                <hr className="my-4 border-t border-gray-300"/>
                <h3 className="text-lg font-bold">References</h3>
                <ul className="text-sm text-gray-600 list-disc">
                  {selectedPolicy.references.map((ref, idx) => (
                    <li key={idx}>{ref}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
