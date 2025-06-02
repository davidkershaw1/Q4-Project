
questions=[ ["Sports",["100","200","300","400","500"],["","Most popular sport in the world?","The NHL goal record before Alex Ovechkin broke it"," MLB player widely known as the face of the steroid era and the all time home run leader","This player holds second place on the all time passing yards record only behind Tom Brady","The year the toronto maple leafs last won a stanley cup"],["","soccer","894","barry bonds","drew brees","1967"]], 
            ["Geography",["100","200","300","400","500"],["","This U.S. state has the nickname Lone Star State","This african river is by far the longest in the world"," these 5 lakes make up the great lakes (seperate by comas)", " this city was the capital of Russia before Vladimir Lenin moved it to Moscow","This nation shares the longest border with france despite not being in europe"]["","texas","nile","superior, ontario, michigan, huron, eerie","st petersberg","brazil"]], 
            ["Presidents",["100","200","300","400","500"],["","Which president is most well known for writing the declaration of independence","These 4 presidents have their faces carved into mount rushmore (use last names only seperated by comas)","This president is pictured on the 50 dollar bill","The amount of presidents who called Massachusetts home","This president has their picture on the relatively unknown half dollar coin"],["","jefferson","washington, lincoln, jefferson, roosevelt","grant","kennedy"]],
            ["TV Shows",["100","200","300","400","500"],["","Taking place in Scranton, PA, this show follows the dunder mifflin paper company","A spinoff of another extremely popular show, this show follows a lawyer with an extremely memorable motto","This cartoon has stood as the longest running animated show in America","Butters, Wendy, Craig, and Clyde are all side characters in this very edgy and popular cartoon", "Taking place on long island, this sitcom stars a comedian as himself in one of the most critically acclaimed shows of all time"],["","the office","better call saul","the simpsons","south park","seinfeld"]],
            ["Movies",["100","200","300","400","500"],[""," Actor Cillian Murphy won his first Oscar for best male performance with this historical nonfiction drama directed by Christopher Nolan"," You’ll float to is the main catchphrase of the villain in this horror film","After a major prop malfunction, Director Steven Spielberg turned to shadows and music to create suspense in this 1975 film","This 2011 film portrays an australian party that happened in real life to the big screen taking place in Pasadena California","Matt Damon and Ben Affleck famously wrote the script for this movie for a filmmaking class at Harvard about a janitor at MIT with an intelligence way higher than his job"],["","oppenheimer","it","jaws","project x","good will hunting"]],
             ["BHS Sports",["100","200","300","400","500"],[""," This History teacher coaches the Boys Lacrosse team"," This is the most recent state championship for belmont sports"," Led by quarterback Jayden Arno and Wide receiver Brian logan the 2023 football team only lost one game in league play to this school"," while the hockey rink is being rebuilt, Belmont Hockey called this rink home","The boys basketball team won their most recent championship this year"],["","mr. streit","girls rugby","arlington","john a. ryan","1993"]],
           ["Music",["100","200","300","400","500"],[""," Playboi Carti is known for being very minimal when it comes to announcing new music but he came through on March 14th with this album","This R&B singer dropped critically acclaimed album Blonde in 2016 and has taken a nearly 10 year hiatus from an album","This album from Bruno Mars features songs like ‘Just the way you are’ and ‘Count on Me’"," Luke Combs’ popular cover of the song ‘Fast Car’ was originally sung by this artist","‘Elisabeth’, ‘Summertime Blues’ and a self titled album are all projects from this Country artist"],["","music","frank ocean","doo wops and hooligans","tracy chapman","zach bryan"]]
          ];
// Mix up array


function ask_question(r,c) {
  let user_input = prompt(questions[r][2][c]);
  if (user_input.toUpperCase()== questions[r][3][c].toUpperCase()){
    
    alert("Correct!")
  }
  else{
    alert("Incorrect! "+"The Answer was "+questions[r][3][c])
  }
}

function random_category(){
  for (let i=0; i<200; i++) {
  let j1 = Math.floor(questions.length*Math.random());
  let j2 = Math.floor(questions.length*Math.random());
  let temp = questions[j1]; 
  questions[j1] = questions[j2]; 
  questions[j2] = temp; 
}
let board = document.getElementById("gameboard");
board.innerHTML = `<table>
<tr>
<td>${questions[0][0]}</td>
<td>${questions[1][0]}</td>
<td>${questions[2][0]}</td>
<td>${questions[3][0]}</td>
<td>${questions[4][0]}</td>
</tr>
<tr>
<td onClick="ask_question(0,1)">${questions[0][1][0]}</td>
<td onClick="ask_question(1,1)">${questions[1][1][0]}</td>
<td onClick="ask_question(2,1)">${questions[2][1][0]}</td>
<td onClick="ask_question(3,1)">${questions[3][1][0]}</td>
<td onClick="ask_question(4,1)">${questions[4][1][0]}</td>

</tr>
<tr>
<td onClick="ask_question(0,2)">${questions[0][1][1]}</td>
<td onClick="ask_question(1,2)">${questions[1][1][1]}</td>
<td onClick="ask_question(2,2)">${questions[2][1][1]}</td>
<td onClick="ask_question(3,2)">${questions[3][1][1]}</td>
<td onClick="ask_question(4,2)">${questions[4][1][1]}</td>

</tr>
<tr>
<td onClick="ask_question(0,3)">${questions[0][1][2]}</td>
<td onClick="ask_question(1,3)">${questions[1][1][2]}</td>
<td onClick="ask_question(2,3)">${questions[2][1][2]}</td>
<td onClick="ask_question(3,3)">${questions[3][1][2]}</td>
<td onClick="ask_question(4,3)">${questions[4][1][2]}</td>

</tr>
<tr>
<td onClick="ask_question(0,4)">${questions[0][1][3]}</td>
<td onClick="ask_question(1,4)">${questions[1][1][3]}</td>
<td onClick="ask_question(2,4)">${questions[2][1][3]}</td>
<td onClick="ask_question(3,4)">${questions[3][1][3]}</td>
<td onClick="ask_question(4,4)">${questions[4][1][3]}</td>

</tr>
<tr>
<td onClick="ask_question(0,5)">${questions[0][1][4]}</td>
<td onClick="ask_question(1,5)">${questions[1][1][4]}</td>
<td onClick="ask_question(2,5)">${questions[2][1][4]}</td>
<td onClick="ask_question(3,5)">${questions[3][1][4]}</td>
<td onClick="ask_question(4,5)">${questions[4][1][4]}</td>

</tr>
</table>`
}
function update_score(points){
  let score_div = document.getElementById("score");
  let current_score = Number( score_div.innerHTML );
  let new_score = current_score + points;
  
  document.getElementById("score").innerHTML = new_score;
}

const asked_IDs = []; 
