import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    if (!req.body) return Response.json({ error: "No body provided" }, { status: 400 });
    const requestBody = await req.json()
    const response = await fetch(process.env.LLAMA_URL as string, {
        method: 'POST',
        body: JSON.stringify({
            model: "llama3",
            prompt: requestBody.message,
            stream: false
        })
    })
    const responseJson = await response.json()
    console.log('API', responseJson.response)
    return Response.json(responseJson.response)
}   