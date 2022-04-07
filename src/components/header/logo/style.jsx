import styled from 'styled-components';

export const StarWars = styled.h1`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div {
        display: flex;
        flex-direction: column;
        min-height: 73px;

        span:nth-child(2) {
            position: absolute;
            bottom: 0;
            left: -0.188rem;
        }

        &::before{
            content: 'casting';
            position: absolute;
            font-size: 1.5rem;
            left: calc(100% + 1rem);
            transform: translateY(50%);
        }
    }
`