var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log('filter')
console.log(filter(words,function(element){
    return element === 'elite';  
}));