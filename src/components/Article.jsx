import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useParams } from "react-router";
import '../styles/components/Article.css'
import Squares from '../reactbits/Squares';

import ArticleBackground from '../reactbits/ArticleBackground';

const Article = ({section}) => {
  const [content, setContent] = useState("");
  const {title} = useParams();
  const filePath = `/content/${section}/${title}.md`;

  useEffect(() => {
    console.log(filePath);
    fetch(filePath)
      .then((response) => {
        if(!response.ok) {
          throw new Error('File not found');
        }
        console.log(filePath);
        return response.text();
      })
      .then((data) => {(console.log("DATA: " + data)); return data;})
      .then((text) => setContent(text));
  }, [filePath]);

  return (
    <div>
    <Squares direction=""/>
    <ArticleBackground color="var(--color-background-dark)" />
    <div className="article-body">
      {content ? (
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({node, ...props}) => (
              <a target="_blank" rel="noopener noreferrer" {...props} />
            )
          }}
        />
      ) : (
        <p className="loadingMessage">Loading...</p>
      )}
    </div>
    </div>
  );
};

export default Article;
