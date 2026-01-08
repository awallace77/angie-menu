import type { PageView } from "./PageView";

export interface NavigationProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
}
