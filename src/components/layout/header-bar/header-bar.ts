export interface Breadcrumb {
  path?: string;
  icon?: string;
  name: string;
}

export interface BreadcrumbItemProps {
  to: string | Record<string, unknown>;
  replace: boolean;
}
