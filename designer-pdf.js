function designerPdfViewer(h, word) {
  const letters = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const stringArray = word.split('')
  const position = stringArray.map(letter => letters.indexOf(letter))
  const heights = position.map(height => h[height])
  const max = Math.max(...heights);
  return max * heights.length
}
