import {Invoice} from "../models/invoice.model";
import {Action, ActionReducer} from "@ngrx/store";
import {invoiceReducer, InvoiceState} from "./invoices/invoices.reducer";
import {InvoiceEffects} from "./invoices/invoices.effects";

export interface AppState {
  invoice: Invoice;
}

export interface AppStore {
  invoice: ActionReducer<InvoiceState, Action>;
}

export const appStore: AppStore = {
  invoice: invoiceReducer
};


export const appEffects = [InvoiceEffects];
