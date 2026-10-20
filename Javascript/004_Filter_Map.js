let score=[78,45,34,67,90,83];
 let grade = score.map(s => s >= 90 ? 'A' : 
                           s >= 80 ? 'B' :
                           s >= 70 ? 'C' :
                           s >= 60 ? 'D' : 'F');
console.log(grade);