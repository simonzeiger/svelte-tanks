import "./app.postcss";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

let isHost = false;
export function getIsHost() {
  return isHost;
}

export function setIsHost(host: boolean) {
  isHost = host;
}

export default app;
