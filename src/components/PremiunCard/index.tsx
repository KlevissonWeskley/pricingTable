import { ContentBottom, LineCheck } from "../Cards/styles";
import { PremiunCardContent, Tag, TextsPremiun } from "./styles";
import { Check, Info } from 'phosphor-react'

export function PremiunCard() {
    return (
        <PremiunCardContent>
            <Tag>
                MAIS VANTAJOSO
            </Tag>
            
            <p>PARA VOCÊ DECOLAR</p>

            <TextsPremiun>
                <h3>Ultimate</h3>

                <div>
                    <p>R$ <span>29,97</span>/mês</p>
                </div>
            </TextsPremiun>

            <button>Assinar agora</button>

            <ContentBottom>
                <LineCheck>
                    <span><Check size={20} style={{color: '#1B873F'}}/> Usuários ilimitados</span>
                    <Info size={20} style={{color: '#64748B'}}/>
                </LineCheck>

                <LineCheck>
                    <span><Check size={20} style={{color: '#1B873F'}}/> Suporte 24/7</span>
                    <Info size={20} style={{color: '#64748B'}}/>
                </LineCheck>

                <LineCheck>
                    <span><Check size={20} style={{color: '#1B873F'}}/> CSM Dedicado</span>
                    <Info size={20} style={{color: '#64748B'}}/>
                </LineCheck>

                <LineCheck>
                    <span><Check size={20} style={{color: '#1B873F'}}/> Treinamentos</span>
                    <Info size={20} style={{color: '#64748B'}}/>
                </LineCheck>
            </ContentBottom>
        </PremiunCardContent>
    )
}