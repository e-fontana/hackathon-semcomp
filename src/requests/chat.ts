export async function llamaRequest(message: string) {
    const response = await fetch('http://localhost:3000/api/chat' as string, {
        method: 'POST',
        body: JSON.stringify({
            message
        })
    })
    console.log(response)
    const responseJson = await response.json()
    console.log('REQUEST', responseJson)
    return responseJson
}