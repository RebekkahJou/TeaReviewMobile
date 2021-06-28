import axios from 'axios';

const TOKEN = 'token';

// ACTION TYPES
const GET_ALL_SECTIONS = 'GET_ALL_SECTIONS';
const GET_SINGLE_SECTION = 'GET_SINGLE_SECTION';
// const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW';
// const DELETE_REVIEW = 'DELETE_REVIEW';

// ACTION CREATORS
const setSections = allSections => {
  return {
    type: GET_ALL_SECTIONS,
    allSections,
  };
};

const setSingleSection = section => {
  return {
    type: GET_SINGLE_SECTION,
    section,
  };
};

// const addNewProduct = newProduct => {
//   return {
//     type: ADD_NEW_PRODUCT,
//     newProduct,
//   };
// };

// const deleteProduct = product => ({
//   type: DELETE_PRODUCT,
//   product,
// });

// THUNK
// Cary
export const fetchAllSections = () => async dispatch => {
  try {
    const {data} = await axios.get('http://192.168.1.118:8080/api/sections');
    console.log('DATA in sections thunk>>>', data);
    dispatch(setSections(data));
  } catch (error) {
    console.log('error fetching all sections', error);
    console.log(error.response.data);
  }
};
//Durham
// export const fetchAllSections = () => async dispatch => {
//   try {
//     const {data} = await axios.get('http://10.0.0.17:8080/api/sections');
//     dispatch(setSections(data));
//   } catch (error) {
//     console.log('error fetching all sections', error);
//     console.log(error.response.data);
//   }
// };

//When changing to production mode (process.env.PRODUCTION), deploy on a host like Heroku, and then change http call to deployed url
//Cary
export const fetchSingleSection = sectionId => async dispatch => {
  try {
    const {data} = await axios.get(
      `http://192.168.1.118:8080/api/sections/${sectionId}`,
    );
    dispatch(setSingleSection(data));
  } catch (error) {
    console.log('error fetching single section', error);
  }
};
//Durham
// export const fetchSingleSection = sectionId => async dispatch => {
//   try {
//     const {data} = await axios.get(
//       `http://10.0.0.17:8080/api/sections/${sectionId}`,
//     );
//     dispatch(setSingleSection(data));
//   } catch (error) {
//     console.log('error fetching this section', error);
//     console.log(error.response.data);
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
  singleSection: {},
  // newProduct: '',
};

// REDUCER
const sectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SECTIONS:
      return {...state, allSections: action.allSections};
    case GET_SINGLE_SECTION:
      return {...state, singleSection: action.section};
    // case ADD_NEW_PRODUCT:
    //   return {
    //     ...state,
    //     allProducts: [...state.allProducts, action.newProduct],
    //     newProduct: action.newProduct,
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
