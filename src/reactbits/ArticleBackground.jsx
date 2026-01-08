
import '../styles/reactbits/ArticleBackground.css';

const ArticleBackground = ({ color = '#f0f0f0' }) => {
  return (
    <div
      className="article-background"
      style={{ backgroundColor: color }}
    />
  );
};

export default ArticleBackground;
