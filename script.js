// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        dna.push(returnRandBase());
        return dna;
      },
      compareDNA(pAequor) {
        const currentDNA = this.dna;
        const compareDNA = pAequor.dna;
        let commonDNA = [];
        for (let i = 0; i < currentDNA.length; i++) {
          for (let j = 0; j < compareDNA.length; j++) {
            if (currentDNA[i] === compareDNA[j] && i === j) {
              commonDNA.push(currentDNA[i]);
            }
          }
        }
        const commonDNAlength = commonDNA.length;
        const commonPercentage = (commonDNAlength / 15) * 100;
        console.log(
          `specimen #1 and specimen #2 have ${commonPercentage.toFixed(
            2
          )} % DNA in common`
        );
      },
      willLikelySurvive() {
        const surviveGenes = dna.filter((word) => word === "C" || word === "G");
        const surviveGenesPercentage = ((surviveGenes.length / 15) * 100).toFixed(
          2
        );
        console.log(surviveGenesPercentage);
        if (surviveGenesPercentage > 60) {
          return true;
        } else {
          return false;
        }
      },
    };
  };
  
  const create30organisms = () => {
    let survivingpAequors = [];
    let i = 0;
    do {
      let createOrganism = pAequorFactory(i++, mockUpStrand());
      let checkSurviving = createOrganism.willLikelySurvive();
      if (checkSurviving === true) {
        survivingpAequors.push(createOrganism);
      }
    } while (survivingpAequors.length <= 30);
    console.log(survivingpAequors);
  };
  create30organisms();