let builder = '';

let chapterNum = document.getElementById('chapter-num').innerHTML.toLowerCase()
chapterNum = chapterNum.replace(/\s/g, '')
console.log(chapterNum)

let outline =
{
chapter1: ["Matter", "Measurement"],
chapter2: ["The Atom And Related", "Nomenclature", "Law of Conservation of Mass", "Law of Definite Proportions"],
chapter3: ["The mole", "Chemical equations", "Percent Composition", "Emperical Formula", "Combustion Analysis"],
chapter4: ["Percent Yield", "Stoichiometry", "Chemical Reactions", "chSolutions Molarity Dilution Titraion", "chVolumetric and Gravimetric Analysis"],
chapter5: ["Enthalpy", "Calorimetry", "Hess's Law"],
chapter6: ["Quantum Mechanics", "light", "Zeff", "Rydberg Equations"],
chapter7: ["Electron Configuration", "Periodicity"],
chapter8: ["Bonding", "Lattice Energy", "Born Haber Cycle"],
chapter9: ["VSEPR and Lewis Structures", "Valence Bond Theory"],
chapter10: ["Gases", "Ideal Gas Law", "Stoichiometry Gas"],
chapter11: ["Intermolecular forces", "Properties of Liquids"],
chapter12: ["Solids", "Unit Cells"]
}

builder += '<h3><ul>'
//This for loop populates the homepage with links to Chapters
outline[chapterNum].forEach(elem => {
    builder += `<li>${elem}</li>`
})

builder = builder.substring(0, builder.length);

builder += '</ul></h3>'

document.getElementById('rel').innerHTML = builder;
