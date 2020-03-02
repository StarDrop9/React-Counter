import React from "react";
import { useStore } from "./store-provider";

export default function StateView() {
  const { state } = useStore();
  const json = JSON.stringify(state, null, 2);

  return (
    <section className="state-view">
      <h2>App State</h2>
      <pre>
        <code>{json}</code>
      </pre>
    </section>
  );
}
