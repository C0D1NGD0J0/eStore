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

export const removeItemFromCart = (cart, item) => {
  const ismatchItem = cart.find(product => product.id !== item.id);

  if (ismatchItem.quantity === 1) {
    return cart.filter((p) => p.id !== item.id);
  };

  return cart.map((p) => {
    if (p.id === item.id) {
      return { ...p, quantity: p.quantity-- }
    } else {
      return p;
    };
  });
};