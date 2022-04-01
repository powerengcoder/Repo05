function main(){
    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";

    wordBlanks = "She lost her " + myNoun + " which is very " + myAdjective + " and he escaped " + myAdverb + " because he " + myVerb + " like a Bolt."  
    return wordBlanks;
    }
    
    console.log(main());
    module.exports = main;