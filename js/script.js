function argsTest (_a, _b, _c) {
	var l = arguments.length;
	if ( l != 3 ) {// проверка на правильное количество аргументов
		throw new Error("function called with" + l + " args, but you need 3");
	}
	console.log(l);//длина массива передаваемых аргументов
	console.log(arguments[1]);// второй элемент этого массива
} 
argsTest(12, 33, 52);

function max () {
	var m = Number.NEGATIVE_INFINITY;// -бесконечность (самое маленькое число)

	for ( var i = 0; i < arguments.length; i++ ) {
		if (arguments[i] > m) m = arguments[i]; 
	}

	return m;
}
console.log( max(23, 51, 26, 345) );