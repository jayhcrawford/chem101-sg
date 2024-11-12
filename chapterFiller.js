const submitButton = document.getElementById('submit-btn');
const warning = document.getElementById('warning-span');
let submission = document.getElementById('MarkdownArea')





/* textarea to user-body textContent functionality*/
document.getElementById('user-body').textContent = document.getElementById('revision-input').value
function onKeyUp() {
  document.getElementById('user-body').innerHTML=marked.parse(document.getElementById('revision-input').value)
}
/*(close) textarea functionality*/

//This is used downstream to confirm user actually made changes before post
let initialContent = '';
initialContent += String(document.getElementById('user-body').innerHTML)



let chapterNum;


//TODO: relocate chapter-num functionality into its own script file
if (document.getElementById('chapter-num') != null) {

	

	//access object keys using HTML
	chapterNum = document.getElementById('chapter-num').innerHTML.toLowerCase()
	chapterNum = chapterNum.replace(/\s/g, '')

} else {
	//(this condition exists on non-chapter pages, like experiment)

	console.log("ALERT: \"chapter-num\" is undefined on this page; defaults to chapter1; TODO: relocate")	
	chapterNum = 'chapter1';

}



let outline =
{
chapter1: {topics: ["Matter", "Measurement"], notes: ["day1-into.and.sigfigs", "day2and3-measurements.density.precision", "day2-matter"]},
chapter2: {topics: ["The Atom And Related", "Nomenclature", "Law of Conservation of Mass", "Law of Definite Proportions"], notes: ["day4-atoms.and.isotopes", "day4-periodic.table", "day5-laws", "day5-nomenclature"]},
chapter3: {topics: ["The mole", "Chemical equations", "Percent Composition", "Emperical Formula", "Combustion Analysis"], notes: ["day6-mole.equations", "day6and7-empiricalFormula.combustionAnalysis", "day7and8-chemical.reactions"]},
chapter4: {topics: ["Percent Yield", "Stoichiometry", "Chemical Reactions", "Solutions Molarity Dilution Titraion", "Volumetric and Gravimetric Analysis"], notes: ["day8-stoichimetry.limiting.reagent", "day9-molarity.and.solutions", "day10-redox.gravimetric.volumetric.analysis", "day26-adv.concentration"]},
chapter5: {topics: ["Enthalpy", "Calorimetry", "Hess's Law"], notes: ["day12-enthalpy.hessLaw", "day13-enthalpy.calorimetry"]},
chapter6: {topics: ["Quantum Mechanics", "light", "Zeff", "Rydberg Equations"], notes: ["day14and15-quantum.mech", "day14-light.and.classical.Phys"]},
chapter7: {topics: ["Electron Configuration", "Periodicity"], notes: ["day15-electron.configuration", "day16-periodicity"]},
chapter8: {topics: ["Bonding", "Lattice Energy", "Born Haber Cycle"], notes: ["day17-bonding"]},
chapter9: {topics: ["VSEPR and Lewis Structures", "Valence Bond Theory"], notes: ["day19-Lewis.and.VSEPR", "day20-examples.Lewis.VSEPR", "day20-mo.theory", "day20-valence.bond.theory"]},
chapter10: {topics: ["Gases", "Ideal Gas Law", "Stoichiometry Gas"], notes: ["day21-empirical.gas.laws", "day22-ideal.gas.laws", "day22-real.gases"]},
chapter11: {topics: ["Intermolecular forces", "Properties of Liquids"], notes: ["day24-intermolecularForces.and.Liquid", "day24-intermolecularForces.and.Phase"]},
chapter12: {topics: ["Solids", "Unit Cells"], notes: ["day25-solids", "day26-adv.concentration"]}
}



//TODO: restructure; 'note-span' is the relevant notes section. give this its own script file.
if (document.getElementById('note-span'))  
{
	//populate relevant note PDF links
	let relevantNotes = '<ul>';
	outline[chapterNum].notes.forEach(note => {
	  relevantNotes += `<a href="./note.PDF/${note}.pdf"><li>${note}</li></a>`
	})
	relevantNotes += '</ul>'
	document.getElementById('note-span').innerHTML = relevantNotes
	document.getElementById('experiment-span').innerHTML = '(experiment features in dev)'
} else {
	console.log("Relevant Notes section undefined on this page; TODO: relocate")
}






//TODO: restructure; 'rel' is the relevant topics section. give this its own script file.
if (document.getElementById('rel')) 
{
	//populate relevant topics
	let relevantTopics = '';
	relevantTopics += '<ul>'
	outline[chapterNum].topics.forEach(elem => {
	    relevantTopics += `<li>${elem}</li>`
	})
	relevantTopics = relevantTopics.substring(0, relevantTopics.length);
	relevantTopics += '</ul>'
	document.getElementById('rel').innerHTML = relevantTopics;
} else {
	console.log("Relevant Topics section undefined on this page; TODO: relocate")
}

function handleSubmit() {
  const newContent = document.getElementById('revision-input').value
  const chapter = chapterNum
  const name = document.getElementById('name-input').value

  if (!name || initialContent == newContent) {
    warning.textContent = 'Either you did not enter a name OR you did not make changes!'
    setTimeout(()=> {
      warning.textContent = ''
    }, 3000)
  } else {
    const post = {
      "chapter": chapter,
      "name": name,
      "updated_text": newContent
    }

    const newEntry = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
  };
    
    fetch('https://one01-sg-serve.onrender.com/post', newEntry)
    .then(response => console.log(response))
  }


}


submission.addEventListener("submit", (e) => {
  e.stopImmediatePropagation();
  e.preventDefault();
    handleSubmit();
  }
)
