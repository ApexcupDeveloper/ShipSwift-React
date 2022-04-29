import { AppRoutes } from "./routes";

export const DashboardRoutes = [
  AppRoutes.Dashboard.Index,
  AppRoutes.Orders.Index,
  AppRoutes.Products.Index,
  AppRoutes.Settings.Index,
  AppRoutes.Support.Index,
  AppRoutes.Admin.Index,
  AppRoutes.Auth.NewAccount,
  AppRoutes.Shipments.Index,
] as const;
