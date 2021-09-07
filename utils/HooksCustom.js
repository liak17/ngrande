
import { useMemo, useState, useEffect } from 'react'

export const useErrores = (errores) => {
    const initialVal = errores ? errores.isArray ? errores : [] : [];

    const [errors, agregarErrores] = useState(initialVal);


    const addErrores = (error) => {
        agregarErrores((prev) => {
            const p = prev.some(e => e.cod === error.cod);
            return p ? prev : [...prev, error];
        });
    }

    const eliminarErrores = (cod) => {
        agregarErrores((prev) => {
            const currentErrores = Array.isArray(prev) ?
                prev.filter((error) => error.cod != cod) : prev;
            return currentErrores;
        });
    }

    return [
        errors,
        addErrores,
        eliminarErrores
    ]
}

export const useCampoSimple = (valInit) => {
    const initialVal = valInit || null;
    const [campo, setCampo] = useState(initialVal);  
    return [
        campo,
        setCampo
    ]
}

const getErrores = ({ validators }) => {

    if (validators) {

        const erroresTrigged = validators.map(
            ({ validator, params }) => {
                return validator(params)
            }
        );
        const erroresFiltrados = erroresTrigged.filter((val) => val != true && val !=false);
        return erroresFiltrados;
    }

    return [];
}


export const useCampoWithRules = (val) => {

    const [rules, setrules] = useState();
    const [codError, setCodError] = useState(0);
    const initialVal = val || null;

    const [campo, setCampo] = useState(initialVal);
    const [errors, addErrores, eliminarErrores] = useErrores([]);

    const setRules = ({ rules }) => {

        const [firstRule] = rules.validators;

        const { params } = firstRule;

        if (params) {
            setrules(rules)
            setCodError(params.trowError.cod);
        }
    };

    useEffect(() => {

        if (rules) {
            const errores = getErrores(rules);
            errores.length > 0 ?
                errores.forEach(actualError => {
                    addErrores(actualError)
                }) : eliminarErrores(codError);
        }

    }, [rules])

    return [
        campo,
        setCampo,
        errors,
        setRules

    ]

}
