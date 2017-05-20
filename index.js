'use strict';
const chalk = require('chalk');
const symbolX = Symbol.for('xtx#x');
const symbolT = Symbol.for('xtx#t');
const symbol5 = Symbol.for('xtx#5');
const symbol2 = Symbol.for('xtx#2');
const symbol0 = Symbol.for('xtx#0');
const symbolL = Symbol.for('xtx#l');
const symbolM = Symbol.for('xtx#m');

class Asc {
	constructor(){

	}
	get [symbolX](){
		return [' /$$   /$$',
				'| $$  / $$',
				'|  $$/ $$/',
				' \\  $$$$/ ',
				'  >$$  $$ ',
				' /$$/\\  $$',
				'| $$  \\ $$',
				'|__/  |__/']
	}
	get [symbolT](){
		return [' /$$$$$$$$',
				'|__  $$__/',
				'   | $$   ',   
				'   | $$   ',   
				'   | $$   ',   
				'   | $$   ',   
				'   | $$   ',   
				'   |__/   ']
	}
	get [symbol5](){
		return [' /$$$$$$$ ', 
				'| $$____/ ', 
				'| $$      ',      
				'| $$$$$$$ ', 
				'|_____  $$',
				' /$$  \\ $$',
				'|  $$$$$$/',
				' \\______/ ']
	}
	get [symbol2](){
		return ['  /$$$$$$ ', 
				' /$$__  $$',
				'|__/  \\ $$',
				'  /$$$$$$/',
				' /$$____/ ', 
				'| $$      ',      
				'| $$$$$$$$',
				'|________/']
	}
	get [symbol0](){
		return ['  /$$$$$$ ', 
				' /$$$_  $$',
				'| $$$$\\ $$',
				'| $$ $$ $$',
				'| $$\\ $$$$',
				'| $$ \\ $$$',
				'|  $$$$$$/',
				' \\______/']
	}
	get [symbolL](){
		return [' /$$      ',      
				'| $$      ',      
				'| $$      ',      
				'| $$      ',      
				'| $$      ',      
				'| $$      ',     
				'| $$$$$$$$',
				'|________/']
	}
	get [symbolM](){
		return [' /$$      /$$',
				'| $$$    /$$$',
				'| $$$$  /$$$$',
				'| $$ $$/$$ $$',
				'| $$  $$$| $$',
				'| $$\\  $ | $$',
				'| $$ \\/  | $$',
				'|__/     |__/']
	}
}
let asc = new Asc();
let [xtx,y520,lm] = [[],[],[]];
for(let i = 0;i<8;i++){
	xtx[i] = asc[symbolX][i]+'     '+asc[symbolT][i]+'     '+asc[symbolX][i];
	y520[i] = asc[symbol5][i]+'     '+asc[symbol2][i]+'     '+asc[symbol0][i];
	lm[i] = asc[symbolL][i]+'     '+asc[symbolM][i];
}
process.stdout.write('\n\n\n'+xtx.join('\n')+'\n\n\n'+y520.join('\n')+'\n\n\n'+lm.join('\n'));