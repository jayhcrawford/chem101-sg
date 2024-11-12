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
  


let experimentsHTML = ''
experiments.forEach((experiment) => {
  let newString = experiment.split('.').join(' ');
  let newURLDest = '/' + experiment.split('.').join('-') + '.html';
  experimentsHTML += `<p><a href="${newURLDest}">${newString}</a></p>`
})

document.getElementById('experiments').innerHTML = experimentsHTML
