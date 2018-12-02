window.onload = () => {
  
    const numbersAction = document.getElementById('numbers-action')
    const languageNamesAction = document.getElementById('tech-language-names-action')
    const techLanguagePopularityAction =document.getElementById('tech-language-popularity-action')

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        for (let number of numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }    
    };
    languageNamesAction.onclick = () => {
        const languageNamesDisplay= document.getElementById('tech-language-names-display');
        for (let languageName of languageNames) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(languageName));
            languageNamesDisplay.appendChild(li);
        }
    };
    techLanguagePopularityAction.onclick = () => {
        const techLanguagePopularityDisplay= document.getElementById ('tech-language-popularity-display');
        for (let techLanguagePopularity of techlanguagePopularity) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(techLanguagePopularity.language + ' ' + getRank(techLanguagePopularity)));
            techLanguagePopularityDisplay.appendChild(li);
   } 
}

   const numbers = 
   [15, 14, 13,12,11,10,9,8,7,6,5 ]
   console.log(numbers);

   const languageNames = ['JavaScript','HTML', 'CSS','Java','C# ', 'Python','C/C++'];
   languageNames.sort();

 const techlanguagePopularity= [{
   language: 'JavaScript',
   rank: 1
   },
   {
       language:  'HTML' ,
       rank: 2 
   },
   {
       language: 'CSS',
       rank: 3
   },
   {
       language: 'Java',
       rank:4
   },
   {
       language: 'Python',
       rank: 5

   },
   {
       language: 'C#',
       rank: 6
   },
   {
       language: 'C/C++',
       rank: 7
   }
 ]
   function getRank(techlanguagePopularity){
    return techlanguagePopularity.rank;
}

console.log(techlanguagePopularity)
};


  