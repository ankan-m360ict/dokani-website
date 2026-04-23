import {
  LayoutDashboard, ShoppingCart, Receipt, Package, Truck, FileText, Warehouse,
  ArrowLeftRight, Undo2, Wallet, Users, FileCheck2, Landmark, Factory,
  CreditCard, Banknote, PiggyBank, BarChart3, Settings, ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Module = {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  features: string[];
};

export const modules: Module[] = [
  { slug: "dashboard", name: "Dashboard", icon: LayoutDashboard, description: "A live, at-a-glance view of sales, stock, cash flow and KPIs across every branch.", features: ["Real-time KPIs", "Branch comparison", "Custom widgets"] },
  { slug: "sales", name: "Sales", icon: ShoppingCart, description: "POS-fast invoicing with discounts, taxes and instant receipt printing.", features: ["Quick invoicing", "Tax & discount engine", "Receipt printing"] },
  { slug: "money-receipt", name: "Money Receipt", icon: Receipt, description: "Track every payment received against invoices with automatic reconciliation.", features: ["Multi-currency", "Auto-reconcile", "PDF receipts"] },
  { slug: "products", name: "Products", icon: Package, description: "Unlimited products with variants, barcodes, batches and multi-unit support.", features: ["Variants & batches", "Barcode generator", "Bulk import"] },
  { slug: "purchase", name: "Purchase", icon: Truck, description: "Raise POs, receive goods and update stock in one fluid workflow.", features: ["PO automation", "GRN tracking", "Landed cost"] },
  { slug: "quotation", name: "Quotation", icon: FileText, description: "Send beautiful quotes that convert into orders in a single click.", features: ["Branded templates", "Convert to invoice", "Approval flow"] },
  { slug: "warehouse", name: "Warehouse", icon: Warehouse, description: "Manage unlimited warehouses with rack, bin and shelf level precision.", features: ["Multi-location", "Bin tracking", "Stock audit"] },
  { slug: "transfer", name: "Transfer", icon: ArrowLeftRight, description: "Move stock between warehouses with full chain-of-custody.", features: ["In-transit stock", "Approvals", "Auto adjustments"] },
  { slug: "return", name: "Return", icon: Undo2, description: "Handle sales & purchase returns with credit notes and stock reversal.", features: ["Sales returns", "Purchase returns", "Credit notes"] },
  { slug: "accounts", name: "Accounts", icon: Wallet, description: "A full double-entry ledger with chart of accounts, journals and trial balance.", features: ["Journals", "Trial balance", "P&L"] },
  { slug: "customer", name: "Customer", icon: Users, description: "360° customer profiles with credit limits, statements and loyalty tracking.", features: ["Credit limits", "Statements", "Loyalty"] },
  { slug: "cheque", name: "Cheque Management", icon: FileCheck2, description: "Track issued & received cheques through every status with reminders.", features: ["Status pipeline", "Auto reminders", "Bounce tracking"] },
  { slug: "loan", name: "Loan & Investment", icon: Landmark, description: "Manage business loans, repayments, interest and investor positions.", features: ["EMI schedule", "Interest calc", "Investor cap table"] },
  { slug: "supplier", name: "Supplier", icon: Factory, description: "Centralise supplier data, payables and performance scoring.", features: ["Payables aging", "Performance score", "Statements"] },
  { slug: "expense", name: "Expense", icon: CreditCard, description: "Capture every expense by category, project or branch with attachments.", features: ["Categories", "Receipts upload", "Approvals"] },
  { slug: "payroll", name: "Payroll", icon: Banknote, description: "Run salaries with allowances, deductions, attendance and payslips.", features: ["Payslips", "Tax & deductions", "Attendance link"] },
  { slug: "other-income", name: "Other Income", icon: PiggyBank, description: "Record non-sales income streams cleanly into your books.", features: ["Income categories", "Recurring entries", "Auto-posting"] },
  { slug: "reports", name: "Reports", icon: BarChart3, description: "15+ ready-made reports plus a builder for the ones you invent.", features: ["15+ reports", "Custom builder", "Schedule & email"] },
  { slug: "configuration", name: "Configuration", icon: Settings, description: "Tune Dokani to your business — taxes, units, numbering, branding.", features: ["Tax presets", "Custom numbering", "White-label"] },
  { slug: "administration", name: "Administration", icon: ShieldCheck, description: "Granular roles, audit trails and SSO for teams that scale.", features: ["Role-based access", "Audit logs", "SSO ready"] },
];
