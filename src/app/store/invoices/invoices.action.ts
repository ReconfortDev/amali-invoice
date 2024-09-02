import { createAction, props } from '@ngrx/store';
import { Invoice } from "../../models/invoice.model";

// Action to load invoices
export const loadInvoice = createAction('[Invoice] Load Invoices');

// Action triggered when invoices are successfully loaded
export const loadInvoicesSuccess = createAction(
  '[Invoice] Load Invoices Success',
  props<{ invoices: Invoice[] }>()
);

// Action triggered when there is a failure loading invoices
export const loadInvoicesFailure = createAction(
  '[Invoice] Load Invoices Failure',
  props<{ error: string }>()
);

// Action to add a new invoice
export const addInvoice = createAction(
  '[Invoice] Add Invoice',
  props<{ invoice: Invoice }>()
);

// Action to update an existing invoice
export const updateInvoice = createAction(
  '[Invoice] Update Invoice',
  props<{ invoice: Invoice }>()
);

// Action to delete an invoice
export const deleteInvoice = createAction(
  '[Invoice] Delete Invoice',
  props<{ id: string }>()
);
