

module.exports = function parseStringToArray(arrayString){
     //transformando as techs em array
    
    return arrayString.split(',').map(tech => tech.trim()//vai remover os espaços em branco
    )//cortar a string toda vez que tiver uma virgula

}