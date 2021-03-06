import styled from 'styled-components';


export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: var(--maxWidth);
    justify-content: space-between;
    padding:20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width:200px;

    @media screen and (max-width: 500px){
        width: 100px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 150px;

    @media screen and (max-width: 500px){
        width:80px;
    }
`;
