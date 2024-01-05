import { styled } from "styled-components";


export const PCustom =  styled.p<{$weight?: number, $size?: number, $color?: string }>`
text-transform: capitalize;
margin: 0;
color: ${props => props.$color ? props.$color : 'white'};
font-size: ${props => props.$size ? props.$size : 12}px;
font-weight: ${props => props.$weight ? props.$weight : 400};
line-height: ${props => props.$size}px ;
`;



