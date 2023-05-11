import { useComputed, useSignal } from "@preact/signals";
import { useState } from "preact/hooks";

export function App() {
  const [hookValue, hookSetter] = useState("world");

  return (
    <div style={{ position: "fixed", inset: "0" }}>
      <div style={{ display: "grid", placeItems: "center", padding: "0 1em" }}>
        <input
          style={{ border: "1px solid #000" }}
          value={hookValue}
          onInput={(event) => hookSetter(event.currentTarget.value)}
        />
        <MyComponent hookValue={hookValue} />
      </div>
    </div>
  );
}

function MyComponent(props: { hookValue: string }) {
  const mySignal = useSignal("hello");
  const derivedSignal = useComputed(
    () => `${mySignal.value} ${props.hookValue}`
  );
  return <span>{derivedSignal}</span>;
}
