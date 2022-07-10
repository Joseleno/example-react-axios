import styled from "styled-components";
import imageGasStation from '../../assets/gas-station1.jpg'
import { FiSave, FiSettings } from 'react-icons/fi';

export const Title = styled.h1`
    padding-top: 10px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 48;
    color: ${props=>props.theme.colorGray10};
`;

export const Container = styled.div`
    height: 100vh;
    background: url(${imageGasStation});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const SettingsIcon = styled(FiSettings)`
    color: ${(props) => props.theme.colorGray1 };
    font-size: 32px;
    cursor: pointer;

    position: absolute;
    top: 20px;
    right: 20px;
`;

export const Panel = styled.section`
    background-color: ${(props) => props.theme.colorGray1};
    width: 300px;
    height: 450px;
    border-radius: 5px;
    position: relative;
    left: calc(100vw - 350px);
    margin-top: 60px;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorBlue};
    width: 135px;
    height: 65px;
    border-radius: 5px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
`;

export const FuelText = styled.span`
    color: ${(props) => props.theme.colorWhite};
    font-size: 1.5rem;
    text-align: center;
`;

export const FuelPrice = styled.span`
    color: ${(props) => props.theme.colorYellow};
    font-family: "Digital-7 Mono", sans-serif;
    font-size: 3.5rem;
    text-align: left;
`;

export const EditionText = styled.span`
    color: ${(props) => props.theme.colorBlue};
    font-size: 1.1rem;
    text-align: left;
    align-items: left;
`;

export const SaveButton = styled.button`
    background-color: ${(props => props.theme.colorBlue)};
    border:  none;
    color: ${(props => props.theme.colorWhite)};
    font-size: 1.2rem;
    padding: 10px;
    text-align: center;
    border-radius: 5px;    
    cursor: pointer;
    display:flex;
    align-items: center;

    & > span {
        margin-left: 10px;
    }

    &:hover {
        filter: brightness(0.8);
    }
`;

export const SaveIcon = styled(FiSave)`
    color: ${(props) => props.theme.colorWhite};
    font-size: 30px;
`;