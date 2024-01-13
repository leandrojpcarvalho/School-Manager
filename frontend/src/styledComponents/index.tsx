import { styled } from "styled-components";

const RESOLVE_STYLE = {
  Biologia: 'CC4090' ,
  Artes: '05A2C2',
  Geografia: 'C26719',
  Sociologia: '9B19C2',
  BiologiaOp: 'CC409033',
  GeografiaOp: 'C2671933',
  SociologiaOp: '9B19C233',
  ArtesOp: '05A2C233',
}



export const PCustom =  styled.p<{$weight?: number, $size?: number, $color?: string }>`
  text-transform: capitalize;
  margin: 0;
  color: ${props => props.$color ? props.$color : '#ECEDEE'};
  font-size: ${props => props.$size ? props.$size : 12}px;
  font-weight: ${props => props.$weight ? props.$weight : 400};
  line-height: ${props => props.$size ? (props.$size > 18 ? 18: props.$size) : 12}px ;
`;

export const Wrapper = styled.div<{$disciplina: keyof typeof RESOLVE_STYLE}>`
  border-radius: 20px;
  background-color: #${props => RESOLVE_STYLE[props.$disciplina]};
  max-width: 157px;
  padding: 16px 0;
  flex-grow: 1;
`;

export const Button = styled.div<{$image: string, $color?: string, $padding?: string}>`
  ${props => props.$image !== '' ? '': 'width: fit-content;' }
  background-color: #${props => props.$color ? props.$color : 'E9FF1A'};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: ${props => props.$padding ? props.$padding : '3px 13px'};
  background-image: url(${props => props.$image});
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid rgba(66, 66, 66, 1);
  border-radius: 12px;
  color: rgba(109, 109, 109, 1);
  padding: 12px 16px;
`;