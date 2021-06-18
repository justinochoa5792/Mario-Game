kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

loadSprite("coin", "./img/undefined - Imgur (1).png");
loadSprite("evil-shroom", "./img/undefined - Imgur (2).png");
loadSprite("brick", "./img/undefined - Imgur (5).png");
loadSprite("block", "./img/undefined - Imgur (20).png");
loadSprite("mario", "./img/undefined - Imgur (6).png");
loadSprite("mushroom", "./img/undefined - Imgur (7).png");
loadSprite("surprise", "./img/undefined - Imgur (9).png");
loadSprite("unboxed", "/img/undefined - Imgur (10).png");
loadSprite("pipe-top-left", "/img/undefined - Imgur (14).png");
loadSprite("pipe-top-right", "/img/undefined - Imgur (13).png");
loadSprite("pipe-bottom-left", "/img/undefined - Imgur (11).png");
loadSprite("pipe-bottom-right", "/img/undefined - Imgur (12).png");

loadSprite("blue-block", "img/undefined - Imgur (19).png");
loadSprite("blue-brick", "img/undefined - Imgur (17).png");
loadSprite("blue-steel", "img/undefined - Imgur (17).png");
loadSprite("blue-evil-shroom", "img/undefined - Imgur (16).png");
loadSprite("blue-surprise", "img/undefined - Imgur (18).png");

scene("game", () => {
  layers(["bg", "obj", "ui"], "obj");

  const map = [
    "                                      ",
    "                                      ",
    "                                      ",
    "                                      ",
    "                                      ",
    "     %   =*=%=                        ",
    "                                      ",
    "                            -+        ",
    "                    ^   ^   ()        ",
    "==============================   =====",
  ];

  const levelCfg = {
    width: 20,
    height: 20,
    "=": [sprite("block"), solid()],
    $: [sprite("coin"), "coin"],
    "%": [sprite("surprise"), solid(), "coin-surprise"],
    "*": [sprite("surprise"), solid(), "mushroom-surprise"],
    "}": [sprite("unboxed"), solid()],
    "(": [sprite("pipe-bottom-left"), solid(), scale(0.5)],
    ")": [sprite("pipe-bottom-right"), solid(), scale(0.5)],
    "-": [sprite("pipe-top-left"), solid(), scale(0.5), "pipe"],
    "+": [sprite("pipe-top-right"), solid(), scale(0.5), "pipe"],
    "^": [sprite("evil-shroom"), solid()],
  };

  const gameLevel = addLevel(map, levelCfg);

  const scoreLabel = add([
    text("test"),
    pos(30, 6),
    layer("ui"),
    {
      value: "test",
    },
  ]);

  add([text("level" + "test", pos(4, 6))]);

  const player = add([
    sprite("mario"),
    solid(),
    pos(30, 0),
    body(),
    origin("bot"),
  ]);
});

start("game");
