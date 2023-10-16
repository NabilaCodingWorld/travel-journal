import React, { useEffect, useState } from 'react';
import ShareArticle from './ShareArticle';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Article = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://travel-journal-server.vercel.app/article')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='text-4xl mb-3 font-bold'>Articles & Tips</p>
                <p className='text-gray-500 text-xl'>Explore some of the best tips from around the world</p>
            </div>

            <a data-tooltip-id="my-tooltip" data-tooltip-content="Click To See Detail" className='max-w-7xl mx-auto grid md:grid-cols-3 gap-10 my-20'>
                {
                    articles.map(article => <ShareArticle key={article._id} article={article}></ShareArticle>)
                }
            </a>

            <ReactTooltip id="my-tooltip" place="top" effect="solid" />

        </div>
    );
};

export default Article;