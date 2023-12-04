import bn from './Images/bn.png';
import m87 from './Images/m87.png';
import bnv from './Images/bnv.png';
import logo from './Images/logo.png';
import './App.css';
function App() {
  return (
    <div className="HomePage">
      <header id="Artigopg">
        <div className="Menupg">
        <img src={logo} className="menulogo" alt="foto" />
          <h1>CosmosExplorer</h1>
          <div className="menubotoes">
          <ul>
                  <li><a href="https://jacksonfnx.github.io/Projeto-Interfaces/">Início</a> </li>
                  <li><a href="https://jacksonfnx.github.io/Projeto-Interfaces/#Projects">Artigos</a> </li>
                  <li><a href="#Sobre">Sobre</a> </li>
              </ul>
          </div>
        </div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <h1 className="titulopg"><br/>O que são os buracos negros?</h1>
          <div className="container1">
            <div className="Destaquepg">
            <img src={bn} className="foto" alt="foto" />
              <h2>
              O que são os buracos negros?
              </h2>
                <p className ="paragrafopg">
                &nbsp;Um buraco negro é uma região do espaço com um campo gravitacional tão intenso que nem mesmo a luz consegue escapar de dentro dele. A intensa gravidade comprime a matéria até que não haja mais espaço entre os átomos. Corpos celestes dessa natureza podem surgir em decorrência da morte de estrelas supermassivas.
                </p>
                <p className ="paragrafopg">
                &nbsp;A comunidade científica acredita que os buracos negros apresentem dimensões bastante variadas: os menores deles podem apresentar até mesmo o tamanho de um único átomo. Os maiores, por sua vez, podem ter raios de poucos quilômetros e milhões de vezes a massa do Sol. Algumas observações astronômicas já forneceram fortes evidências de que o centro de todas as grandes galáxias é ocupado por um buraco negro supermassivo. No centro da nossa galáxia, a Via Láctea, há um desses, e o seu nome é Sagittarius A.
                </p>
                <h2>Os buracos negros “sugam” tudo ao seu redor?</h2>
                <p className ="paragrafopg">
                &nbsp;Os buracos negros não “sugam” tudo que está a sua volta, no entanto, o seu campo gravitacional pode prender estrelas e planetas longínquos em órbitas espirais. Para que algo seja de fato “sugado” para o interior de um buraco negro, sem qualquer chance de fuga, é necessário que se estabeleça uma distância mínima ao seu centro, chamada de horizonte de eventos. A essa distância, a velocidade de escape, ou seja, a mínima velocidade para se escapar de um buraco negro, é maior que a própria velocidade da luz.
                </p>
                <h2>Deformações no espaço-tempo</h2>
                <p className ="paragrafopg">
                &nbsp;De acordo com a teoria da Relatividade Geral, de Einstein, corpos de massas muito grandes produzem deformações no espaço-tempo. Essa deformação é a responsável pela grande aceleração gravitacional em direção ao centro desses corpos.
                </p>
                <p className ="paragrafopg">
                &nbsp;Além disso, a grande deformação do espaço-tempo torna-o curvo, de forma que a luz que se propaga nas proximidades dos buracos negros não percorre uma linha reta, mas sim uma trajetória curvilínea, pois o próprio espaço na região está deformado, dando origem a um fenômeno chamado de lente gravitacional.
                </p>
                <h2>Aparência do buraco negro</h2>
                <p className ="paragrafopg">
                &nbsp;A primeira foto de um buraco negro foi revelada no dia 10 de abril de 2019 pela Comissão Europeia. A descoberta foi feita pelo telescópio Event Horizon (EHT), um projeto que interligou oito telescópios e teve a colaboração de mais de 200 pesquisadores.
                </p>
                <p className ="paragrafopg">
                &nbsp;O buraco negro revelado foi encontrado no centro da galáxia Messier 87, ou M87, a uma distância de 53 milhões de anos-luz da Terra. Ele mede 40 bilhões de quilômetros de diâmetro, três milhões de vezes o tamanho da Terra, e sua massa é 6,5 bilhões de vezes a do Sol.
                </p>
                <img src={m87} className="foto" alt="foto" />
                <p className ="paragrafopg">
                &nbsp;Antes da descoberta, os buracos negros eram retratados apenas por meio de animações e concepções artísticas. Uma das concepções artísticas que mais chegou próxima da realidade foi feita pela direção de arte do filme Interestelar por meio de cálculos feitos pelo físico Kipp Thorne, sob a direção de Christopher Nolan.
                </p>
                <p className ="paragrafopg">
                &nbsp;Quando um buraco negro atrai para si o conteúdo gasoso da atmosfera de uma estrela próxima, esse gás ganha grande aceleração centrípeta em torno do centro de massa do buraco negro. Com o aumento de velocidade de rotação, é formado o disco de acreção. O gás presente nas estrelas está repleto de cargas elétricas, que, quando aceleradas, produzem ondas eletromagnéticas de todos os comprimentos de onda possíveis, inclusive a luz visível. Dessa forma, em volta de um buraco negro em atividade, deve ser possível observar regiões muito luminosas, de formatos complexos, pois a grande gravidade local deforma o caminho percorrido pela luz emitida pelos gases em rotação.
                </p>
                <h2>Buraco negro no centro da Via Láctea</h2>
                <p className ="paragrafopg">
                &nbsp;No dia 12 de maio de 2022, o telescópio Event Horizon revelou a foto mais nítida do buraco negro supermassivo localizado no centro da Via Láctea, o Sagitário A*. A sua distância com a Terra é de mais de 26 mil anos-luz. O feito envolveu mais de 350 pesquisadores e 11 telescópios espalhados por oito regiões do mundo.
                </p>
                <img src={bnv} className="foto" alt="foto" />
            </div>
          </div>
      </header>
      <div id= "Sobre">
              <h2 className="titulopg">Sobre nós</h2>
              <br/>
              <br/>
              <p>
              Projeto academico da disciplina de Interfaces para Mídias Digitais
              </p>
              <br/>
              <p>
              Jackson Galdino 26423375
              </p>
              <br/>
              <p>
              Discord: fnx_
              </p>
              <br/>
              <p>
              Email: jacksonfnx@gmail.com
              </p>
              <br/>
              <p>
              GitHub /JacksonFNX
              </p>
      </div>
    </div>
  );
}

export default App;
