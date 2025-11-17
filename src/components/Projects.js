import React from 'react';


const sampleProjects = [
{
title: 'Recommendation System',
desc: 'Recommending Sales Rep on which HCP to target, when and via which channels.Model increase sales to $100M (up from $700K).',
link: '#'
},
{
title: 'Market Mix Modelling',
desc: 'Design a model to evaluate ROI of different media channels running different campaigns.Aiming to optimize marketing spent to increase performance of all campaigns. ',
link: '#'
},
{
title: 'Search AI Agent',
desc: 'Developed a search agent  that enables intelligent retrieval and summarization of documents using file content, metadata, and embeddings. Integrated PGVector for vector storage, LLMs (Claude, Gemini) for semantic search and summarization, and Multi agent using LangChain , LangGraph .',
link: '#'
},
{
title: 'Causal Inference',
desc: 'Designed and executed causal inference–driven A/B experiments to evaluate a new recommendation model.Applied rigorous experiment design, metric definition, and validity checks (SUTVA, independence, randomization) to ensure reliable business impact measurement.',
link: '#'
},
{
title: 'Inventory planning (Forecasting Sales)',
desc: 'Designed and implemented model with demand forecasting using LSTM achieving low RMSE. Automated the entire pipeline via Databricks Workflows using Spark.',
link: '#'
},
];


export default function Projects(){
return (
<section id="projects" className="section gray">
<div className="container">
    <h2>Employment</h2>
    <ul>
         <li>Generative AI Data Scientist, ACQUIA (2024) </li>
        <li>Senior Data Scientist, ZS Associates (2022 - 2023)</li>
        <li>Data Scientist, IBM (2018 - 2022)</li>
        <li>Software Engineer, Infosys (2015-2017)</li>

    </ul>
<h2>Projects</h2>
<div className="projects-grid">
{sampleProjects.map((p,i)=> (
<article className="card" key={i}>
<h3>{p.title}</h3>
<p>{p.desc}</p>

</article>
))}
</div>
</div>
</section>
);
}