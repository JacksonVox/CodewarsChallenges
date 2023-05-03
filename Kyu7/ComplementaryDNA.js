function DNAStrand(dna){
  return dna.split('').map(element => DNAStrand.pairs[element]).join('');
}
DNAStrand.pairs = {
  'A' : 'T',
  'T' : 'A',
  'G' : 'C',
  'C' : 'G',
}