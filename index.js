
const alunos = [
{id:1, name: "Ana",Bim1: 5.0, Bim2: 4.0, Bim3: 6.0,Bim4:7.0, media:10.0},
{id:2, name: "Flávia",Bim1: 3.0, Bim2: 6.0, Bim3: 9.0,Bim4:4.0, media:7.0},
{id:3, name: "Júlio",Bim1: 10.0, Bim2: 10.0, Bim3: 10.0,Bim4:10.0, media:10.0},
{id:4, name: "Pedro",Bim1: 8.0, Bim2:8.0, Bim3: 8.0,Bim4:7.0, media:8.0},
]

alunos.forEach(notas =>{
 var media = ( notas.Bim1 + notas.Bim2 + notas.Bim3 + notas.Bim4)/4;
 notas.media = media;


 if (notas.media ==10){
     console.log(`${notas.id} ${notas.name} ${notas.media} Parabéns! Você é um aluno exemplar`);
 }
 else if( notas.media >=7){
    console.log(`${notas.id} ${notas.name} ${notas.media} Parabéns! Você foi aprovado!`);
 }
else{
    console.log(`${notas.id} ${notas.name} ${notas.media} Você está de recuperação`);
}


});





