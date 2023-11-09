import styled from "@emotion/styled"

const componentes = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    bodyBold: 'strong',
    body2: 'p',
    body2Bold: 'strong',
    legenda: 'p'
}

const estilos = {
    h1: `
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;    
    `,
    h2:`
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    `,
    h3: `
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    body: `
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    bodyBold:`
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    body2:`
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    body2Bold:`
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    legenda:`
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    legenda2:`
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
    `
}

export const Tipografia = ({variante, componente, children}) => {

    const tag = componentes[componente]
    const ComponenteUtilizado = styled[tag]`${estilos[variante]}`

    return(
        <ComponenteUtilizado>
            {children}
        </ComponenteUtilizado>
    )
}