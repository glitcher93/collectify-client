import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import HomeMain from "../../components/HomeMain";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";


function HomePage() {

    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        if(sessionStorage.getItem("authorization")) {
            setHasAccess(true);
        }
    }, [])

    if (!hasAccess) {
        return (
        <>
            <p>Error 403: Access forbidden</p>
            <Link to='/'>
                Click here to go back
            </Link>
        </>
        )
    }

    return (
        <>
            <PageHeader />
            <Hero />
            <HomeMain />
            <PageFooter />
        </>
    );
}

export default HomePage;