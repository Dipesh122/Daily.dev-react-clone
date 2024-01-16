import { Settings2, Plus } from "lucide-react";
import Card from "./Card";
export default function Content() {
    return (
        <section className="mt-2 pr-20">
            <div className="flex justify-between text-gray-400 font-bold">
                <button className="flex transition hover:duration-75 hover:bg-slate-800 rounded-xl px-3 py-2 hover:text-slate-200"><span className="mr-1"><Settings2 /></span> Feed settings</button>
                <button className="flex transition hover:duration-75 hover:bg-slate-800 rounded-xl px-3 py-2 hover:text-slate-200">Add shortcuts <span className="ml-1"><Plus /></span> </button>
            </div>
            <div className="grid grid-cols-3 gap-x-4 justify-items-center max-md:justify-self-center max-sm:grid-cols-1 max-md:grid-cols-2 max-sm:justify-items-center">
            <Card/>
            </div>
        </section>
    );
}