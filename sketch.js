var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pontos;
var bananas;
var limoes;
var maças;
var melancias;
var uvas;

function preload() {
    cenario = loadImage("17a.png");
    banana = loadImage("imagens/banana.png");
    faca = loadImage("imagens/faca.png");
    limao = loadImage("imagens/limao.png");
    maça = loadImage("imagens/maça.png");
    melancia = loadImage("imagens/melancia.png");
    uva = loadImage("imagens/uva.png");
    bomba = loadImage("imagens/bomba.png");
    gameover = loadImage("imagens/gameover.png");
    overSound = loadSound("imagens/gameover.mp3");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    fundo = createSprite(width / 2, height / 2, 50, 50);
    fundo.addImage(cenario);
    fundo.scale = 2.2;
    faca2 = createSprite(250, 250);
    faca2.addImage(faca);
    faca2.scale = 0.25;
    bananas = createGroup();
    limoes = createGroup();
    maças = createGroup();
    melancias = createGroup();
    uvas = createGroup();
    bombas = createGroup();
    gameover2 = createSprite(width / 2, height / 2);
    gameover2.addImage(gameover);
    gameover2.visible = false;
    pontos = 0;
}

function draw() {
    background(123, 88, 61);
    drawSprites();
    if (gameState === PLAY) {
        if (frameCount % 120 === 0) {
            banana2 = createSprite(width / 2, height / 2);
            banana2.addImage(banana);
            banana2.velocityX = Math.round(random(2, 6));
            banana2.velocityY = Math.round(random(-1, -5));
            banana2.lifetime = 800;
            bananas.add(banana2);
        }
        if (frameCount % 180 === 0) {
            limao2 = createSprite(width / 2 + 50, height / 2 - 50);
            limao2.addImage(limao);
            limao2.velocityX = Math.round(random(4, 7));
            limao2.velocityY = Math.round(random(3, 6));
            limao2.lifetime = 800;
            limoes.add(limao2);
        }
        if (frameCount % 60 === 0) {
            maça2 = createSprite(width / 2 - 50, height / 2 + 50);
            maça2.addImage(maça);
            maça2.velocityX = Math.round(random(-5, -8));
            maça2.velocityY = Math.round(random(5, 7));
            maça2.lifetime = 800;
            maças.add(maça2);
        }
        if (frameCount % 210 === 0) {
            melancia2 = createSprite(width / 2 + 100, height / 2 - 100);
            melancia2.addImage(melancia);
            melancia2.velocityX = Math.round(random(-5, -9));
            melancia2.velocityY = Math.round(random(-5, -8));
            melancia2.lifetime = 800;
            melancias.add(melancia2);
        }
        if (frameCount % 150 === 0) {
            uva2 = createSprite(width / 2 - 100, height / 2 + 100);
            uva2.addImage(uva);
            uva2.velocityX = Math.round(random(-9, 9));
            uva2.velocityY = Math.round(random(8, -8));
            uva2.lifetime = 800;
            uvas.add(uva2);
        }
        if (frameCount % 100 === 0) {
            bomba2 = createSprite(width / 2, height / 2);
            bomba2.addImage(bomba);
            bomba2.velocityX = Math.round(random(10, -10));
            bomba2.velocityY = Math.round(random(-11, 11));
            bomba2.lifetime = 800;
            bombas.add(bomba2);
            bomba2.scale = 0.5;
        }

        if (faca2.isTouching(bombas)) {
            gameState = END;
            overSound.play();
        }

        if (bananas.isTouching(faca2)) {
            bananas.destroyEach();
            pontos = pontos + 2;
        }
        if (limoes.isTouching(faca2)) {
            limoes.destroyEach();
            pontos = pontos + 2;
        }
        if (maças.isTouching(faca2)) {
            maças.destroyEach();
            pontos = pontos + 2;
        }
        if (melancias.isTouching(faca2)) {
            melancias.destroyEach();
            pontos = pontos + 2;
        }
        if (uvas.isTouching(faca2)) {
            uvas.destroyEach();
            pontos = pontos + 1;
        }
        faca2.x = World.mouseX;
        faca2.y = World.mouseY;
    } else if (gameState === END) {
        faca2.destroy();
        gameover2.visible = true;
    }

    textSize(45);
    fill("red");
    text("Pontos: " + pontos, width - 1700, height - 600);
}
