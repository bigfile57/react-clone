import React from 'react'
import Blog from "../pages/blog/Blog";
import Community from "../pages/community/Community";
import Docs from "../pages/docs/Docs";
import Practice from "../pages/practice/Practice";

const ContentsContainer = ({pageName}) => {

    if(pageName === "docs"){
        return <Docs />;
    }
    else if(pageName === "practice"){
        return <Practice />;
    }
    else if(pageName === "blog"){
        return <Blog />;
    }
    else if(pageName === "community"){
        return <Community />;
    }
}

export default ContentsContainer
