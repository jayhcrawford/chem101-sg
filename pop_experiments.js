const experiments = 
["Exp1.Graphing",
  "Exp2.Measurements",
  "Exp3.Stoichiometry.And.The.Laws",
  "Exp4.Sequence.of.Reactions",
  "Exp9.Conductimetric.and.Gravimetric",
  "Exp7and7V.Enthalpy.HessLaw.Calorimetry",
  "Exp8.Atomic.Emission",
  "Exp12.Titration.Volumetric.Analysis",
  "Exp11.Molecular.Models",
  "Exp10.Periodic.Properties",
  "Exp6.Ideal.Gas.Law",
  "Exp5.Graham.Law",
  "Exp16.Spectroscopic.Methods.Beers.Law",
  "ExpExtra.Vapor.Pressure",
  "Exp18.Redox.Titration"]



//If an experiment is mapped to 0, it does not have a page
const expMap = new Map([ 
    ["Exp1.Graphing", 0],
    ["Exp2.Measurements", 0],
    ["Exp3.Stoichiometry.And.The.Laws", 0],
    ["Exp4.Sequence.of.Reactions", 0],
    ["Exp9.Conductimetric.and.Gravimetric", 0],
    ["Exp7and7V.Enthalpy.HessLaw.Calorimetry", 1],
    ["Exp8.Atomic.Emission", 0],
    ["Exp12.Titration.Volumetric.Analysis", 0],
    ["Exp11.Molecular.Models", 0],
    ["Exp10.Periodic.Properties", 0],
    ["Exp6.Ideal.Gas.Law", 0],
    ["Exp5.Graham.Law", 0],
    ["Exp16.Spectroscopic.Methods.Beers.Law", 0],
    ["ExpExtra.Vapor.Pressure", 0],
    ["Exp18.Redox.Titration", 0]
  ])
  


let experimentsHTML = ''
experiments.forEach((experiment) => {
  let newString = experiment.split('.').join(' ');
  let newURLDest = '/' + experiment.split('.').join('-') + '.html';

  if (expMap.get(experiment) == 1)  
  {
    //if experiment has a page
  experimentsHTML += `<p><a href="${newURLDest}">${newString}</a></p>`
  } else {
    //experiment does not have a page, !!not a hyperlink!!
    experimentsHTML += `<p>${newString}</p>`
  }


})

document.getElementById('experiments').innerHTML = experimentsHTML
