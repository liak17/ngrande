


export const haveThisKeyValue = (errores, attr, value) => {
    
    if (errores&&errores.length > 0) {
        return errores.some((error) => error[attr] === value)
    } else {
        return false;
    }
};

export const handlerErrores = (prev, ...errores) => {    
    
    if (prev && prev.length>0) {
        const currentErrores= errores.map(({ cod,screen,error})=>
        {
            const haveError=prev.some((current)=>current.cod===cod);
            return haveError?null:{cod,screen,error}            
        });
        const currentFilter=currentErrores.filter((obj)=>obj!==null);
        return[...prev,...currentFilter];
    }else{
        return errores
    }

}

export const handlerRemoveErrores = (prev, cod) => {
    const id = cod;
    const current = prev.slice();
    const errorresUpdate = current.filter(({ cod }) => cod !== id);
    return errorresUpdate;
}


