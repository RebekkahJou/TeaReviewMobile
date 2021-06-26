import axios from 'axios';

const TOKEN = 'token';

// ACTION TYPES
const GET_ALL_SECTIONS = 'GET_ALL_SECTIONS';
// const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
// const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
// const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
// const DELETE_PRODUCT = 'DELETE_PRODUCT';

// ACTION CREATORS
const setSections = allSections => {
  return {
    type: GET_ALL_SECTIONS,
    allSections,
  };
};

// const setSingleProducts = product => {
//   return {
//     type: GET_SINGLE_PRODUCT,
//     product,
//   };
// };

// const addNewProduct = newProduct => {
//   return {
//     type: ADD_NEW_PRODUCT,
//     newProduct,
//   };
// };

// const _updateProduct = product => ({
//   type: UPDATE_PRODUCT,
//   product,
// });

// const deleteProduct = product => ({
//   type: DELETE_PRODUCT,
//   product,
// });

// THUNK
export const fetchAllSections = () => async dispatch => {
  try {
    const data = await axios.get('http://192.168.1.118:8080/api/sections');
    console.log('DATA in sections thunk>>>', data);
    dispatch(setSections(data));
  } catch (error) {
    console.log('error fetching all sections', error);
    console.log(error.response.data);
  }
};

// export const fetchSingleProduct = productId => async dispatch => {
//   try {
//     const {data} = await axios.get(`/api/products/${productId}`);
//     dispatch(setSingleProducts(data));
//   } catch (error) {
//     console.log('error fetching single product', error);
//   }
// };

// export const createNewProduct = (newProduct, history) => async dispatch => {
//   try {
//     const token = window.localStorage.getItem(TOKEN);
//     const {data} = await axios.post('/api/products', newProduct, {
//       headers: {
//         authorization: token,
//       },
//     });
//     dispatch(addNewProduct(data));
//     history.push('/admin/products');
//   } catch (error) {
//     console.log('error creating new product thunk', error);
//   }
// };

// export const updateProduct = (product, history) => {
//   return async dispatch => {
//     try {
//       const token = window.localStorage.getItem(TOKEN);
//       const {data: updated} = await axios.put(
//         `/api/products/${product.id}`,
//         product,
//         {
//           headers: {
//             authorization: token,
//           },
//         },
//       );
//       dispatch(_updateProduct(updated));
//       history.push('/admin/products');
//     } catch (error) {
//       console.log('error updating product', error);
//     }
//   };
// };

// export const deleteProductThunk = (id, history) => async dispatch => {
//   try {
//     const token = window.localStorage.getItem(TOKEN);
//     const {data: product} = await axios.delete(`/api/products/${id}`, {
//       headers: {
//         authorization: token,
//       },
//     });
//     dispatch(deleteProduct(product));
//     history.push('/admin/products');
//   } catch (error) {
//     console.log('error deleting product', error);
//   }
// };

// initial state
const initialState = {
  allSections: [],
  // singleProduct: {},
  // newProduct: '',
};

// REDUCER
const sectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SECTIONS:
      return {...state, allSections: action.allSections};
    // case GET_SINGLE_PRODUCT:
    //   return {...state, singleProduct: action.product};
    // case ADD_NEW_PRODUCT:
    //   return {
    //     ...state,
    //     allProducts: [...state.allProducts, action.newProduct],
    //     newProduct: action.newProduct,
    //   };
    // case UPDATE_PRODUCT:
    //   return {
    //     ...state,
    //     singleProduct: action.product,
    //   };
    // case DELETE_PRODUCT:
    //   return {
    //     ...state,
    //     allProducts: state.allProducts.filter(
    //       product => product.id !== action.product,
    //     ),
    // };
    default:
      return state;
  }
};

export default sectionsReducer;
