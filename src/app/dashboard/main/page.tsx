import { WidgetGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="p-2 text-black">
      <h1 className="mt-2 text-3xl ">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <div className="flex flex-wrap p-2">
        <WidgetGrid />
      </div>
    </div>
  );
}
