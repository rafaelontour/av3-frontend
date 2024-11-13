"use client";
import { IconEdit, IconPin } from "@tabler/icons-react";

import style from '@/components/css/style.module.css'

import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { ModalProvider } from "./ui/animated-modal";
import FormCadastroAuditorio from "./FormCadastroAuditorio";

export default function CartaoAudtirotiro() {
    return (
        <div>
            <div
                className={`
                    ${style.sombra_sm}
                    flex flex-col
                    w-80 rounded-sm
                `}
            >
                <div className="flex items-center justify-between py-2 px-5">
                    <div>Nome do auditório</div>
                    <ModalProvider>
                        <Modal>
                            <ModalTrigger>
                                <div>
                                    <IconEdit />
                                </div>
                            </ModalTrigger>
                            <ModalBody>
                                <ModalContent>
                                    <FormCadastroAuditorio funcao="editar" />
                                </ModalContent>
                            </ModalBody>
                        </Modal>
                    </ModalProvider>
                </div>
                <div>
                    <Image src="https://picsum.photos/300/200" className="max-h-44 object-cover w-full" width={300} height={200} alt={""} />
                </div>
                <div className="flex flex-col p-5 gap-3">
                    <div className="flex gap-2 items-center">
                        <IconPin />
                        <span>Campus</span>
                    </div>
                    <div>
                        Capacidade: 150 pessoas
                    </div>
                    <div>
                        Recursos: Projetor, sistema de som, microfone
                    </div>
                </div>
            </div>
        </div>

    )
}