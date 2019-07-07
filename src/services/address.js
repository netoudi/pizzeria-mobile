import axios from 'axios';

const address = zipcode => (
  new Promise(async (resolve, reject) => {
    const value = zipcode.replace(/[^\d]+/g, '');

    if (value.length !== 8) {
      return reject();
    }

    const { data } = await axios.get(`https://viacep.com.br/ws/${value}/json/`);

    return resolve({
      zipcode: data.cep,
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    });
  })
);

export default address;
