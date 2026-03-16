import { createFileRoute } from "@tanstack/react-router";
import {
	ArrowRight,
	Bell,
	CheckCircle2,
	Code2,
	FileCode2,
	Layers,
	Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: LandingPage });

const workflowSteps = [
	{
		icon: Zap,
		step: "01",
		title: "Capture the failure signal",
		desc: "Send stacktraces, errors, or warning-level events based on the alert policy your team defines.",
	},
	{
		icon: Layers,
		step: "02",
		title: "Normalize the incident",
		desc: "Bugfixes groups duplicates, keeps the useful context, and cuts out the repeated noise.",
	},
	{
		icon: FileCode2,
		step: "03",
		title: "Open or update a ticket",
		desc: "The incident becomes an actionable engineering ticket with ownership, AI-generated context, and first-pass fix guidance.",
	},
	{
		icon: Bell,
		step: "04",
		title: "Escalate repeat failures",
		desc: "If the same issue comes back after a fix, the ticket is updated and the team is alerted immediately.",
	},
];

const differentiators = [
	{
		icon: Layers,
		title: "Stacktrace-led triage",
		desc: "Stacktraces are often the fastest route to what broke, but Bugfixes also works from errors and policy-defined warning signals.",
	},
	{
		icon: Code2,
		title: "AI-enriched tickets",
		desc: "AI agents add investigation context and concrete fix tips to every ticket so engineers can start resolving the issue instead of spending hours reconstructing it.",
	},
	{
		icon: Bell,
		title: "Repeat incidents get surfaced",
		desc: "Regression handling is built in. When a bug returns, Bugfixes raises the signal instead of burying it in another event stream.",
	},
];

const deliveryPoints = [
	"Deduplicate repeated crashes into one incident",
	"Create actionable tickets in GitHub, Jira, or Linear",
	"Attach AI agent analysis and concrete fix tips to the ticket",
	"Alert only when the incident needs a human response",
];

