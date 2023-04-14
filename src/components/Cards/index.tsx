import { PremiunCard } from '../PremiunCard'
import { BasicCard, CardsContainer, ContentBottom, Texts } from './styles'
import { Check, Info } from 'phosphor-react'

export function Cards() {
    return (
        <CardsContainer>
            <BasicCard>
                <p>PARA VOCÊ COMEÇAR</p>

                <Texts>
                    <h3>Essetials</h3>

                    <div>
                        <p>R$ <span>19,97</span>/mês</p>
                    </div>
                </Texts>

                <button>Assinar agora</button>

                <ContentBottom>
                    <div>
                        <span><Check size={20} style={{color: '#1B873F'}}/> Até 3 usuários</span>
                        <Info size={20}/>
                    </div>

                    <div>
                        <span><Check size={20} style={{color: '#1B873F'}}/> Autoatendimento</span>
                        <Info size={20} />
                    </div>
                </ContentBottom>
            </BasicCard>

            <PremiunCard />

            <BasicCard>
                <p>PARA SUA EMPRESA</p>

                <Texts>
                    <h3>Enterprise</h3>
                </Texts>

                <button>Fale com a gente</button>

                <ContentBottom>
                    <div>
                        <span><Check size={30} style={{color: '#1B873F'}}/> Plano customizado especialmente para a necessidade de seu negocio</span>
                    </div>
                </ContentBottom>
            </BasicCard>

        </CardsContainer>
    )
}