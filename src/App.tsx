import { usePageInfo } from "./PageContext";
import './App.css';
import Mouse from './Mouse';
import TopBar from './TopBar/TopBar';
import Footer from './Footer/Footer';

export default function App() {
  const { page } = usePageInfo();
  const { currentPage } = usePageInfo();
  return (
    <div>
      <Mouse />
      <TopBar id={currentPage}/>
      {page}
      <Footer />
    </div>
  );
}