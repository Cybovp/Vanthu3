import { useSelector } from "react-redux";

export const ChangeSidebar: React.FC = () => {
  const sidebarComponent = useSelector((state: any) => state.sidebarComponent);
  return <div>{sidebarComponent}</div>;
};
