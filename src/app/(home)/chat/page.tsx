import { ChatForm } from "@/components/chat-form";
import { Container } from "@/components/container";
import { Header } from "@/components/header";

export default function ChatPage() {
    return (
        <div>
            <Header />
            <Container>
                <h1>Tem alguma pergunta em que posso te ajudar?</h1>
                <ChatForm />
            </Container>
        </div>
    )
}