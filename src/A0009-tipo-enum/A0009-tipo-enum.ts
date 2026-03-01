enum Colors {
  VERMELHO = 10,
  AZUL = 20,
  ROSA = 30,
}

enum Colors {
  VERDE = 40,
  AMARELO = 50,
  ROXO = 60,
}

function pickColor(color: Colors): void {
  console.log(Colors[color]);
}

pickColor(60);
