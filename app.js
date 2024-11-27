/**
 * Sorteio de uma carta
 * Exemplo de uso de um vetor
 * @author Professor José de assis
 */

function sortear() {
    let nipes= ['♥','♦','♣','♠']
    let faces= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    // Sorteio do índice do vetor
    let nipeSorteado = nipes[Math.floor(Math.random() *4)]   // sorteia 0,1,2,3 "nipes"
    let faceSorteada = faces[Math.floor(Math.random() *13)]  // sorteia "faces"

    //console.log(`${faceSorteada} de ${nipeSorteado}`)
}

