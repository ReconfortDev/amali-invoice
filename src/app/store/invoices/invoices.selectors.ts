import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvoiceState } from './invoices.reducer';

// Feature selector for the invoices state
export const selectInvoiceState = createFeatureSelector<InvoiceState>('invoices');

// Selector to get all invoices
export const selectAllInvoices = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoices
);

// Selector to get the loading status
export const selectInvoiceLoading = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.loading
);

// Selector to get the error status
export const selectInvoiceError = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.error
);

// Selector to get an invoice by ID
export const selectInvoiceById = (id: string) => createSelector(
  selectAllInvoices,
  (invoices) => invoices.find(invoice => invoice.id === id) || null // Return null if not found
);
