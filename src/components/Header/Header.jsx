import styled from "@emotion/styled";


const HeaderEstilizado = styled.header`
    align-items: center;
    background: ${props => props.theme.cores.primarias.a};
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.espacamentos.m} 120px;
    width: 1440px;
`

export const Header = ({children}) => {
    return(
        <HeaderEstilizado>
            {children}
        </HeaderEstilizado>
    )
}