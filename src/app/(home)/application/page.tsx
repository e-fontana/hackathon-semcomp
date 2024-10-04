import { ApplicationForm } from "@/components/application-form";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import React from "react";

export default function ApplicationPage() {    
    return (
        <>
            <Header />
            <Container>
                <ApplicationForm />
            </Container>
        </>
        
    )
}