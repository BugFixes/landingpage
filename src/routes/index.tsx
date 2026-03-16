import { createFileRoute } from "@tanstack/react-router";
import {
	Activity,
	ArrowRight,
	Bell,
	CheckCircle2,
	Code2,
	Cpu,
	FileCode2,
	Layers,
	Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: LandingPage });

function LandingPage() {
	return (
		<main className="page-wrap px-4 pb-20 pt-14">
			{/* Hero Section */}
			<section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-20">
				<div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
				<div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />

				<div className="relative z-10">
					<p className="island-kicker mb-4 flex items-center gap-2">
						<span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
							<Zap size={12} fill="currentColor" />
						</span>
						Engineering-First Error Operations
					</p>
					<h1 className="display-title mb-6 max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight text-[var(--sea-ink)] sm:text-7xl">
						Errors in. <br />
						<span className="text-emerald-600 dark:text-emerald-400">
							Operational action out.
						</span>
					</h1>
					<p className="mb-10 max-w-2xl text-lg leading-relaxed text-[var(--sea-ink-soft)] sm:text-xl">
						Bugfixes isn't just another logging tool. It's a specialized
						pipeline that transforms crashes into normalized, deduplicated, and
						actionable engineering tickets.
					</p>
					<div className="flex flex-wrap gap-4">
						<a
							href="https://dashboard.bugfix.es"
							className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
						>
							Access Dashboard
							<ArrowRight size={18} />
						</a>
						<a
							href="https://docs.bugfix.es"
							className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/50 px-6 py-3.5 text-base font-semibold text-[var(--sea-ink)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/80"
						>
							Start Setup
						</a>
					</div>
				</div>
			</section>

			{/* The Pipeline Section */}
			<section className="mt-24">
				<div className="mb-12 text-center">
					<h2 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
						The Bugfixes Pipeline
					</h2>
					<p className="mx-auto max-w-2xl text-[var(--sea-ink-soft)]">
						How we turn noisy crashes into a clean engineering workflow.
					</p>
				</div>

				<div className="relative">
					{/* Connector Line (Desktop) */}
					<div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 lg:block" />

					<div className="grid gap-8 lg:grid-cols-5">
						{[
							{
								icon: Activity,
								title: "Agents",
								desc: "Agents capture and send logs or panic events from your services.",
								step: "01",
							},
							{
								icon: Cpu,
								title: "Daphne",
								desc: "Our normalization engine extracts and standardizes error data.",
								step: "02",
							},
							{
								icon: Layers,
								title: "Deduplication",
								desc: "Repeated failures are intelligently grouped to prevent alert fatigue.",
								step: "03",
							},
							{
								icon: FileCode2,
								title: "Tickets",
								desc: "Automated creation or updates in your external task systems.",
								step: "04",
							},
							{
								icon: Bell,
								title: "Notifications",
								desc: "Alerts are routed based on precise account and escalation policies.",
								step: "05",
							},
						].map((item, idx) => (
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
								<p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Value Propositions */}
			<section className="mt-24 grid gap-8 sm:grid-cols-2">
				<div className="flex flex-col justify-center pr-4">
					<h2 className="display-title mb-6 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
						Why Bugfixes?
					</h2>
					<p className="mb-6 text-lg text-[var(--sea-ink-soft)] leading-relaxed">
						Stop trawling through logs looking for why it broke. Bugfixes lets
						your errors do the ticket creation, so you can focus on the fix. We
						treat every crash as the primary source of truth for operational
						stability.
					</p>
					<ul className="space-y-4">
						{[
							"Error-driven deduplication",
							"Automatic ticket creation",
							"Repeat-incident escalation",
							"AI-assisted remediation guidance",
						].map((prop) => (
							<li key={prop} className="flex items-center gap-3 font-medium">
								<CheckCircle2 size={20} className="text-emerald-500" />
								{prop}
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
							<h3 className="mb-1 font-bold">Actionable Remediation</h3>
							<p className="text-sm text-[var(--sea-ink-soft)]">
								Don't just see the error. Get AI-driven suggestions based on
								your specific crash data and historical fixes.
							</p>
						</div>
					</div>
					<div className="island-shell flex gap-4 rounded-2xl p-6">
						<div className="shrink-0 rounded-xl bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400">
							<Bell size={24} />
						</div>
						<div>
							<h3 className="mb-1 font-bold">Smart Escalation</h3>
							<p className="text-sm text-[var(--sea-ink-soft)]">
								If a bug resurfaces after a "fix", we escalate it immediately.
								No more silent regressions.
							</p>
						</div>
					</div>
					<div className="island-shell flex gap-4 rounded-2xl p-6">
						<div className="shrink-0 rounded-xl bg-sky-500/10 p-3 text-sky-600 dark:text-sky-400">
							<Layers size={24} />
						</div>
						<div>
							<h3 className="mb-1 font-bold">Integration First</h3>
							<p className="text-sm text-[var(--sea-ink-soft)]">
								Syncs seamlessly with GitHub, Jira, and Linear. Your bugs live
								where your code lives.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section
				id="setup"
				className="mt-24 rounded-[2rem] bg-emerald-950 px-8 py-16 text-center text-white"
			>
				<h2 className="display-title mb-6 text-3xl font-bold sm:text-5xl">
					Ready to silence the noise?
				</h2>
				<p className="mx-auto mb-10 max-w-2xl text-emerald-100/80 text-lg">
					Join the engineering teams moving from reactive logging to proactive
					bug operations. Start with our 5-minute agent setup.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<a
						href="#dashboard"
						className="rounded-full bg-emerald-500 px-8 py-3.5 font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-400"
					>
						Dashboard Access
					</a>
					<a
						href="#docs"
						className="rounded-full border border-emerald-500/30 bg-emerald-900/50 px-8 py-3.5 font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-900/80"
					>
						View Documentation
					</a>
				</div>
			</section>
		</main>
	);
}
