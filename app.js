let Personne=function(sonnom,sonprenom,sonage,sonsexe){
    this.nom=sonnom;
    this.prenom=sonprenom;
    this.age= sonage;
    this.sexe=sonsexe;

this.getinfos=function(){
    return "ma personne s'apelle" + " " + this.nom + " " + this.prenom + "elle a" + " " + this.age + " " + "ans"
}
}

let john= new Personne('John',"doe", 36, "homme")
console.log(john.getinfos);