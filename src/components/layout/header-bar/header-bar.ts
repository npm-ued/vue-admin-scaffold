export interface Breadcrumb {
  path?: string;
  icon?: string;
  name: string;
  title: string;
}

export interface BreadcrumbItemProps {
  to: string | Record<string, unknown>;
  replace: boolean;
}
