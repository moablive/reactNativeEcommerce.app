import styled from "styled-components/native";

interface ContainerButtonProps {
    margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
    width: 100%;
    height: 50px;
    padding: 16px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: #323d65;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;