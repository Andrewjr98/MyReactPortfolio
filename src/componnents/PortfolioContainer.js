import React, { useState } from "react";
import NavTabs from "./NavTab";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home/>;
        }
        if (currentPage === 'About') {
            return <Home/>;
        }
        if (currentPage === 'Projects') {
            return <Projects/>;
        }
        return <Contact/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage ={currentPage} handlePageChange = {handlePageChange} />

            {renderPage()}
        </div>
    );
}