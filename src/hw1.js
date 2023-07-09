export function healthIndicator (character) {
   let state = '';
   if (character.health > 50) {
      state = 'healthy';
   } else if (character.health < 15) {
      state = 'critical';
   } else {
      state = 'wounded';
   }
   return state;
}

