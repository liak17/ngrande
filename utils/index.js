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
  return values.some(val=>data.length===val);
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
