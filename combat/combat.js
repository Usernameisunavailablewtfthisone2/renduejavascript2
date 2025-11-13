let perso1={
    nom:"simon",
    pv:100,
    precision:0.8,
    attaque:15,
}


let perso2={
    nom:"anti_spiral",
    pv:100,
    precision:0.7,
    attaque:20,
}

function attaque(perso1,perso){
    if (perso1.precision()){
        perso.pv-=perso1.attaque,console.log(perso1.nom,"inflige",perso1.attaque,"dégat à",perso.nom,",il lui reste donc",perso.pv,"pointde vie")}
    else{console.log("l'attaque de ",perso1.nom," a raté")}
}

function precision(perso){
    return Math.random()<perso.precision;
};



while(perso1.pv>0 && perso2.pv>0){
    attaque(perso1,perso2);
        if(perso2.pv>0){
            attaque(perso2,perso1)
                {if(perso2.pv<=0){
                    console.log(perso1.nom,"n'a plus de vie il a donc perdue")
                }}}
        else{console.log(perso1.nom,"n'a plus de vie il a donc perdue")}
}
