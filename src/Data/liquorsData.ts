import gin from '../Imgs/Liquors/gin.jpg';
import whisky from '../Imgs/Liquors/whisky.webp';
import ron from '../Imgs/Liquors/ron.jpg';
import vodka from '../Imgs/Liquors/vodka.jpg';
import tequila from '../Imgs/Liquors/tequila.avif';
import cachaca from '../Imgs/Liquors/cachaca.webp';
import pisco from '../Imgs/Liquors/pisco.jpeg';
import rosso from '../Imgs/Liquors/rosso.jpeg';
import dry from '../Imgs/Liquors/dry.jpg';
import campari from '../Imgs/Liquors/campari.jpg';
import aperol from '../Imgs/Liquors/aperol.webp';
import lillet from '../Imgs/Liquors/lillet.jpg';
import fernet from '../Imgs/Liquors/fernet.webp';
import cointreau from '../Imgs/Liquors/cointreau.jpg';
import tripleSec from '../Imgs/Liquors/triple sec.jpeg';
import maraschino from '../Imgs/Liquors/maraschino.webp';
import durazno from '../Imgs/Liquors/durazno.jpeg';
import frutilla from '../Imgs/Liquors/frutilla.jpg';
import cafe from '../Imgs/Liquors/cafe.webp';
import cacao from '../Imgs/Liquors/cacao.png';
import curacao from '../Imgs/Liquors/curacao.png';
import amaretto from '../Imgs/Liquors/amaretto.webp';
import drambuie from '../Imgs/Liquors/drambuie.jpg';
import apricotBrandy from '../Imgs/Liquors/apricotBrandy.png';
import absenta from '../Imgs/Liquors/absenta.jpg';
import chartreuse from '../Imgs/Liquors/chartreuse.webp';
import vino from '../Imgs/Liquors/vino.webp';
import champagne from '../Imgs/Liquors/champagne.webp';
import cassis from '../Imgs/Liquors/cassis.jpg';



export type LiquorData = {
    id:number,
    name:string,
    img:string,
    section:string,
}

export const liquorsData: LiquorData[] = [
    { id: 1, name: 'Gin', img: gin, section: 'Destilados' },
    { id: 2, name: 'Whisky', img: whisky, section: 'Destilados' },
    { id: 3, name: 'Ron', img: ron, section: 'Destilados' },
    { id: 4, name: 'Vodka', img: vodka, section: 'Destilados' },
    { id: 5, name: 'Tequila', img: tequila, section: 'Destilados' },
    { id: 6, name: 'Cachaça', img: cachaca, section: 'Destilados' },
    { id: 7, name: 'Pisco', img: pisco, section: 'Destilados' },

    { id: 8, name: 'Vermouth Rosso', img: rosso, section: 'Vermouth y Aperitivos' },
    { id: 9, name: 'Vermouth Dry', img: dry, section: 'Vermouth y Aperitivos' },
    { id: 10, name: 'Campari', img: campari, section: 'Vermouth y Aperitivos' },
    { id: 11, name: 'Aperol', img: aperol, section: 'Vermouth y Aperitivos' },
    { id: 29, name: 'Lillet', img: lillet, section: 'Vermouth y Aperitivos' },
    { id: 24, name: 'Fernet', img: fernet, section: 'Vermouth y Aperitivos' },

    { id: 12, name: 'Cointreau', img: cointreau, section: 'Licores' },
    { id: 13, name: 'Triple sec', img: tripleSec, section: 'Licores' },
    { id: 14, name: 'Licor de Cassis', img: cassis, section: 'Licores' },
    { id: 15, name: 'Licor de Maraschino', img: maraschino, section: 'Licores' },
    { id: 16, name: 'Licor de Durazno', img: durazno, section: 'Licores' },
    { id: 17, name: 'Licor de Frutilla', img: frutilla, section: 'Licores' },
    { id: 18, name: 'Licor de Café', img: cafe, section: 'Licores' },
    { id: 19, name: 'Licor de Cacao', img: cacao, section: 'Licores' },
    { id: 21, name: 'Blue Curaçao', img: curacao, section: 'Licores' },
    { id: 22, name: 'Amaretto', img: amaretto, section: 'Licores' },
    { id: 23, name: 'Drambuie', img: drambuie, section: 'Licores' },
    { id: 25, name: 'Apricot Brandy', img: apricotBrandy, section: 'Licores' },
    { id: 30, name: 'Absenta', img: absenta, section: 'Licores' },
    { id: 28, name: 'Chartreuse', img: chartreuse, section: 'Licores' },

    { id: 26, name: 'Vino', img: vino, section: 'Vinos y Espumantes' },
    { id: 27, name: 'Champagne', img: champagne, section: 'Vinos y Espumantes' },

];