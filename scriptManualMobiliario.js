function alterarAtivo(e){

	var ativoAnterior = document.querySelector(".sidebar a.active"); //procura o elemento com o seletor .sidebar a.active
	
	if( ativoAnterior )
		ativoAnterior.classList.remove('active'); // vai na lista de classes dele e remove a active
	
	var elemento = e.target;
	if( e.srcElement.nodeName == "DIV" || e.srcElement.nodeName == "div" ){
		elemento = e.target.parentNode;
	}
	elemento.classList.add('active'); // no elemento clicado eu adiciono a classe active
}