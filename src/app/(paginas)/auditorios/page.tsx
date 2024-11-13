import BotaoAdicionarAuditorio from "@/components/BotaoAdicionarAuditorio";
import CartaoAuditorio from "@/components/CartaoAuditorio";

export default function Auditorios() {
    return (
        <div className="h-screen">
            <div>
                <CartaoAuditorio />
            </div>

            <div className="absolute bottom-7 right-10">
                <BotaoAdicionarAuditorio />
            </div>
        </div>
    )
}