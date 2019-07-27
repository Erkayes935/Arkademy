function print_persegi(jml) {
	const bintang = ' * ';
	const sd = ' = ';
	if(jml % 2 == 0) return;
	console.log(' '.repeat(jml / 2) + '--- panjang ---'+' '.repeat(jml/2));
	for(var row = 0; row < jml; row++) {
		if(Math.floor(jml/2) === row) {
		console.log(bintang.repeat(jml));
		}else {
		console.log(bintang+sd.repeat(jml-2)+bintang);
    }
  }
}
print_persegi(5);