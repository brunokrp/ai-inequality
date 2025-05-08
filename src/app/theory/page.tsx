'use client';

import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link'
import React, { useState } from "react";

export default function TheoryPage() {
  const [showColumn1, setShowColumn1] = useState(false);
  const [showColumn2, setShowColumn2] = useState(false);
  const [showColumn3, setShowColumn3] = useState(false);

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

      <div className="min-h-screen bg-white">
        <Container className="py-5">
          <p className="text-4xl font-mono font-bold mb-4 text-amber-400">Theoretical Background</p>
          <p className="font-mono text-lg">
            “The primary economic challenge posed by the proliferation of AI will be one of income distribution. <br />
            We economists set ourselves too easy a goal if we just say that technological progress can make everybody better off: <br />
            we also have to say how we can make this happen.”
          </p>
          <p className="font-mono font-bold text-md">
            Korinek & Stiglitz (2018)
          </p>

          <p className="font-mono font-bold text-amber-400 text-2xl"> Inequality Channels </p>
          <p className="font-mono text-sm">
          The unequal diffusion and impact of artificial intelligence (AI) can be traced to three primary sources of AI-driven inequality: abnormal returns to innovation, diminishing labor income, and unequal distribution of algorithmic risks.
          </p>
          <p className="font-mono text-sm">
          First, AI exacerbates inequality through abnormal returns to innovators. Because markets for innovation are often imperfectly competitive, the creators of advanced AI systems are able to capture innovator rents — excess profits that exceed the true costs of innovation. These rents accumulate disproportionately to a small number of firms and individuals, leading to concentration of wealth and power. Stiglitz and Korinek argue that unless innovation markets are made more contestable — through reforms like antitrust enforcement or adjustments to intellectual property regimes — these surpluses will continue to amplify economic inequality.
          </p>
          <p className="font-mono text-sm">
          Second, AI reshapes labor markets, often to the detriment of workers, by diminishing wages for broad categories of labor. As AI systems substitute or devalue certain types of human work, they induce shifts in the demand for different factors of production. This results in changes in factor prices — particularly a decline in wages for many workers — which constitutes a major channel of redistribution. According to Stiglitz and Korinek, these shifts create pecuniary externalities that are not offset by adequate insurance mechanisms, meaning that workers bear the brunt of technological change without compensation, while capital owners benefit disproportionately.
          </p>
          <p className="font-mono text-sm">
          Third, AI introduces a less visible but equally critical form of inequality: unequal risk distribution due to algorithmic bias. As Ferrara notes, AI systems can perpetuate or even exacerbate existing social biases, especially when trained on historical data reflecting systemic discrimination. These errors in decision-making processes often lead to unfair or harmful outcomes for marginalized groups. Bias in AI systems is a form of technological risk that is inequitably distributed, placing a disproportionate burden on those who are already vulnerable due to race, gender, socioeconomic status, or geography.
          </p>
          <p className="font-mono text-sm">
          In sum, this project identifies three key sources of AI inequality — concentrated rents, downward labor pressure, and unequal algorithmic harms — and proposes complementary strategies to either prevent these inequalities from arising or remedy their impacts after the fact. Addressing these distinct but interconnected channels will require a combination of regulatory, institutional, and technical interventions
          </p>

          <div className="-mx-4 sm:-mx-6 lg:-mx-10">
            <img
              src="/inequality-framework.png"
              alt="AI inequality illustration"
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 items-start">
            
            <div className="bg-violet-50/50 p-6 rounded-lg shadow flex flex-col min-h-[70px]">
              <button
                onClick={() => setShowColumn1(!showColumn1)}
                className="w-full text-left font-mono !font-mono font-bold text-[#72197C] text-lg mb-2"
              >
                ABNORMAL RETURNS TO INNOVATORS
                <span className="float-right">{showColumn1 ? "−" : "+"}</span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showColumn1 ? 'max-h-[1500px]' : 'max-h-0'
                }`}
              >
                  <p className="font-mono text-sm mt-2">
                    The first channel of AI-driven inequality stems from abnormal returns to innovators, which arise due to the nature of technology as a partially excludable information good. While knowledge and innovations can be used by many at no additional cost — thanks to their nonrival character — they are often rendered excludable through mechanisms like trade secrets or intellectual property rights (IPRs). This excludability grants innovators market power, enabling them to earn a surplus or rent above the true cost of innovation. Such rents, while incentivizing private investment in R&D, often lead to concentrated gains and contribute to rising inequality, particularly when the benefits of innovation are not broadly shared.
                  </p>
                  <p className="font-mono text-[#72197C] font-bold mt-4">Prevention: Competition</p>
                  <p className="font-mono text-sm">
                    To prevent these abnormal returns from translating into deeper inequality, a key strategy is to increase market competition. By strengthening antitrust policies and moderating the strength or duration of IPRs, policymakers can limit the extent of market power enjoyed by innovators. Greater competition tends to reduce prices, improve access to innovation, and ensure more widespread diffusion of AI technologies. Open-source models and publicly funded research are practical illustrations of how innovation can be stimulated without granting excessive private control over knowledge.
                  </p>
                  <p className="font-mono text-[#C33E7A] font-bold mt-4">Remedy: Redistribution</p>
                  <p className="font-mono text-sm">
                    To remedy inequality after rents have been captured, redistribution mechanisms are essential. Taxing innovation rents and using the proceeds for targeted public expenditures — particularly those that benefit displaced or low-income workers — can help ensure that technological change is Pareto improving. More fundamentally, some argue that since much of the foundational research behind AI was supported by public investment, the resulting returns should be shared more equitably. Mechanisms like employee ownership schemes or public equity stakes in AI firms can align the distribution of innovation benefits with broader societal contributions and needs.
                  </p>
              </div>  
            </div>

            <div className="bg-blue-100/50 p-6 rounded-lg shadow">
              <button
                onClick={() => setShowColumn2(!showColumn2)}
                className="w-full text-left font-mono !font-mono font-bold text-[#273981] text-lg mb-2"
              >
                DIMINISHING RETURNS TO LABOR
                <span className="float-right">{showColumn2 ? "−" : "+"}</span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showColumn2 ? 'max-h-[1500px]' : 'max-h-0'
                }`}
              >
                  <p className="font-mono text-sm mt-2">
                    The second channel of AI-driven inequality arises from diminishing wages due to shifts in labor demand. As AI systems automate tasks and functions traditionally performed by humans, they alter the equilibrium prices of factors of production — most notably, wages. This process creates pecuniary externalities, or changes in income distribution resulting from innovation, which may be consistent with Pareto efficiency in theory but often generate winners and losers in practice. For example, while AI increases the demand and wages for specialized roles like machine learning engineers, it depresses wages for workers whose skills are made redundant — such as drivers or radiologists. These redistributive effects are particularly concerning in real-world labor markets that are far from perfectly competitive or insured.
                  </p>
                  <p className="font-mono text-[#273981] font-bold mt-4">Prevention: AI-labor complementarity</p>
                  <p className="font-mono text-sm">
                    To prevent these wage declines from worsening inequality, policy should focus on increasing AI-labor complementarity. This involves shaping the direction of innovation so that AI augments, rather than replaces, human work. One way to achieve this is by changing relative factor prices, such as eliminating tax deductions for interest and imposing taxes on capital. These measures would raise the cost of capital, thereby encouraging firms to pursue capital-augmenting (rather than labor-saving) innovations that support human productivity rather than displace it.
                  </p>
                  <p className="font-mono text-[#258AAF] font-bold mt-4">Remedy: Workers’ bargaining power</p>
                  <p className="font-mono text-sm">
                    To remedy the inequality caused by wage declines, strategies should aim to strengthen workers’ bargaining power. A range of interventions can help here. For displaced or low-wage workers, wage subsidies and earned income tax credits can offset income losses. Increasing the minimum wage, especially where employer power dominates labor markets, can also ensure that full-time workers are not trapped in poverty. More broadly, maintaining high aggregate demand — through fiscal stimulus, public investment, or higher public sector wages — boosts overall labor demand, helping to raise wages.
                  </p>
                </div>
              </div>

            <div className="bg-green-50/50 p-6 rounded-lg shadow">
              <button
                onClick={() => setShowColumn3(!showColumn3)}
                className="w-full text-left font-mono !font-mono font-bold text-[#2B9993] text-lg mb-2"
              >
                UNEQUAL RISK DISTRIBUTION
                <span className="float-right">{showColumn3 ? "−" : "+"}</span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showColumn3 ? 'max-h-[2000px]' : 'max-h-0'
                }`}
              >
                  <p className="font-mono text-sm mt-2">
                    The third channel of AI-driven inequality arises from unequal risk distribution, particularly through algorithmic bias and opaque decision-making systems. As Barocas explains, while machine learning systems are designed to distinguish between individuals, they become discriminatory when they systematically disadvantage certain social groups — especially along dimensions like race or gender that have historically underpinned widespread and intergenerational exclusion. These harms go beyond isolated errors; they risk entrenching structural inequality, reinforcing patterns of disadvantage across employment, education, housing, and more. The feedback loops inherent in AI systems can magnify these effects over time, perpetuating and deepening systemic injustice.
                  </p>
                  <p className="font-mono text-[#2B9993] font-bold mt-4">Prevention: Algorithmic Justice</p>
                  <p className="font-mono text-sm">
                    To prevent this form of inequality, it is essential to pursue algorithmic justice — a set of principles and practices aimed at detecting, mitigating, and ultimately avoiding unjust disparities in algorithmic outcomes. Achieving this requires much more than technical "debiasing." It involves recognizing the normative questions at stake, articulating clear fairness objectives, and confronting difficult questions about societal values. Barocas emphasizes that algorithmic systems must be designed with transparency, interpretability, and accountability in mind, and that current research offers cause for cautious optimism. In domains with less statistical uncertainty — like natural language processing or computer vision — effective fairness interventions are already proving feasible. Moreover, because algorithms demand explicit specification of decision-making goals, they offer an opportunity to make fairness a central, rather than peripheral, concern.
                  </p>
                  <p className="font-mono text-[#8EBF57] font-bold mt-4">Remedy: Information Symmetry</p>
                  <p className="font-mono text-sm">
                    To remedy unequal risk distribution where it already exists, a key strategy is to reduce information asymmetry between AI developers and the public, including regulators, procurers, insurers, and users. As Tomei notes, much of the risk in AI stems from inadequate information — about system capabilities, limitations, and societal impacts. This opacity impedes market governance mechanisms like insurance, auditing, and procurement, which rely on robust data to assess and manage risk. Standardized disclosure requirements can correct this imbalance by making relevant information about AI systems widely available and comparable. Such transparency would empower market participants to make more informed choices, facilitate risk pricing and capital allocation, and ultimately distribute AI-related risks more equitably across society. In this way, information disclosure complements fairness interventions by enabling responsive and adaptive governance structures.
                  </p>
              </div>
            </div>
          </div>

          <p className="font-mono font-bold text-amber-400 text-2xl"> Instruments to Mitigate AI-Driven Inequality </p>
          <p className="font-mono text-sm">
          The instruments proposed or used to mitigate AI-driven inequality can be understood more clearly by analyzing them through three key dimensions: the world-view of AI that motivates them, the maturity level of their development and application, and their institutional type. These dimensions help to explain why certain tools emerge, how far they've progressed, and who is responsible for their design and implementation.
          </p>

          <p className="font-mono font-bold text-amber-400 text-xl"> AI Worldview</p>
          <p className="font-mono text-sm">
          One perspective sees AI as super technology — an unprecedented, potentially civilization-transforming force, akin to or surpassing the Industrial Revolution. Under this view, inequality arises from extreme power concentration among frontier AI developers, and mitigation strategies tend to be radical and forward-looking. Examples include proposals for windfall taxes on advanced AI firms, which would redistribute future concentrated wealth; global compute-sharing initiatives, modeled on CERN, to democratize access to critical resources; and publicly funded sovereign AI efforts aimed at ensuring national and global benefit from key technological advances. These instruments reflect the fear that, without active intervention, AI will entrench a small elite with disproportionate control over economic and political outcomes.
          </p>
          <p className="font-mono text-sm">
          In contrast, the second perspective treats AI as normal technology — a powerful but ultimately integratable general-purpose tool, like electricity or the internet. Here, inequality is understood through familiar economic and institutional mechanisms: wage suppression, access to capital, and systemic bias. Interventions are evolutionary rather than revolutionary. For example, wage subsidies, earned income tax credits, and minimum wage increases are used to offset labor market disruptions. Tools like algorithmic fairness audits, transparency mandates, and equity-focused procurement policies aim to reduce discriminatory outcomes and improve accountability. These instruments seek to embed fairness into AI’s diffusion without overhauling the institutional order.
          </p> 

          <p className="font-mono font-bold text-amber-400 text-xl"> Maturity level </p>
          <p className="font-mono text-sm">
          The second lens assesses how far along each instrument is in terms of development and real-world application.
          </p>
          <p className="font-mono text-sm">
          Some instruments have only been mentioned - they have been proposed in abstract terms but have not been tailored to the AI context. For instance, references to the importance of intellectual property reform for limiting market power are often made, but rarely specified in terms of how patent or copyright regimes should evolve for AI systems.
          </p>
          <p className="font-mono text-sm">
          Others are conceptualized, meaning they have been clearly articulated for AI but not yet implemented. The idea of a windfall tax on AGI developers, or international compute-sharing coalitions, falls in this category. These proposals are detailed in vision documents or research papers but have not moved into formal policy design or piloting.
          </p>  
          <p className="font-mono text-sm">
          A number of tools have reached the tested stage — they have been implemented in practice, often in limited contexts. Examples include public procurement standards requiring fairness and explainability in AI systems, or algorithmic audits performed by civil society organizations and private firms. These tools show promise, but rigorous evaluations of their effectiveness remain limited.
          </p>
          <p className="font-mono text-sm">
          Finally, some instruments are available as products or have demonstrable evidence behind them. Wage subsidies and earned income tax credits are long-standing labor market tools already used in response to automation-induced displacement. Insurance products for AI liability and open-source model development with public funding are also beginning to take shape, providing viable paths for inclusive innovation.
          </p>  

          <p className="font-mono font-bold text-amber-400 text-xl"> Type of Instrument </p>
          <p className="font-mono text-sm">
          The third lens distinguishes between the institutional actors and logics that govern each instrument.
          </p>
          <p className="font-mono text-sm">
          Public policy instruments are those implemented by states or public institutions, often through legislation, regulation, or direct fiscal transfers. These include progressive tax policies, minimum wage increases, public R&D funding, and reforms to intellectual property law. The underlying logic here is that the state has a duty to manage the social impacts of technological change through redistribution and regulation.
          </p>
          <p className="font-mono text-sm">
          Market instruments rely on pricing mechanisms and private sector incentives. Examples include insurance markets that distribute AI-related risk across firms, fairness certifications offered as services to signal responsible AI practices, and compute credits to increase access for small developers. These instruments are typically deployed through voluntary mechanisms or market competition, sometimes supported by regulation but not governed by it.
          </p>  
          <p className="font-mono text-sm">
          Mixed instruments blend elements of both. For example, public procurement standards require private vendors to meet certain fairness or transparency criteria to win contracts, effectively using public leverage to shape private innovation. Similarly, standardized disclosure mandates enable both regulatory oversight and market-based evaluation, helping stakeholders like insurers or auditors make informed decisions.
          </p>

          <p className="font-mono font-bold text-amber-400 text-2xl"> References </p>
          <ol className="list-decimal list-inside space-y-2 font-mono text-sm">
            <li>
              Korinek, Anton, and Joseph E. Stiglitz. <em>"Artificial intelligence and its implications for income distribution and unemployment."</em> In <strong>The Economics of Artificial Intelligence: An Agenda</strong>, pp. 349–390. University of Chicago Press, 2018.
            </li>
            <li>
              Barocas, Solon, Moritz Hardt, and Arvind Narayanan. <strong>Fairness and Machine Learning: Limitations and Opportunities.</strong> MIT Press, 2023.
            </li>
            <li>
              Dennis, Claire, Sam Manning, Stephen Clare, Boxi Wu, Okechukwu Jake Effoduh, Chinasa T Okolo, Lennart Heim, and Katya Klinova. <em>"Options and Motivations for International AI Benefit Sharing."</em>
            </li>
            <li>
              Alonso, Cristian, Andrew Berg, Siddharth Kothari, Chris Papageorgiou, and Sidra Rehman. <em>"Will the AI revolution cause a great divergence?"</em> <strong>Journal of Monetary Economics</strong> 127 (2022): 18–37.
            </li>
            <li>
              Tomei, Philip Moreira, Rupal Jain, and Matija Franklin. <em>"AI Governance through Markets."</em> arXiv preprint arXiv:2501.17755 (2025).
            </li>
            <li>
              Ferrara, Emilio. <em>"Fairness and bias in artificial intelligence: A brief survey of sources, impacts, and mitigation strategies."</em> <strong>Sci</strong> 6, no. 1 (2023): 3.
            </li>
            <li>
              Alonso, Cristian, Andrew Berg, Siddharth Kothari, Chris Papageorgiou, and Sidra Rehman. <em>"Will the AI revolution cause a great divergence?"</em> <strong>Journal of Monetary Economics</strong> 127 (2022): 18–37.
            </li>
          </ol>
        </Container>
      </div>
    </div>
  );
}