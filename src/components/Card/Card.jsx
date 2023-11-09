import styled from "@emotion/styled"

const DivEstilizada = styled.div`
    background: ${props => props.theme.cores.secundarias.a};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    border-radius: ${props => props.theme.espacamentos.s};
    margin-top: 80px;
    padding: ${props => props.theme.espacamentos.l};
    width: 588px;
`

export const Card = ({children}) => {
    return(
        <DivEstilizada>
            {children}
        </DivEstilizada>
    )
}