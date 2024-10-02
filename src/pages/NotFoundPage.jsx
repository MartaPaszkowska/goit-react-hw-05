import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Go back to <Link to="/">Home</Link>.
      </p>
    </div>
  );
}

export default NotFoundPage;
