import { useEffect, useRef, useState } from "react";

interface Step {
  label: string;
  detail: string;
}

const COMMAND = "gh pr merge 128 --squash";

const STEPS: Step[] = [
  { label: "Merged pull request #128", detail: "GitHub Actions triggered" },
  { label: "Test suite", detail: "128 passed" },
  { label: "Security scan", detail: "no vulnerabilities" },
  { label: "Container build", detail: "pushed to registry" },
  { label: "Infra apply", detail: "Terraform · us-east-1" },
  { label: "Rolling deploy", detail: "Kubernetes · zero downtime" },
];

type StepState = "pending" | "running" | "done";

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * A small scripted "deploy pipeline" animation for the hero terminal card:
 * types out a command, steps through test/security/build/deploy stages one
 * at a time with checkmarks, holds on the finished state, then fades and
 * loops. Respects prefers-reduced-motion by rendering the finished state
 * once with no animation.
 */
const AnimatedTerminal = () => {
  const [typed, setTyped] = useState("");
  const [stepStates, setStepStates] = useState<StepState[]>(STEPS.map(() => "pending"));
  const [finished, setFinished] = useState(false);
  const [fading, setFading] = useState(false);
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTyped(COMMAND);
      setStepStates(STEPS.map(() => "done"));
      setFinished(true);
      return;
    }

    const run = async () => {
      while (!cancelledRef.current) {
        setTyped("");
        setStepStates(STEPS.map(() => "pending"));
        setFinished(false);
        setFading(false);
        await sleep(500);
        if (cancelledRef.current) return;

        for (let i = 1; i <= COMMAND.length; i++) {
          if (cancelledRef.current) return;
          setTyped(COMMAND.slice(0, i));
          await sleep(28);
        }
        await sleep(450);

        for (let i = 0; i < STEPS.length; i++) {
          if (cancelledRef.current) return;
          setStepStates((prev) => prev.map((s, idx) => (idx === i ? "running" : s)));
          await sleep(550);
          if (cancelledRef.current) return;
          setStepStates((prev) => prev.map((s, idx) => (idx === i ? "done" : s)));
          await sleep(220);
        }
        if (cancelledRef.current) return;

        setFinished(true);
        await sleep(3800);
        if (cancelledRef.current) return;

        setFading(true);
        await sleep(500);
      }
    };

    run();

    return () => {
      cancelledRef.current = true;
    };
  }, []);

  return (
    <div
      className={`font-mono text-sm space-y-2.5 transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <p className="text-muted-foreground min-h-[1.25rem]">
        <span className="text-primary">$</span> {typed}
        {!finished && (
          <span className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle animate-blink" />
        )}
      </p>
      <div className="space-y-1.5 min-h-[9.25rem]">
        {STEPS.map((step, idx) => {
          const state = stepStates[idx];
          if (state === "pending") return null;
          return (
            <p key={idx} className="flex items-center justify-between gap-3">
              <span className={state === "done" ? "text-foreground/80" : "text-muted-foreground"}>
                {step.label}
                {state === "running" && <span className="text-muted-foreground">...</span>}
              </span>
              {state === "done" && (
                <span className="text-accent text-xs whitespace-nowrap">✓ {step.detail}</span>
              )}
            </p>
          );
        })}
      </div>
      <div className="min-h-[1.5rem] pt-1 border-t border-white/10">
        {finished && (
          <p className="text-foreground">
            Deployment successful — trust delivered.
            <span className="inline-block w-2 h-4 bg-primary ml-1 align-middle animate-blink" />
          </p>
        )}
      </div>
    </div>
  );
};

export default AnimatedTerminal;
