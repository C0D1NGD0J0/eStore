export const updateCartItemsCount = (items, newItem) =>{
  const ismatch = items.find((product) => product.id === newItem.id);

  if(ismatch){
    return items.map((product) =>{
      return product.id === newItem.id ? {
        ...product, quantity: product.quantity + 1
      } : product
    });
  };

  return [...items, {...newItem, quantity: 1}]
};