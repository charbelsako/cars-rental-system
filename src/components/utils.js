export const validateEmail = email => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

export const getUniqueBrands = cars => {
  const uniqueBrandsList = new Set();

  cars.map(car => {
    uniqueBrandsList.add(car.title);
    return 0;
  });

  return Array.from(uniqueBrandsList);
};
