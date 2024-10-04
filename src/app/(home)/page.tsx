import { Container } from "@/components/container";
import { Header } from "@/components/header";
import Link from "next/link";

export default function HomePage() {
    console.log(process.env.TYPEFORM_URL)
    return (
        <div className="min-h-screen h-full flex flex-col">
            <Header />
            <Container className="flex items-center justify-center text-center flex-1">
                <h1 className="text-4xl font-bold">Pipe</h1>
                <p className="text-lg mt-4 text-pretty">Uma pesquisa para te auxiliar, de forma acessível e integrada a dar seu salto na área tech</p>
                <Link href={process.env.TYPEFORM_URL as string} target="_blank" className="mt-8 bg-purple-600 hover:bg-purple-700 duration-300 text-white font-bold py-2 px-4 rounded w-full">Start</Link>
            </Container>
        </div>
    )
}