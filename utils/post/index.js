export const trimFields = ({ product, enterprise, image, url, description }) => ({
  product: product.trim(),
  enterprise: enterprise.trim(),
  image,
  url: url.trim(),
  description: description.trim(),
});

export const handleValidation = credentials => {
  if (JSON.stringify(credentials) === '{}') return null;
  const { product, enterprise, image, url, description } = credentials;
  const errors = {};

  if (product === '') {
    errors.product = 'Ingrese el nombre del producto';
  }

  if (enterprise === '') {
    errors.enterprise = 'Ingrese el nombre de la empresa';
  }

  if (!image) {
    errors.image = 'Seleccione una imagen para el producto';
  }

  if (url === '') {
    errors.url = 'Ingrese la URL del producto';
  } else if ( !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(url) ) {
    errors.url = 'La URL es incorrecta';
  }

  if (description === '') {
    errors.description = 'Ingrese la descripción del producto';
  }

  return { errors, credentials };
}