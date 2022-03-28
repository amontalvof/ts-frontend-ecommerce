import styled from 'styled-components';

export const BarraSuperior = styled.div`
    background: black;

    .redSocial {
        text-align: center;
        margin: 0 1px;
    }

    /*FACEBOOK*/

    .facebookBlanco {
        color: white;
        width: 20px;
        height: 20px;
    }

    .facebookNegro {
        color: black;
        width: 20px;
        height: 20px;
    }

    .facebookColor {
        color: white;
        background: #46639f;
        width: 20px;
        height: 20px;
    }

    /*INSTAGRAM*/

    .instagramColor {
        color: white;
        background: linear-gradient(45deg, #fca925, #ee1d5f, #6350a2);
        width: 22px;
        height: 22px;
    }

    .instagramBlanco {
        color: white;
        width: 22px;
        height: 22px;
    }

    .instagramNegro {
        color: black;
        width: 22px;
        height: 22px;
    }

    @media (max-width: 767px) {
        border-top: 1px solid #222;
    }
`;

export const StyledIconsUl = styled.ul`
    list-style-type: none;
    padding-top: 8px;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

export const StyledIconsLi = styled.li`
    margin: 0px 5px;
    color: white;
`;

export const StyledLinkUl = styled.ul`
    display: flex;
    padding-top: 10px;
    list-style-type: none;
    text-align: right;
    font-size: 14px;
    align-items: center;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

export const StyledLinkLi = styled.li`
    margin: 0px 5px;
    color: white;
`;

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
