export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}

// existe alguns plugins para retornar o get e set no vuex, mas foi criado esse basico, sem precisar instalar lib
export function mapFields(options) {
  const object = {};
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      },
    };
  }
  return object;
}

export function toUpperCase(value) {
  if (value) {
    return value.toUpperCase();
  }
}

export function toCapitalize(value) {
  if (value) {
    const reg = /(?:^|[\s'\\-])([a-z-áàâéèêíîôùûç])/g;
    return value.toLowerCase().replace(reg, (g0) => g0.toUpperCase());
  }
}
