let playername = "Yasker"
let playerXp = 4580
let playerNivel = ""

  if(playerXp <= 1000){
  playerNivel = "Ferro"
  }
  
  else if (playerXp <= 2000){
    playerNivel = "Bronze"
  }
  
 
 else if (playerXp <= 5000){
   playerNivel = "Prata"
  }
   
 else if (playerXp <= 7000){
   playerNivel = "Ouro"
  }
   
 else if (playerXp <= 8000){
   playerNivel = "Platina"
 }
   
 else if (playerXp <= 9000){
   playerNivel = "Ascendente"
 }
   
 else if (playerXp <= 10000){
   playerNivel = "Imortal"
 }
 
  else{
   playerNivel = "Radiante"
  }

console.log("O herói " + playername + " está no nível "+ playerNivel)