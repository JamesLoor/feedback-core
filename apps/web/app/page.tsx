"use client";

import { Button } from "@nextui-org/react";

export default function Page(): JSX.Element {
  return (
    <main>
      <h1 className="text-primary-700">Next.js + Next UI + Turbo</h1>
      <p>Here's a simple example of a Turbo-enabled Next.js app:</p>
      <Button
        onClick={() => console.log("Click in NextUI component")}
        color="success"
      >
        Click me
      </Button>
    </main>
  );
}
