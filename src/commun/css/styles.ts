import styled from "styled-components";
import imageGasStation from '../../assets/gas-station.jpg'
import { FiSettings } from 'react-icons/fi';

export const Title = styled.h1`
    padding-top: 10px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 48;
    color: ${props=>props.theme.colorGray10};
`;

export const Container = styled.div`
    background: url(${imageGasStation});
    height: 100vh;
`;

export const SettingsIcon = styled(FiSettings)`
    color: ${(props) => props.theme.colorGray1 };
    font-size: 32px;
    cursor: pointer;

    position: absolute;
    top: 20px;
    right: 20px;
`;