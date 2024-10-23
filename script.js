//your JS code here. If required.
let bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const ul= document.querySelector("#band");

function stripArticle(bandName) {
	return bandName.replace(/^(a |an |the |A |An |The )/i, '').trim();
}

bands= bands.sort((a,b) => {
	//console.log("a",stripArticle(a));
	//console.log("b",stripArticle(b));
	return stripArticle(a).localeCompare(stripArticle(b));
});
//console.log(bands);

bands.forEach(band => {
	const li= document.createElement("li");
	li.innerText= band;
	ul.append(li);
})




