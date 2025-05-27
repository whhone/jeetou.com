import React from 'react';
import {Container, Card, Image, Alert} from 'react-bootstrap';
import {Link, useOutletContext, useSearchParams} from 'react-router-dom';
import safeAPICallback from './utils';

function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResult, setSearchResult] = React.useState(null);

  React.useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = (searchQuery) => {
    safeAPICallback(
      `/api/search/?q=${searchQuery}`,
      function(data) {
        setSearchResult(data);
      }
    );
  };

  const renderCard = (entry) => {
    return (
      <div key={entry.id} className="mb-3" style={{width: '48%', display: 'inline-block', marginRight: '2%'}}>
        <Link to={`/shot/${entry.id}`}>
          <Card>
            <Card.Img src={entry.get_image_url} />
          </Card>
        </Link>
      </div>
    );
  };

  let prompt = null;
  let results = [];

  if (searchResult === null) {
    prompt = <div>努力搵緊</div>;
  } else {
    const searchResults = searchResult.results;
    if (searchResult.count > 0) {
      prompt = (
        <div>
          搵到 <b>{searchResult.count}</b> 張關於 <b>{query}</b> 嘅截圖
        </div>
      );
      for (let i = 0; i < searchResults.length; i++) {
        const entry = searchResults[i];
        results.push(renderCard(entry));
      }
    } else {
      prompt = (
        <div>
          搵唔到關於 <b>{query}</b> 嘅截圖
        </div>
      );
    }
  }

  return (
    <Container>
      <Alert variant="info" className="text-center">
        {prompt}
      </Alert>
      <div>
        {results}
      </div>
    </Container>
  );
}

export default SearchResultPage;
