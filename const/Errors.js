import * as ViewsNames from '../const/ViewsNames.js';
const generateCustomError=(error,cod,screen)=>({error,cod,screen});
export const ERRORS = {
    loginScreen: {
        camposVacios: {
            cod: '100',
            error: 'Llene todos los campos ',
            screen: ViewsNames.LoginScreenName,
            createCustoError:(error,cod)=>generateCustomError(error,cod||'100',ViewsNames.LoginScreenName)
        },
        noExiste: {
            cod: '101',
            error: 'Verifique la cedula/ruc y la contraseña',
            screen: ViewsNames.LoginScreenName,
            createCustoError:(error,cod)=>generateCustomError(error,cod||'101',ViewsNames.LoginScreenName)
            
        },limiteCaracteres: {
            cod: '102',
            error: 'El campo de cedula-ruc,debe contener con exactitud o 10 caracteres o 13 si es ruc.',
            screen: ViewsNames.LoginScreenName,
            createCustoError:(error,cod)=>generateCustomError(error,cod||'102',ViewsNames.LoginScreenName)
        },
    }
}