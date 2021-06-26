


export const existThisDataForThisScreen = (errores, attr, value) => {
    if (errores.length > 0) {
        return errores.some((error) => error[attr] === value)
    } else {
        return false;
    }
};

export const handlerErrores = (prev, { cod, error, screen }) => {
    const id = cod;
    const currentErrores = prev.slice();
    const existThisError = existThisDataForThisScreen(currentErrores, 'cod', id);
    if (!existThisError) {
        return [...prev, { cod, error, screen }];
    } else {
        return currentErrores;
    }
}
export const handlerRemoveErrores = (prev, cod) => {
    const id = cod;
    const current = prev.slice();
    const errorresUpdate = current.filter(({ cod }) => cod !== id);
    return errorresUpdate;
}

export const getErrorFormat = (screen, { error, cod }) => {
    return { screen, error, cod }
}
