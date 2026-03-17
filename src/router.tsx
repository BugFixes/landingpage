import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { setDefaultConfig } from "bugfixes";
import { routeTree } from "./routeTree.gen";

setDefaultConfig({
	agentKey: import.meta.env.VITE_BUGFIXES_KEY ?? "",
	agentSecret: import.meta.env.VITE_BUGFIXES_SECRET ?? "",
});

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,

		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
