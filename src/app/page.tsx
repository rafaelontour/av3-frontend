/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import links from "@/components/data/constants/LinksAdmin";
import { IconLogout, IconSearch } from "@tabler/icons-react";

import style from '@/components/css/style.module.css'
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Home() {

    const [ open, setOpen ] = useState(false);
    const [ placeholderVisible, setPlaceholderVisible ] = useState(false);
    
    // Função para tirar o foco do input, tirar a visibilidade do placeholder e fechar o menu lateral
    const handleBlur = () => {
        const input = document.querySelector('.input_search') as HTMLInputElement;
        input.value = '';
        input.blur();
        setPlaceholderVisible(false);
        setOpen(false);
    };

    return (
        <div className="flex flex-1 h-screen">
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody 
                    onMouseLeave={handleBlur}
                    onMouseOver={() => setPlaceholderVisible(true)}
                    className={style.sidebar}
                >
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden  pl-[9px]">
                        <div className="relative py-2 w-full rounded-md overflow-hidden ml-[-4px]">
                            <div className="flex mb-8 gap-2 items-center">
                                <Image
                                    src="https://picsum.photos/200"
                                    alt="Foto do usuário" 
                                    className="
                                        rounded-[13px]
                                    "
                                    width={60}
                                    height={60}
                                />
                                
                                <div className="flex flex-col">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="font-medium text-black dark:text-white whitespace-pre flex flex-col"
                                    >   
                                        <span className="font-semibold text-sm">
                                            Nome do usuário
                                        </span>
                                        <span className="text-xs font-[300]">
                                            usuario@email.com
                                        </span>
                                    </motion.span>
                                </div>
                            </div>

                            <IconSearch size={22} className="absolute translate-y-1/2 ml-[13px] mt-[2px]" stroke={3} />
                            <input
                                placeholder={placeholderVisible ? "Pesquisar..." : ""}
                                type="text"
                                className={`
                                    w-full py-[14px] outline-none rounded-[13px] bg-[#f5f5f5] dark:bg-[#1f1f22] text-[14px] ${open ? 'pl-12 pr-4' : 'pl-0'}
                                    input_search
                                `}
                            />
                        </div>

                        <div className="mt-7 flex flex-col gap-2">
                            <div className="flex flex-col gap-3 ml-[-5px]">
                                {links.map((link, idx) => (
                                    <SidebarLink
                                        key={idx}
                                        link={link}
                                    />
                                ))}
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex flex-col items-start gap-2 pl-[8px] mb-3">
                        <SidebarLink
                            link={{
                                label: "Sair",
                                href: "/",
                                icon: <IconLogout size={32} className="text-neutral-700 dark:text-neutral-200  flex-shrink-0" />
                            }}
                        />
                        
                        <ThemeToggle />
                    </div>
                </SidebarBody>  
            </Sidebar>

            <div className="flex flex-col flex-1 w-full h-screen">
                {/* Conteúdo da página */}
            </div>
        </div>
    );
}