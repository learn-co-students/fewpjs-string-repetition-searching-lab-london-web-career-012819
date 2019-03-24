function heyJude(lyric) {
  return lyric.repeat(16)
}

function prohibitedLanguage(str) {
  let prevent = /candycorn|brusselssprouts/
  return str.search(prevent)
}
