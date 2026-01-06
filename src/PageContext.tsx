import React, { createContext, useContext, useState } from 'react';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import ProjectPage from './ProjectsPage/ProjectPage';
import ContactPage from './ContactPage/ContactPage';

const PageContext = createContext<any>(null);

export function PageProvider({ children }: { children: React.ReactNode }) {
  let [page, setPage] = useState(<HomePage />);
  const [currentPage, setActive] = useState(1);
  const [hover, setHover] = useState(false);
  function ChangePage(pageNum: number)
  {
    window.scrollTo(0,0);
    switch(pageNum)
    {
      case 1:
        setPage(page = <HomePage />)
        break;
      case 2:
        setPage(page = <AboutPage />)
        break;
      case 3:
        setPage(page = <ProjectPage />)
        break;
      case 4:
        setPage(page = <ContactPage />)
        break;
    }
    setActive(pageNum);
  }

  return (
    <PageContext.Provider value={{ page, currentPage, ChangePage, hover, setHover }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageInfo() {
  return useContext(PageContext);
}

