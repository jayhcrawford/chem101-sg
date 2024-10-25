let builder = '';


let outline =
{
chapter1: ["Matter", "Measurement"],
chapter2: ["The Atom And Related", "Nomenclature", "Law of Conservation of Mass", "Law of Definite Proportions"],
chapter3: ["The mole", "Chemical equations", "Percent Composition", "Emperical Formula", "Combustion Analysis"],
chapter4: ["Percent Yield", "Stoichiometry", "Chemical Reactions", "Solutions Molarity Dilution Titraion", "Volumetric and Gravimetric Analysis"],
chapter5: ["Enthalpy", "Calorimetry", "Hess's Law"],
chapter6: ["Quantum Mechanics", "light", "Zeff", "Rydberg Equations"],
chapter7: ["Electron Configuration", "Periodicity"],
chapter8: ["Bonding", "Lattice Energy", "Born Haber Cycle"],
chapter9: ["VSEPR and Lewis Structures", "Valence Bond Theory"],
chapter10: ["Gases", "Ideal Gas Law", "Stoichiometry Gas"],
chapter11: ["Intermolecular forces", "Properties of Liquids"],
chapter12: ["Solids", "Unit Cells"]
}

//This for loop populates the homepage with links to Chapters
const CHAPTERS = 12;
for (let i = 1; i <= CHAPTERS; i++) {
    builder += `<a href="./${i}.html"><p>Chapter ${i}</a></p><p>${outline[`chapter` + i].join(', ')}</p>`
}


document.getElementById('outline').innerHTML = builder;
