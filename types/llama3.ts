export type TLlamaResponse = {
    message: string
}

export type TLlamaRequest = {
    model: "llama3"
    messages: {
        role: "user",
        content: string
    }[]
    stream: boolean
}