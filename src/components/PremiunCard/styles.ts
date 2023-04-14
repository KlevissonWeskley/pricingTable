import styled from 'styled-components'

export const PremiunCardContent = styled.div`
    width: 24rem;
    height: 28rem; 
    padding: 3rem 2rem 7rem 2rem;
    background: #0F172A;
    color: #fff;
    border-radius: 10px;

    p {
        color: #996DFF;
    }

    button {
        background: #996DFF;
        color: #fff;
        width: 20rem;
        height: 3.5rem;
        margin-bottom: 4rem;
        font-weight: bold;
        border: 2px solid #1E293B;
        transition: .3s ease;

        &:hover {
            background: #7C3AED;
        }
        
    }
`

export const TextsPremiun = styled.div`
    color: #F8FAFC;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4.6rem;
    margin-bottom: 2rem;

    h3 {
        font-size: 2rem;
        font-weight: bold;
    }

    p {
        color: #F8FAFC;
        font-weight: 300;
    }

    span {
        font-weight: bold;
        font-size: 1.5rem;
    }
`

export const Tag = styled.div`
    position: absolute;
    margin-left: 5.4rem;
    margin-top: -4.2rem;
    width: 9rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FBA94C;
    color: #000;
    border-radius: 6px;
    font-weight: bold;
`