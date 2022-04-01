function main(){
    var lastName = "Tesla";
    var lastLetterOfLastName = "";
    lastLetterOfLastName = lastName[lastName.length - 1];

    return lastLetterOfLastName;
    }
    
    console.log(main());
    module.exports = main;