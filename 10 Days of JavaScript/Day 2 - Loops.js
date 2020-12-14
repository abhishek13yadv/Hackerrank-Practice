function vowelsAndConsonants(s) {
    var vowels = ['a','e','i','o','u'];
    var consonants = "";
    var vowel_array = [];
    
    for(var i=0;i<s.length;i++)
    {
        if(vowels.indexOf(s[i])!==-1)
            console.log(s[i]);
        else
            consonants+=s[i]+'\n';
    }
    console.log(consonants);
}
