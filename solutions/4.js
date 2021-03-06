//Deoksyribonukleinsyre (DNA) er den viktigste kjemiske bestanddelen i arvematerialet til levende organismer. DNA består av deoksyribose, en fosfatgruppe og fire nitrogenbaser. DNA er kodet med fire utbyttbare "byggestener", kalt "baser", og kan forkortes A, C, G eller T, etter deres kjemiske betegnelser: Adenin, Cytosin, Guanin og Tymin.
//I denne oppgaven er vi ute etter antall ganger  'A', 'C', 'G', og 'T' oppstår i en Streng.
//Eksempel: ATGCTTCAGAAAGGTCTTACG
//Gir følgende svar: A6, C4, G5, T6
//Hva gir følgende DNA streng?

console.time('Ran for');
let magicString = "TAACGAGTCTGCCACTAGATAGCCCGCGCTATTAATGGGATGTTCTAGGTCTTCACCTCGACCTATACAAGACGAGAATTCTGGTTCAGCCGGTCCGGGGTCGGGAGTTTGGCTTCATAACACAATTGCAGGCGTCAGAGGCCATACCTTAAACCCATCATACGACCGGTACGAAAATCCATGTCACAGACTAATGATCCCTGCTAAGAGATCGTAGCAACCGTTCTGGATCCAAGCAGCTAATAAGTTAGCAAGCTGGTGTGTTTTTGATATTTGCAGTGGCAAACTGTTGCCTGGGTCGGTCCGATGGTCCTCATCGGACGCTGATGACGGACTTTGCACGGTCGCAAGTCGCTGATAGAAGGTGACTCTCGTGCACGATTTAGACCGGCAGTGCTGCGTGAAGGGGGCTCCCTTATCTGATATGCGCAGACTATTTCGGCGTGGAATGCACATGTTCCCCGACCACTTCAACCCTCATGTTGAGGACTTCCTGCCATAACAACAGGGTAACTTAACTCAGGATGTCTTAAAAAAATAGGCTTCTCATGTGCTCACATTTGGGACCGTATGTGCTAAACGGTGTACTATACGCGGTGGAATTTGGAATGGCAAACTTAACAGCAGGTCTAACCGTAGAAGACGTTACGAGTAAGTGTCAAGTCAGCATTGGCGGATCACGGCGTCGCTATGCCGTCAAGCTCTTTTGCGGATATGATCTAAATCAGATTACGAGCGACGCCTGTTTCTAAAATGACCAATGGTACGCAACACGCTGGTAGGATCTGAGCGAGCAAAGCATAAATAGACCCATCGTGTCGCCTGTAAATTGCAAGAGTACCAAGAACCCCGCAATTACGTTGGGTTCGCTATAGTTGAAAGTTACCGATAAACTACCTTTCGCGACCCGTTTTATAACATAACTAGCATTATTACTCAAGGTGCTCTGATTCCCAGAATACCCAAGAACTAGCGCGTTTTTATTTCTTTGGGGAGGTCTTGTCATGATGTTCATACTTGTCGCCTAGGTTTGCCGACTTGTCCTTCTCTTACACTATTCCGAAATCGCAGTTGCACCACGATCGATGAGCATGGTAGTTACTTAAATATTCAAGAGTCCTGGTCCTCGAAATGGCATATGCTTGCAGGTGCCCCCGATCAGATAGAAGACCGCGGCCGAGGAGGTAGTCCGGTACTGTGCGTTTGGTGCCTTTGACTCTTTACGCACTACTGGACCGGCCTTCGAGGTCTAAGGCTACGTCCTTTAACGCTTTTACTATACAATAGAAGGTGTTCTACACACTGCGTGTCGCTGGATTGGCCTTCGACACGCCTTAGCGGCATGTATCAAGCTATCAGGGAGCCCATTGTGGGCGGTTACTCGTCGTTTGCACAACATCAGACCATTCACTATTAAGCTCATCCCCGAAGAAGGCACCCTACCGTTGTAAGTGCGACTTTGGAACCTCTCGGTAATGCCGGTTGCGGCACTTTCAACGTACATTCCGACCTAGTGCAGAAGAATGGATAGCGAGCTGTTTTTCGAGCTCTACCTAATCGGCTCGAATCTACTCGACGTGTCGAGCGTCCTGTCGCATGGCTCGAAGCGGTATCGAGTCAGTCCCCCAGGGGCGCCGACACGTAGTGAGGTGAAAACATCGACATGTGCTTTTGATGTATATGGCTGAGCTTCAATGCGTGGCTAAAGTGGTCAATCCACTCAGGGCATGGATACTCGGCTCAACATAGTAAATTGTCTCCGCGTCCGATAGGCGGGGGTCAATCCGCCGCACTGGTGGGTCACCCGTGATGCTAGGTCTATAGCAGGGCCCCGACCGTAAACTTCAAGCTTTCCCGGTTGCTGTTGTTTTTTGAGCACAGGGAAACGAGCAGTATTGAATCTGAAGGGGGATAGGCGTTTAATTATTCAGAAGTAGTGCGAAGGGCTCCATATGACACTAGTCGTAGTAAGCACATGCTGGAGGTCTGGACTTCCTTCG";
let stringArr = magicString.split('');

let occurances = {
  'A': 0,
  'C': 0,
  'G': 0,
  'T': 0,
};

stringArr.forEach((curr) => {
  occurances[curr]++;
});

console.log(`A${occurances.A},C${occurances.C},G${occurances.G},T${occurances.T}`);
console.timeEnd('Ran for');
