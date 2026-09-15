
import '../styles/reactbits/ArticleBackground.css';

const ArticleBackground = ({ color = 'var(--color-surface-muted)' }) => {
  return (
    <div
      className="article-background"
      style={{ backgroundColor: color }}
    />
  );
};

export default ArticleBackground;
