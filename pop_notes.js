let builder = '';

const notes = ["day1-intro.and.sigfigs", "day2and3-measurements.density.precision", "day2-matter", "day4-atoms.and.isotopes", "day4-periodic.table", "day5-laws", "day5-nomenclature", "day6and7-empiricalFormula.combustionAnalysis", "day6-mole.equations", "day7and8-chemical.reactions", "day8-stoichiometry.limiting.reagent", "day9-molarity.and.solutions", "day10-redox.gravimetric.volumetric.analysis", "day12-enthalpy.hessLaw", "day13-enthalpy.calorimetry", "day14and15-quantum.mech", "day14-light.and.classical.Phys", "day15-electron.configuration", "day16-periodicity", "day17-bonding", "day19-Lewis.and.VSEPR", "day20-examples.Lewis.VSEPR", "day20-mo.theory", "day20-valence.bond.theory", "day21-empirical.gas.laws", "day22-ideal.gas.laws", "day22-real.gases", "day24-intermolecularForces.and.Liquid", "day24-intermolecularForces.and.Phase", "day25-solids", "day26-adv.concentration"]

  
//This for loop populates the homepage with links to Chapters

function noteName(name) {
    let findDash = '';
    for (let i = 0; i < name.length; i++) {
        if (name[i] === '-') {
            findDash = i;
        }
    }
    return `D${name.slice(1, findDash)} ${name.slice(findDash + 1, name.length)}`
}

for (let i = 0; i < notes.length; i++) {
    builder += `<a href="/note.PDF/${notes[i]}.pdf"><p>${noteName(notes[i])}</p></a>`
}


document.getElementById('notes-container').innerHTML = builder;
