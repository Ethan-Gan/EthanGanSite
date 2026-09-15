import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useParams } from "react-router";
import '../styles/components/Article.css'
import Squares from '../reactbits/Squares';

import ArticleBackground from '../reactbits/ArticleBackground';
import { SHOW_SQUARES } from '../config';

const Article = ({section}) => {
  const [content, setContent] = useState("");
  const {title} = useParams();
  const filePath = `/content/${section}/${title}.md`;

  // Markdown image sources are written as bare filenames relative to the .md
  // file (which lives in /content/<section>/). Because the article renders at a
  // route URL like /projects/plantRotator, a browser would resolve those
  // relative paths against the page URL, not the content folder — so they 404.
  // Resolve any non-absolute src against the content directory instead.
  const resolveImageSrc = (src) => {
    if (!src) return src;
    // Leave absolute URLs and root-relative/data paths untouched.
    if (/^(https?:)?\/\//.test(src) || src.startsWith('/') || src.startsWith('data:')) {
      return src;
    }
    return new URL(src, `${window.location.origin}/content/${section}/`).pathname;
  };

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
    {SHOW_SQUARES && <Squares direction="" />}
    <ArticleBackground color="var(--color-surface-dark)" />
    <div className={`article-body article-${section}-${title}`}>
      {content ? (
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({node, ...props}) => (
              <a target="_blank" rel="noopener noreferrer" {...props} />
            ),
            img: ({node, src, ...props}) => (
              <img src={resolveImageSrc(src)} {...props} />
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
