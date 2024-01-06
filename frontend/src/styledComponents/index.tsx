import { styled } from "styled-components";
import { Disciplina } from "../../shared/enums";

const RESOLVE_STYLE = {
  Biologia: 'CC4090' ,
  Artes: '05A2C2',
  Geografia: 'C26719',
  Sociologia: '9B19C2',
}


export const PCustom =  styled.p<{$weight?: number, $size?: number, $color?: string }>`
  text-transform: capitalize;
  margin: 0;
  color: ${props => props.$color ? props.$color : '#ECEDEE'};
  font-size: ${props => props.$size ? props.$size : 12}px;
  font-weight: ${props => props.$weight ? props.$weight : 400};
  line-height: ${props => props.$size}px ;
`;

export const Wrapper = styled.div<{$disciplina: keyof typeof Disciplina}>`
  border-radius: 20px;
  background-color: #${props => RESOLVE_STYLE[props.$disciplina]};
  display: flex;
  flex-direction: column;
  max-width: 157px;
  padding: 16px 0;
  flex-grow: 1;
`;

export const Button = styled.div<{$image: string}>`
  background-color: #E9FF1A;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  max-width: 58px;
  padding: 16px 32px;
  background-image: url(${props => props.$image});
  background-position: center;
  background-repeat: no-repeat;
`;
