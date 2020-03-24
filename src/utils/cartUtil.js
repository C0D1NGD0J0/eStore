export const updateCartItemsCount = (items, newItem) =>{
  const ismatch = items.find((product) => product._id === newItem._id);
  if(ismatch){
    return items.map((product) =>{
      return product._id === newItem._id ? {
        ...product, qty: product.qty + 1
      } : product
    });
  };

  return [...items, {...newItem, qty: 1}]
};

export const removeItemFromCart = (cart, item) => {
  const ismatchItem = cart.find(product => product._id === item._id);

  if (ismatchItem.qty === 1) {
    return cart.filter((p) => p._id !== item._id);
  };

  return cart.map((p) => {
    if (p._id === item._id) {
      return { ...p, qty: p.qty - 1 }
    } else {
      return p;
    };
  });
};