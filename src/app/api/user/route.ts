import { NextRequest } from "next/server";

const receivedApplications = []

export async function POST(req: NextRequest) {
    const requestBody = await req.json()
    receivedApplications.push(requestBody)
    return Response.json({ message: "Application received" }, {
        status: 201
    })
}