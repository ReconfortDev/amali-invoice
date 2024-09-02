export interface Invoice {
  id: string;
  clientName: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  description?: string;
  invoiceNumber: string;
  createdAt: string;
  items?: InvoiceItem[];
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
  total: number;
}

export type InvoiceStatus = 'Paid' | 'Pending' | 'Draft';
