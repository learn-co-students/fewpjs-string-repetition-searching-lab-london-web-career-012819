// Code your solution here
function heyJude(lyric){
    return lyric.repeat(16)
}

function prohibitedLanguage(safeName){
    let restricted = /candycorn|brusselssprouts/
    return safeName.search(restricted)
}