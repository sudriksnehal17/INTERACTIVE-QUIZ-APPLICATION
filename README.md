# INTERACTIVE-QUIZ-APPLICATION

 COMPANY : CODETECH IT SOLUTIONS

 NAME : SNEHAL SUDRIK

 INTERN ID : CTIS2304

 DOMAIN : FRONTEND WEB DEVELOPEMENT

 DURATION : 4 WEEKS

 MENTOR : NEELA SANTOSH

HTML 
HTML file quiz application ka basic structure define karti hai. Isme head section ke andar meta tags aur CSS file ka link diya gaya hai jisse webpage responsive aur properly styled ho sake. Body ke andar ek main container div banaya gaya hai jo poore quiz system ko hold karta hai. Is container ke andar teen major sections hain: start screen, quiz screen aur end screen. Start screen me user ke liye settings options diye gaye hain jaise number of questions, category selection, difficulty level aur time per question. Ye section user se input leta hai aur quiz ko initialize karne ka kaam karta hai. Start button ke click hone par ye screen hide ho jati hai aur quiz screen active ho jati hai.
Quiz screen me timer progress bar, current question number, question text aur answer options dynamically show hote hain. Submit aur Next button ke through user answers ko confirm karta hai aur next question par move karta hai. End screen tab show hoti hai jab saare questions complete ho jate hain. Isme final score aur total questions display kiye jate hain saath hi restart button diya jata hai jo quiz ko dobara start karne me madad karta hai. Overall HTML ka role hai application ka structural framework banana aur different sections ko logically organize karna.

CSS 
CSS file quiz application ko attractive aur user-friendly design deti hai. Sabse pehle universal selector ka use karke margin aur padding reset kiya gaya hai taaki layout clean rahe. Body ko flexbox ki madad se center align kiya gaya hai jisse container screen ke beech me dikhe. Container ko fixed width, padding, border-radius aur background color diya gaya hai jisse card-style layout create hota hai. Headings aur labels ko proper font size aur color diya gaya hai taaki readability maintain rahe.
Buttons ko blue background, white text aur hover effect ke saath design kiya gaya hai jisse interactive feel milta hai. Answer options ko box style me design kiya gaya hai jisme hover aur selection effect diya gaya hai. Correct answer green aur wrong answer red color me show hota hai jisse user ko turant feedback milta hai. Timer ke liye progress bar design ki gayi hai jiska width dynamically change hota hai. Hide class ka use screens ko show ya hide karne ke liye kiya gaya hai. CSS ka main role hai UI ko visually appealing banana aur user experience ko improve karna.

JavaScript 
JavaScript file quiz application ka core logic handle karti hai. Isme global variables define kiye gaye hain jaise questions array, currentQuestion index, score counter aur timer variable. Jab user start button click karta hai tab startQuiz function execute hota hai jo Open Trivia API se questions fetch karta hai. Fetch ke through data JSON format me milta hai aur questions array me store hota hai. Uske baad start screen hide hoti hai aur quiz screen display hoti hai. ShowQuestion function current question aur uske answer options ko dynamically generate karta hai aur unhe random order me display karta hai.
Timer function setInterval ka use karke countdown start karta hai aur progress bar update karta hai. Jab user submit button click karta hai ya time khatam hota hai tab checkAnswer function execute hota hai jo selected answer ko correct answer se compare karta hai. Agar answer sahi hota hai to score increment hota hai aur correct option highlight hota hai, warna wrong answer red color me show hota hai. Next button ke through user agle question par move karta hai. Jab saare questions complete ho jate hain tab showScore function final result display karta hai. Restart button page reload karke quiz ko fresh state me la deta hai. JavaScript ka role hai dynamic behavior, API integration, score calculation aur screen control manage karna.


output:
<img width="910" height="902" alt="Image" src="https://github.com/user-attachments/assets/65f76d3e-012b-4c5a-9fe3-5d4852553c99" />
