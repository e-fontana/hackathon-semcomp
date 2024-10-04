'use client'
import { useState } from "react"
import { llamaRequest } from "@/requests/chat"
import React from "react"

export function ChatForm() {
    const [question, setQuestion] = useState("")
    const [loading, setLoading] = useState(false)
    const [llamaResponse, setllamaResponse] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!question) return
        setLoading(true)
        llamaRequest(question).then((res) => {
            setLoading(false)
            setllamaResponse(res)
            setQuestion("")
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-start justify-center gap-4 py-4">
                <div className="flex -gap-1 flex-col w-full">
                    <label htmlFor="">Envie sua pergunta</label>
                    <input
                        id="question"
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Como faço para construir um..."
                        name="question"
                        type="text"
                        value={question}
                        disabled={loading}
                        className="w-full p-2 border border-gray-600 bg-zinc-900 placeholder:text-white rounded-md outline-none disabled:bg-zinc-300 disabled:cursor-not-allowed" 
                    />
                </div>
                <button disabled={loading} type="submit" className="p-2 bg-purple-600 hover:bg-purple-700 duration-300 text-white rounded-md w-full disabled:bg-gray-500 disabled:cursor-not-allowed">
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
            {loading && <p>Carregando...</p>}
            {(!loading && llamaResponse) &&  (
                <>
                    <h2>Resposta</h2>
                    <h3>
                        {llamaResponse}
                    </h3>                                                 
                </>
            )
            }
        </>
    )
}