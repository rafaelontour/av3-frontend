"use client";
import { IconPlus } from "@tabler/icons-react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalProvider,
    ModalTrigger,
} from "./ui/animated-modal";
import FormCadastroAuditorio from "./FormCadastroAuditorio";

export default function BotaoAdicionarAuditorio() {

    // Esse é o componente do botão que abre o modal para adicionar um novo auditório e muda de acordo com a função, adicionar um novo auditório ou salvar alterações em um auditório existente

    return (
        <ModalProvider>
            <Modal>
                <ModalTrigger>
                    <div
                        className="
                            flex items-center gap-2
                            px-4 py-2 rounded-full
                            text-black dark:text-white text-center p-6
                            relative overflow-hidden
                            bg-green-300 hover:scale-110
                            transition-all
                        "
                    >
                        <IconPlus />
                        <span>Novo Autiditório</span>
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <FormCadastroAuditorio funcao="cadastrar" />
                    </ModalContent>
                </ModalBody>
            </Modal>
        </ModalProvider>
    )
}