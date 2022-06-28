import { Play } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>();
    const [isOpen, setActionMenu] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header isOpen={isOpen} setActionMenu={setActionMenu} />
            <main className="flex flex-1">
                {slug ? (
                    <Video lessonSlug={slug} />
                ) : (
                    <div className="flex-1 flex flex-col justify-center items-center gap-2 max-h-[80vh] text-gray-300">
                        <Play size={200} className="" />
                        <p className="text-2xl">Selecione uma aula para assistir</p>
                    </div>
                )}
                <Sidebar isOpen={isOpen} setActionMenu={setActionMenu} />
            </main>
        </div>
    )
}