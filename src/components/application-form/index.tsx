'use client'
import { careers, companies } from "@/app/(home)/application/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { InputFile } from "./input";


export function ApplicationForm() {
    const [formData, setFormData] = useState({})
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        return setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form  className="flex items-center flex-col gap-4">
            <div className="flex flex-col w-full">
                <label htmlFor="Nome">Nome</label>
                <input type="text" onChange={handleChange} className="w-full p-2 border border-gray-600 bg-zinc-900 placeholder:text-white rounded-md outline-none disabled:bg-zinc-300 disabled:cursor-not-allowed" />
            </div>
            <div className="w-full">
                <h3>Carreira</h3>
                <Select defaultValue="">
                    <SelectTrigger className="w-full bg-zinc-900">
                        <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900">
                        {careers.map((carreer) => {
                            return <SelectItem key={carreer} value={carreer} className="bg-zinc-900 text-white">{carreer}</SelectItem>
                        })}
                    </SelectContent>
                </Select>
            </div>
            <div className="w-full">
                <h3>Empresa</h3>
                <Select>
                    <SelectTrigger className="w-full bg-zinc-900">
                        <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900">
                        {companies.map((company) => {
                            return <SelectItem key={company} value={company} className="bg-zinc-900 text-white">{company}</SelectItem>
                        })}
                    </SelectContent>
                </Select>
            </div>
            <div className="w-full">
                <InputFile />
            </div>
        </form>
    )
}