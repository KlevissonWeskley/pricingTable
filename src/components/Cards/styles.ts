import styled from 'styled-components'

export const CardsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const BasicCard = styled.div`
    width: 24rem;
    height: 28rem;  
    border-radius: 10px;
    border: 2px solid transparent;
    padding: 3rem 2rem 7rem 2rem;

    p {
        color: #7C3AED;
        font-weight: 600;
    }

    button {
        width: 20rem;
        height: 3.5rem;
        margin-bottom: 4rem;
        font-weight: bold;
        border: 2px solid #1E293B;
        transition: .3s ease;

        &:hover {
            background: #1E293B;
            color: #fff;
        }
    }

    &:hover {
        border: 2px solid #7C3AED;
        padding: 3rem 2rem 7rem 2rem;
    }
`

export const Texts = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4.6rem;
    margin-bottom: 2rem;

    h3 {
        font-size: 2rem;
        font-weight: bold;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
            color: #000;
            font-weight: bold;
            font-size: 1.5rem;
        }

        p {
            color: #000;
            font-weight: 600;
        }
    }
` 

export const ContentBottom = styled.div`
    div {
        display: flex;
        justify-content: space-between;

        span {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
`

export const LineCheck = styled.div`
    margin-bottom: 1rem;
        span {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #CBD5E1;
        }
`