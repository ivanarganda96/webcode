'use strict'

// Document Object Model

function main(){

	var miDivCaja = document.getElementById( "micaja" );

	var contenedor = new Contenedor( miDivCaja , "" );

	var resultsDivContent = "<ul>"+ 
	"<li>Elementos del div: " + contenedor.Elementos()+"</li>"+
	"<li>Titulos: " + contenedor.showTotalTitles()+"</li>"+
	"<li>" + contenedor.showTitles()+ "</li>"+
	"<li>Parrafos: " + contenedor.showParagraphs()+ "</li>"+
	"<li>Spans: " + contenedor.showSpans() +"</li></ul>";

	var content = new Contenedor( "" , resultsDivContent );

	content.showDivContent();



}

function getTitles( miDiv ){

	var typeTittles = ["h1","h2","h3","h4","h5","h6"];
	var arrTitles = [];

		for (var i = 0; i < typeTittles.length; i++) {
			
			arrTitles.push( typeTittles[i] );

		}
	return arrTitles;
}

class Contenedor {

	constructor( miDiv , resultDiv ){

		this.miDiv = miDiv;

		this.titles = getTitles( miDiv );

		this.resultDiv = resultDiv;


	}

	showDivContent(){

		document.getElementById("descriptionDiv").innerHTML = this.resultDiv;

	}


	showContentParagrahps(){

		var parrafos = this.miDiv.getElementsByTagName("p");
		var content = "";

		for ( let i = 0; i < parrafos.length ; i++ ){

			content+=parrafos[i].innerHTML + "\n";

		}

		return content;


	}

	showContentSpan(){

		var span = this.miDiv.getElementsByTagName("span");
		var content = "";

		for ( let i = 0; i < parrafos.length ; i++ ){

			content+=span[i].innerHTML + "\n";

		}

		return content;


	}


	// Contar elementos

	
	showTotalTitles(){

		var titlesContainer = this.miDiv;
		var titles = this.titles;
		var resultTitles = "";
		var getTitles = [];

		titles.forEach( (t , i) =>{

			getTitles.push(titlesContainer.getElementsByTagName( t ).length );
		
		})

		const reducer = (accumulator, curr) => accumulator + curr;



		return getTitles.reduce( reducer );

	}

	showTitles(){

		var titlesContainer = this.miDiv;
		var titles = this.titles;
		var result = "";

		titles.forEach( ( t , indide ) =>{

			result += t + " : " + titlesContainer.getElementsByTagName( t ).length+"\n";

		})

		return result;

	}

	showParagraphs(){
		return this.miDiv.getElementsByTagName("p").length;
	}

	showSpans(){

		return this.miDiv.getElementsByTagName("span").length;

	}

	showElementsContent(){

		return this.miDiv.innetHTML;

	}

	Elementos(){

		return this.miDiv.getElementsByTagName("*").length;

	}

}
