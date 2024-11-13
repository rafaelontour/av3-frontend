/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagina from "@/components/template/Pagina";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Pagina>
            {children}
        </Pagina>
    );
}