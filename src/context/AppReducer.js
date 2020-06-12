import { DELETE_TRANSACTION, ADD_TRANSACTION } from './types';

export default (state, action) => {
  const { transactions } = state;
  const { type, payload } = action;

  switch (type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: transactions.filter(
          (transaction) => transaction.id !== payload
        ),
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...transactions],
      };
    default:
      return state;
  }
};
