export interface FormCadastroAuditorioProps {
    funcao: string;
}

export default function FormCadastroAuditorio(props: FormCadastroAuditorioProps) {
    // Este componente será reutilizado para criar um novo auditório ou editar um auditório existente
    return props.funcao === "cadastrar" ? (
        <form className="flex flex-col items-center gap-3">

            <h4 className="font-bold text-2xl">Cadastrar Novo Auditório</h4>

            <div
                className="
                    flex flex-col gap-2 w-full
                "
            >
                <label htmlFor="nome">Nome:</label>
                <input className="py-2 px-3 bg-zinc-200 rounded-md" type="text" id="nome" />
                <label htmlFor="capacidade">Capacidade:</label>
                <input className="py-2 px-3 bg-zinc-200 rounded-md" type="text" id="capacidade" />
                <label htmlFor="local">Localização:</label>
                <input className="py-2 px-3 bg-zinc-200 rounded-md" type="text" id="local" />
                <label htmlFor="recursos">Recursos:</label>
                <textarea rows={6} cols={30} name="recursos" className="resize-none py-2 px-3 bg-zinc-200 rounded-md" id=""></textarea>

                <div
                    className="
                                flex flex-col w-full justify-center
                                items-center gap-2 mt-3
                            "
                >

                    <button
                        className="
                                    flex items-center gap-2 justify-center
                                    px-4 py-2 rounded-md
                                    text-black dark:text-white text-center p-6
                                    relative overflow-hidden
                                    bg-green-300 hover:scale-[1.02]
                                    transition-all w-full 
                                "
                    >
                        <span>Cadastrar auditório</span>
                    </button>
                </div>

            </div>
        </form>
    ) : (
        <form className="flex flex-col items-center gap-3">
            <h4 className="font-bold text-2xl">Editar Auditório</h4>

            <div
                className="
                    flex flex-col gap-2 w-full
                "
            >
                <label htmlFor="nome">Nome:</label>
                <input className="py-2 px-3 bg-zinc-200 rounded-md" type="text" id="nome" />
                <label htmlFor="capacidade">Capacidade:</label>
                <input className="py-2 px-3 bg-zinc-200 rounded-md" type="text" id="capacidade" />
                <label htmlFor="local">Localização:</label>
                <input className="py-2 px-3 bg-zinc-200 rounded-md" type="text" id="local" />
                <label htmlFor="recursos">Recursos:</label>
                <textarea rows={6} cols={30} name="recursos" className="resize-none py-2 px-3 bg-zinc-200 rounded-md" id=""></textarea>

                <div
                    className="
                                flex flex-col w-full justify-center
                                items-center gap-2 mt-3
                            "
                >

                    <button
                        className="
                                    flex items-center gap-2 justify-center
                                    px-4 py-2 rounded-md
                                    text-black dark:text-white text-center p-6
                                    relative overflow-hidden
                                    bg-blue-300 hover:scale-[1.02]
                                    transition-all w-full 
                                "
                    >
                        <span>Salvar alterações</span>
                    </button>
                </div>

            </div>
        </form>
    )
}