export const setValue = (name, value, handler) => {
  handler(prev => (Object.assign(prev, { [name]: value })));
};

export const getWhereClause = (listOfattr) => {
  const whereClause = {};
  if (Array.isArray(listOfattr)) {
    listOfattr.forEach(({ attr, value }) => {
      whereClause[attr] = value;
    });
  }
  return whereClause;
}

export const validateFieldExactLength = (data, ...values) => {
  return values.some(val => data.length === val);
}

export const validateFieldRage = (source, minSize, maxSize) => {
  if (typeof source === 'string') {
    return source.length >= minSize && source.length <= maxSize - 1
  }
}

export const existThisDataForThisScreen = (errores, attr, value) => {
  if (errores.length > 0) {
    return errores.some((error) => error[attr] === value)
  } else {
    return false;
  }
};

export const getCiudadesFromSucursales = (sucursales) => {

  const cantidadDeSucursalesXCiudades = [];
  sucursales.forEach(sucursal => {
    const { descripcion: ciudadAnalizar } = sucursal.ciudade;
    const exist = cantidadDeSucursalesXCiudades.some(sucursalesExistentes => sucursalesExistentes.ciudade === ciudadAnalizar);
    if (exist) {
      cantidadDeSucursalesXCiudades.find((sucursalesExistentes, i) => {
        const { ciudade: ciudadExistente, cantidad } = sucursalesExistentes
        if (ciudadAnalizar === ciudadExistente) {
          cantidadDeSucursalesXCiudades[i] = ({
            ciudade: ciudadAnalizar, cantidad: cantidad + 1,ciudadeCodCiudad:sucursal.ciudadeCodCiudad
          });
          return;
        }
      });

    } else {
      cantidadDeSucursalesXCiudades.push({
        ciudade: ciudadAnalizar, cantidad: 1,ciudadeCodCiudad:sucursal.ciudadeCodCiudad
      });

    }
  });
  return cantidadDeSucursalesXCiudades;
}
