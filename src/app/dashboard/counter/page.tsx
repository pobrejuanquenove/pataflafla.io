import { Counter } from "@/components/client";

export const metadata = {
 title: 'use state + metadatada',
 description: 'This is a mix backend and frontend rendering',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>State example</h1>
      <Counter value={55} />
    </div>
  );
}
