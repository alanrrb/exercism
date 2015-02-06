function compute(dna1, dna2) {
  var reValidation = /^[ACGT]+$/;
  if(!dna1.match(reValidation) && !dna2.match(reValidation)) {
    throw new Error("dna sequence should be ACGT letters");
  }

  if (dna1.length != dna2.length) {
    throw new Error("DNA strands must be of equal length.");
  }

  var arrayDNA1 = dna1.split("");
  var arrayDNA2 = dna2.split("");
  var distance = 0;
  for(var i = 0; i < arrayDNA1.length; i++) {
    if(arrayDNA1[i] != arrayDNA2[i]) {
      distance++;
    }
  }

  return distance;
}

module.exports = compute;
