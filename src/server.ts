import { FastResponse } from "srvx";

// @ts-expect-error globalThis.Response is a built-in
globalThis.Response = FastResponse;
