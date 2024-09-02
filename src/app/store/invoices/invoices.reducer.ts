import { createReducer, on } from '@ngrx/store';
import {
  loadInvoice,
  loadInvoicesSuccess,
  loadInvoicesFailure,
  addInvoice,
  updateInvoice,
  deleteInvoice,
} from './invoices.action';
import { Invoice } from '../../models/invoice.model';

export interface InvoiceState {
  invoices: Invoice[];
  loading: boolean;
  error: string | null;
}

export const initialState: InvoiceState = {
  invoices: [],
  loading: false,
  error: null, // Set to null to match the type definition
};

export const invoiceReducer = createReducer(
  initialState,

  // Set loading to true when invoices are being loaded
  on(loadInvoice, (state) => ({
    ...state,
    loading: true,
    error: null, // Reset error to null on loading
  })),

  // On success, update invoices and reset loading and error
  on(loadInvoicesSuccess, (state, { invoices }) => ({
    ...state,
    invoices,
    loading: false,
    error: null,
  })),

  // On failure, stop loading and set the error
  on(loadInvoicesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add a new invoice
  on(addInvoice, (state, { invoice }) => ({
    ...state,
    invoices: [...state.invoices, invoice],
    // Optional: loading can be set to true if adding is asynchronous
  })),

  // Update an existing invoice
  on(updateInvoice, (state, { invoice }) => ({
    ...state,
    invoices: state.invoices.map((inv) =>
      inv.id === invoice.id ? invoice : inv
    ),
  })),

  // Delete an invoice
  on(deleteInvoice, (state, { id }) => ({
    ...state,
    invoices: state.invoices.filter((invoice) => invoice.id !== id),
  }))
);