function LandingPage() {
	return (
		<main className="page-wrap px-4 pb-20 pt-14">
			<section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-20">
				<div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
				<div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />

				<div className="relative z-10">
					<p className="island-kicker mb-4 flex items-center gap-2">
						<span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
							<Zap size={12} fill="currentColor" />
						</span>
						Signal-Driven Bug Operations
					</p>
					<h1 className="display-title mb-6 max-w-5xl text-5xl leading-[1.05] font-bold tracking-tight text-[var(--sea-ink)] sm:text-7xl">
						Start with the failure signal.
						<br />
						<span className="text-emerald-600 dark:text-emerald-400">
							Leave with a ticket and next action.
						</span>
					</h1>
					<p className="mb-10 max-w-3xl text-lg leading-relaxed text-[var(--sea-ink-soft)] sm:text-xl">
						Bugfixes is not a generic logging tool. It turns stacktraces,
						errors, and policy-defined warning events into normalized incidents,
						opens or updates the engineering ticket with AI-generated context
						and fix guidance, and surfaces repeat failures before they become
						background noise.
					</p>
					<div className="flex flex-wrap gap-4">
						<a
							href="https://docs.bugfix.es"
							className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
						>
							Start Setup
							<ArrowRight size={18} />
						</a>
						<a
							href="https://dashboard.bugfix.es"
							className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/50 px-6 py-3.5 text-base font-semibold text-[var(--sea-ink)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/80"
						>
							Open Dashboard
						</a>
					</div>
				</div>
			</section>

			<section id="why" className="mt-24">
				<div className="mb-12 text-center">
					<h2 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
						Built for remediation, not log storage
					</h2>
					<p className="mx-auto max-w-3xl text-[var(--sea-ink-soft)]">
						The message is simple: Bugfixes helps engineering teams act on
						failures. It does not ask them to babysit another stream of events
						or invent a manual escalation policy around noisy errors.
					</p>
				</div>

				<div className="grid gap-6 lg:grid-cols-3">
					{differentiators.map((item, idx) => (
						<div
							key={item.title}
							className="island-shell rise-in rounded-2xl p-6"
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							<div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400">
								<item.icon size={24} />
							</div>
							<h3 className="mb-2 text-lg font-bold text-[var(--sea-ink)]">
								{item.title}
							</h3>
							<p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			<section id="workflow" className="mt-24">
				<div className="mb-12 text-center">
					<h2 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
						How the signal-driven workflow works
					</h2>
					<p className="mx-auto max-w-3xl text-[var(--sea-ink-soft)]">
						Stacktraces are often the fastest path to a reproducible bug, but
						Bugfixes also creates tickets from errors and alerts on warning or
						other severity levels based on the policy each team defines.
					</p>
				</div>

				<div className="relative">
					<div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 lg:block" />

					<div className="grid gap-8 lg:grid-cols-4">
						{workflowSteps.map((item, idx) => (
							<div
								key={item.title}
								className="island-shell rise-in relative rounded-2xl p-6 text-center"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
								<div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow-md">
									{item.step}
								</div>
								<div className="mb-4 flex justify-center">
									<div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400">
										<item.icon size={28} />
									</div>
								</div>
								<h3 className="mb-2 font-bold text-[var(--sea-ink)]">
									{item.title}
								</h3>
								<p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mt-24 grid gap-8 sm:grid-cols-2">
				<div className="flex flex-col justify-center pr-4">
					<h2 className="display-title mb-6 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
						What teams get out of Bugfixes
					</h2>
					<p className="mb-6 text-lg leading-relaxed text-[var(--sea-ink-soft)]">
						The page should leave no ambiguity: Bugfixes helps engineers move
						from signal to owner, ticket, and follow-through. The operating
						model is incident resolution with agent-assisted debugging, not
						passive observability.
					</p>
					<ul className="space-y-4">
						{deliveryPoints.map((point) => (
							<li key={point} className="flex items-center gap-3 font-medium">
								<CheckCircle2 size={20} className="text-emerald-500" />
								{point}
							</li>
						))}
					</ul>
				</div>

				<div className="grid gap-4">
					<div className="island-shell flex gap-4 rounded-2xl p-6">
						<div className="shrink-0 rounded-xl bg-indigo-500/10 p-3 text-indigo-600 dark:text-indigo-400">
							<Code2 size={24} />
						</div>
						<div>
							<h3 className="mb-1 font-bold">Actionable remediation</h3>
							<p className="text-sm text-[var(--sea-ink-soft)]">
								AI agents analyze the incident, add missing context to the
								ticket, and suggest how to fix it so engineers do not lose hours
								rebuilding the same investigation by hand.
							</p>
						</div>
					</div>
					<div className="island-shell flex gap-4 rounded-2xl p-6">
						<div className="shrink-0 rounded-xl bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400">
							<Bell size={24} />
						</div>
						<div>
							<h3 className="mb-1 font-bold">Repeat failures stay visible</h3>
							<p className="text-sm text-[var(--sea-ink-soft)]">
								When a resolved issue comes back, Bugfixes escalates the same
								incident instead of treating it as an unrelated blip.
							</p>
						</div>
					</div>
					<div className="island-shell flex gap-4 rounded-2xl p-6">
						<div className="shrink-0 rounded-xl bg-sky-500/10 p-3 text-sky-600 dark:text-sky-400">
							<Layers size={24} />
						</div>
						<div>
							<h3 className="mb-1 font-bold">Fits your existing backlog</h3>
							<p className="text-sm text-[var(--sea-ink-soft)]">
								Ship incidents into GitHub, Jira, or Linear so the fix happens
								in the same system your team already uses to ship code.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="setup"
				className="mt-24 rounded-[2rem] bg-emerald-950 px-8 py-16 text-center text-white"
			>
				<h2 className="display-title mb-6 text-3xl font-bold sm:text-5xl">
					Start with setup. Keep the dashboard for follow-through.
				</h2>
				<p className="mx-auto mb-10 max-w-2xl text-lg text-emerald-100/80">
					The primary action for new visitors is setup. Returning users can jump
					straight into the dashboard once the pipeline is already in place.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<a
						href="https://docs.bugfix.es"
						className="rounded-full bg-emerald-500 px-8 py-3.5 font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-400"
					>
						Start Setup
					</a>
					<a
						href="https://dashboard.bugfix.es"
						className="rounded-full border border-emerald-500/30 bg-emerald-900/50 px-8 py-3.5 font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-900/80"
					>
						Open Dashboard
					</a>
				</div>
			</section>
		</main>
	);
}
