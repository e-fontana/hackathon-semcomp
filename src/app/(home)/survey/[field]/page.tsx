import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { fields } from "../utils";
import Link from "next/link";

export default function StackPage({ params }: { params: { field: 'web' | 'data' | 'game' } }) {
    return (
        <div className="min-h-screen">
            <Header />
            <Container className="flex flex-col gap-8">
                <h1 className="text-3xl">Trilha <b>Ciência de Dados</b></h1>
                <div className="flex flex-col gap-8">
                    {fields[params.field].map((content) => (
                        <div key={content.name} className="p-4 rounded-md bg-zinc-800 flex flex-col gap-4">
                            <p className="tet-xl font-bold">{content.name}</p>
                            <iframe className="w-full" src={content.link} />
                        </div>
                    ))}
                </div>
                <h2 className="text-pretty">Precisa de ajuda com algo? Pergunte ao nosso <Link href='/chat' className="underline">chat</Link></h2>
                <h2>Terminou o curso? Que tal buscar vagas promovidas por nossos patrocinadores?</h2>
                <button className="bg-purple-600 hover:bg-purple-700 duration-300"></button>    
            </Container>
        </div>
    )
}