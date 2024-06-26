import React from 'react'
import imagensArray from '../../Imagens'
function Tela_cliente() {
    return (
        <div>
            <div id="conteudo" class="roxo">
                <h1 id="titulo_um">ViverBem+</h1>
                <div id="menu">
                    <a href="pagina_inicial.html"><b>Página inicial</b></a>
                    <a href="login.html"><b>Login</b></a>

                    <div id="profissionais">
                        <h1>Profissionais</h1>
                    </div>

                </div>

                <div class="grid-container">
                    <div id="laura">
                        <img src={imagensArray.laura} alt="" />
                        <div><b>Laura Castro</b></div>
                        <div>Tempo de experiência: 1 ano e 2 meses </div>
                        <div>Cidade: Serra - ES</div>


                        <div id="gabriel">
                            <img src={imagensArray.gabriel} alt="" />
                            <div><b>Gabriel Lopes</b></div>
                            <div>Tempo de experiência: 2 anos e 4 meses </div>
                            <div>Cidade: Cariacica - ES</div>
                        </div>

                        <div id="benjamin">
                            <img src={imagensArray.ben} alt="" />
                            <div><b>Benjamin Duarte</b></div>
                            <div>Tempo de experiência: 6 meses </div>
                            <div>Cidade: Colatina - ES</div>

                        </div>

                        <div id="luisa">
                            <img src={imagensArray.luisa} alt="" />
                            <div><b>Benjamin Duarte</b></div>
                            <div>Tempo de experiência: 3 anos e 6 meses </div>
                            <div>Cidade: Vila Velha - ES</div>
                        </div>

                        <div id="maite">
                            <img src={imagensArray.maite} alt="" />
                            <div><b>Maitê Vieira </b></div>
                            <div>Tempo de experiência: 9 meses </div>
                            <div>Cidade: Domingos Martins - ES</div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tela_cliente