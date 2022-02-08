function start() {
    $("#inicio").hide();

    // Cria e vincula ao fundo do jogo as divs que
    // representam o placar, a energia do jogador, o
    // jogador, o amigo e inimigos
    $("#fundoGame").append('<div id="jogador" class="anima1"></div>');
    $("#fundoGame").append('<div id="inimigo1" class="anima2"></div>');
    $("#fundoGame").append('<div id="inimigo2"></div>');
    $("#fundoGame").append('<div id="amigo" class="anima3"></div>');
    $("#fundoGame").append("<div id='placar'></div>");
    $("#fundoGame").append("<div id='energia'></div>");

    //PRINCIPAIS VÁRIAVEIS DO JOGO

    // Váriavel que define se o jogo continua ou não
    var fimdejogo = false;
    // Variável que armazenada a vida atual do jogador
    var energiaAtual = 3;

    // PONTUAÇÃO DO JOGADOR

    // Variável que armazena os pontos obtidos
    // pelo jogador, sendo somado ao acertar
    // disparos em inimigos
    var pontos = 0;
    // Variável que armazena a quantidade de
    // aliados salvos pelo jogador
    var salvos = 0;
    // Variável que armazena a quantidade de
    // aliados que não foram salvos pelo jogador
    var perdidos = 0;

    // Variável que define a  do inimigo
    // 1
    var velocidadeInimigo01 = 5;
    // Variável que define se o usuário pode
    // ou não realizar um disparo
    var podeAtirar = true;

    // Variável responsável por armazenar algumas
    // informações importantes do jogo, sendo as
    // teclas que o jogador pressionou e o tempo
    // definido para criar o loop do jogo
    var jogo = {}
    // Array responsável por armazenar as teclas
    // que o jogador pressionou
    jogo.pressionou = [];

    // Variável que armazena os valores decimais
    // das teclas do teclado que serão utilizados
    // pelo jogador para realizar algumas ações
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    }

    // Variável utilizada pra armazenar um valor
    // randomico para reposicionar o inimigo 1
    var posicaoY = parseInt(Math.random() * 334);

    // Váriaveis que armazenam no javascript os audios
    // utlizados pelo jogo
    var somDisparo = document.getElementById("somDisparo");
    var somExplosao = document.getElementById("somExplosao");
    var musica = document.getElementById("musica");
    var somGameover = document.getElementById("somGameover");
    var somPerdido = document.getElementById("somPerdido");
    var somResgate = document.getElementById("somResgate");

    // Música em loop
    // Cria um "escutador" que identifica quando a musica
    // de fundo terminou, chamando uma função que fara com
    // que a música recomeçe novamente, enquanto o jogo
    // não for finalizado
    musica.addEventListener("ended", function () { musica.currentTime = 0; musica.play(); }, false);
    // Executa a música do começo
    musica.play();

    // Verifica se o jogador pressionou alguma tecla	
    $(document).keydown(function (e) {
        jogo.pressionou[e.which] = true;
    });

    // Verifica se o jogador deixou de pressionar
    // alguma tecla
    $(document).keyup(function (e) {
        jogo.pressionou[e.which] = false;
    });

    // Game Loop - Cria um timer que a cada 30
    // milisegundos executa a função loop
    jogo.timer = setInterval(loop, 30);

    // Função responsável por manter o jogo
    // executando, enquanto estiver sendo
    // invocada
    function loop() {
        // Chama a função responsável por
        // animar o fundo do jogo
        movefundo();

        // Chama a função responsável que
        // ouve as teclas que o jogador
        // está pressionando e move no jogo
        movejogador();

        // Chama a função responsável por
        // animar o inimigo 01
        moveInimigo01();

        // Chama a função responsável por
        // animar o inimigo 02
        moveInimigo02();

        // Chama a função responsável por
        // animar o aliado
        moveAmigo();

        // Chama a função responsável por
        // identificar a colisão do
        // jogador, inimigos e aliados
        colisao();

        // Chama a função responsável por
        // montar e exibir o placar com a
        // pontuação atual do jogador
        placar();

        // Chama a função responsável por
        // montar e exibir a energia atual
        // do jogador 
        energia();
    }

    // Função responsável por montar o placar
    // jogador com a pontuação atual do mesmo
    function placar() {
        $("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");
    }

    // Função responsável por montar barra de energia
    // do jogador, verificando a partir da energia
    // atual do jogador
    function energia() {
        switch (energiaAtual) {
            case 3:
                $("#energia").css("background-image", "url(imgs/energia3.png)");
                break;
            case 2:
                $("#energia").css("background-image", "url(imgs/energia2.png)");
                break;
            case 1:
                $("#energia").css("background-image", "url(imgs/energia1.png)");
                break;
            case 0:
                $("#energia").css("background-image", "url(imgs/energia0.png)");

                // Se a energia do jogador for igual
                // a 0, chama a função responsável
                // por finalizar o jogo
                gameOver();
                break;
        }
    }

    // Função que movimenta o fundo do jogo
    function movefundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda - 1);
    }

    //Função que movimenta o jogador
    function movejogador() {
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);

            if (topo <= 0) {
                $("#jogador").css("top", topo + 10);
            }
        }

        if (jogo.pressionou[TECLA.S]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);

            if (topo >= 434) {
                $("#jogador").css("top", topo - 10);
            }
        }
        if (jogo.pressionou[TECLA.D]) {
            //Chama função Disparo
            disparo();
        }
    }

    // Função que movimenta o amigo
    function moveAmigo() {
        posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left", posicaoX + 1);

        if (posicaoX > 906) {
            $("#amigo").css("left", 0);
        }
    }

    // Função que movimenta o inimigo 1
    function moveInimigo01() {
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", posicaoX - velocidadeInimigo01);
        $("#inimigo1").css("top", posicaoY);

        if (posicaoX <= 0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
        }
    }

    // Função que movimenta o inimigo 1
    function moveInimigo02() {
        posicaoX = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left", posicaoX - 3);

        if (posicaoX <= 0) {
            $("#inimigo2").css("left", 775);
        }
    }

    // Função que cria e executa o disparo
    function disparo() {
        if (podeAtirar == true) {
            somDisparo.play();
            podeAtirar = false;

            topo = parseInt($("#jogador").css("top"))
            posicaoX = parseInt($("#jogador").css("left"))
            tiroX = posicaoX + 190;
            topoTiro = topo + 37;
            $("#fundoGame").append("<div id='disparo'></div");
            $("#disparo").css("top", topoTiro);
            $("#disparo").css("left", tiroX);

            var tempoDisparo = window.setInterval(executaDisparo, 30);
        }

        function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left", posicaoX + 15);

            if (posicaoX > 900) {
                window.clearInterval(tempoDisparo);
                tempoDisparo = null;
                $("#disparo").remove();
                podeAtirar = true;
            }
        }
    }

    function colisao() {
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        var colisao2 = ($("#jogador").collision($("#inimigo2")));
        var colisao3 = ($("#disparo").collision($("#inimigo1")));
        var colisao4 = ($("#disparo").collision($("#inimigo2")));
        var colisao5 = ($("#jogador").collision($("#amigo")));
        var colisao6 = ($("#inimigo2").collision($("#amigo")));

        // jogador com o amigo
        if (colisao5.length > 0) {
            salvos++;
            somResgate.play();

            reposicionaAmigo();
            $("#amigo").remove();
        }

        //Inimigo2 com o amigo
        if (colisao6.length > 0) {
            perdidos++;

            amigoX = parseInt($("#amigo").css("left"));
            amigoY = parseInt($("#amigo").css("top"));
            explosao3(amigoX, amigoY);
            $("#amigo").remove();

            reposicionaAmigo();
        }

        // Disparo com o inimigo1
        if (colisao3.length > 0) {
            pontos = pontos + 100;
            velocidadeInimigo01 = velocidadeInimigo01 + 0.3;

            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));

            explosao1(inimigo1X, inimigo1Y);
            $("#disparo").css("left", 950);

            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
        }

        // Disparo com o inimigo2
        if (colisao4.length > 0) {
            pontos = pontos + 50;

            inimigo2X = parseInt($("#inimigo2").css("left"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            $("#inimigo2").remove();

            explosao2(inimigo2X, inimigo2Y);
            $("#disparo").css("left", 950);

            reposicionaInimigo2();
        }

        // jogador com o inimigo1
        if (colisao1.length > 0) {
            energiaAtual--;

            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
            explosao1(inimigo1X, inimigo1Y);

            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
        }

        // jogador com o inimigo2 
        if (colisao2.length > 0) {
            energiaAtual--;

            inimigo2X = parseInt($("#inimigo2").css("left"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            explosao2(inimigo2X, inimigo2Y);

            $("#inimigo2").remove();

            reposicionaInimigo2();
        }
    }

    //Reposiciona Amigo
    function reposicionaAmigo() {
        var tempoAmigo = window.setInterval(reposiciona6, 6000);

        function reposiciona6() {
            window.clearInterval(tempoAmigo);
            tempoAmigo = null;

            if (fimdejogo == false) {
                $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
            }
        }
    }

    //Reposiciona Inimigo2
    function reposicionaInimigo2() {
        var tempoColisao4 = window.setInterval(reposiciona4, 5000);

        function reposiciona4() {
            window.clearInterval(tempoColisao4);
            tempoColisao4 = null;

            if (fimdejogo == false) {
                $("#fundoGame").append("<div id=inimigo2></div");
            }
        }
    }

    //Explosão 1
    function explosao1(inimigo1X, inimigo1Y) {
        somExplosao.play();

        $("#fundoGame").append("<div id='explosao1'></div");
        $("#explosao1").css("background-image", "url(imgs/explosao.png)");
        var div = $("#explosao1");
        div.css("top", inimigo1Y);
        div.css("left", inimigo1X);
        div.animate({ width: 200, opacity: 0 }, "slow");

        var tempoExplosao = window.setInterval(removeExplosao, 1000);

        function removeExplosao() {
            div.remove();
            window.clearInterval(tempoExplosao);
            tempoExplosao = null;
        }
    }

    //Explosão2
    function explosao2(inimigo2X, inimigo2Y) {
        somExplosao.play();

        $("#fundoGame").append("<div id='explosao2'></div");
        $("#explosao2").css("background-image", "url(imgs/explosao.png)");
        var div2 = $("#explosao2");
        div2.css("top", inimigo2Y);
        div2.css("left", inimigo2X);
        div2.animate({ width: 200, opacity: 0 }, "slow");

        var tempoExplosao2 = window.setInterval(removeExplosao2, 1000);

        function removeExplosao2() {
            div2.remove();
            window.clearInterval(tempoExplosao2);
            tempoExplosao2 = null;
        }
    }

    //Explosão3
    function explosao3(amigoX, amigoY) {
        somPerdido.play();

        $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
        $("#explosao3").css("top", amigoY);
        $("#explosao3").css("left", amigoX);
        var tempoExplosao3 = window.setInterval(resetaExplosao3, 1000);

        function resetaExplosao3() {
            $("#explosao3").remove();
            window.clearInterval(tempoExplosao3);
            tempoExplosao3 = null;
        }
    }

    //Função GAME OVER
    function gameOver() {
        fimdejogo = true;
        musica.pause();
        somGameover.play();

        window.clearInterval(jogo.timer);
        jogo.timer = null;

        $("#jogador").remove();
        $("#inimigo1").remove();
        $("#inimigo2").remove();
        $("#amigo").remove();

        $("#fundoGame").append("<div id='fim'></div>");

        $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
    }
}

//Reinicia o Jogo
function reiniciaJogo() {
    somGameover.pause();
    $("#fim").remove();
    start();
}