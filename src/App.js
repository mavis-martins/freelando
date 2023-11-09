import { CampoText } from "./components/CampoTexto/CampoTexto";
import { Card } from "./components/Card/Card";
import { Estilos } from "./components/GlobalStyles/Estilos";
import { Header } from "./components/Header/Header";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Tipografia } from "./components/Tipografia/Tipografia";


function App() {
  return (
    <ProvedorTema>
      <Estilos/>
      <Header/>
      <Card>
        <Tipografia componente='h1' variante='h1'>
          Crie seu cadastro
        </Tipografia>
        <Tipografia componente='body' variante='body'>
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. 
          Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. 
        </Tipografia>
        <CampoText titulo='Nome Completo'/>
      </Card>
    </ProvedorTema>
  );
}

export default App;
