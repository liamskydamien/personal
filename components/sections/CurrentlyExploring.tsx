import { AISvg } from "@/components/AISvg";
import { SectionHead } from "@/components/SectionHead";

export function CurrentlyExploring() {
  return (
    <section className="section" id="ai" data-screen-label="AI exploration">
      <div className="page">
        <SectionHead
          eyebrow="06 / Now"
          title="Currently exploring."
          meta="// status: learning"
        />
        <div className="ai-block">
          <div>
            <h2>AI as a layer of how product gets made.</h2>
            <p>
              I think the next interesting frontier for a PM is figuring out which parts of the
              discovery, spec-writing, and triage loop benefit from LLMs and agentic tooling — and
              which don&apos;t. I&apos;m prototyping in this space alongside my day-to-day work.
            </p>
            <ul className="ai-list">
              <li>
                <span className="chk">✓</span>
                <span>Prompt patterns for user interviews and synthesis</span>
              </li>
              <li>
                <span className="chk">✓</span>
                <span>Agentic workflows for ticket triage and PRD drafting</span>
              </li>
              <li>
                <span className="chk">~</span>
                <span>Evaluating where AI helps a PM vs. gets in the way</span>
              </li>
              <li>
                <span className="chk">~</span>
                <span>Hands-on with React-based AI UIs and tooling</span>
              </li>
            </ul>
          </div>
          <div className="ai-visual">
            <AISvg />
          </div>
        </div>
      </div>
    </section>
  );
}
