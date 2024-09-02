import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { InvoiceService } from '../../services/invoice/invoice.service';
import { loadInvoice, loadInvoicesFailure, loadInvoicesSuccess } from './invoices.action';

@Injectable()
export class InvoiceEffects {
  actions$ = inject(Actions);
  invoiceService = inject(InvoiceService);

  public loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInvoice),
      switchMap(() =>
        this.invoiceService.getInvoices().pipe(
          tap(data => console.log('Fetched Invoices:', data)), // This should log the fetched data
          map(data => loadInvoicesSuccess({ invoices: data })),
          catchError((error) => {
            console.error('Error fetching invoices:', error); // Logs error if any
            return of(loadInvoicesFailure({ error: error.message }));
          })
        )
      )
    )
  );

}
