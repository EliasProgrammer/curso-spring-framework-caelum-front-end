import FetchAluraForumService from './FetchAluraForumService';
import CategoriasDoForum from '../CategoriasDoForum';

const tamanhoDaPagina = 100;

class BuscaDuvidasService {

    static executa ({categoria = CategoriasDoForum['TODAS'], status = '', pagina = 0} = {}) {

        const resource = this._resolveURL(status, categoria, pagina, tamanhoDaPagina);
        return FetchAluraForumService.get(resource);
    }

    static _resolveURL = (status, categoria, pagina, tamanhoDaPagina) => {
        let resource = `topics?`;

        if (status !== '')
            resource += `status=${status}`;
            
        if (JSON.stringify(categoria) !== JSON.stringify(CategoriasDoForum['TODAS']))
            resource += `&categoryName=${categoria.nome}`

        return resource += `&page=${pagina}&size=${tamanhoDaPagina}`;
    }
} 

export default BuscaDuvidasService;