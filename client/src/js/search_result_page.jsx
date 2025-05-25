import React from 'react';
import {Container, Card, Image, Row, Col, Alert} from 'react-bootstrap';
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
      `https://jeetou.com/api/search/?q=${searchQuery}`,
      function(data) {
        setSearchResult(data);
      }
    );
  };

  const renderCol = (entry) => {
    return (
      <Col lg={6} md={6} xs={12} key={entry.id} className="mb-3">
        <Link to={`/shot/${entry.id}`}>
          <Card>
            <Card.Body>
              <Image src={entry.get_image_url} fluid />
            </Card.Body>
          </Card>
        </Link>
      </Col>
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
      for (let i = 0; i < searchResults.length; i += 2) {
        const entry1 = searchResults[i];
        if (i + 1 < searchResults.length) {
          const entry2 = searchResults[i + 1];
          results.push(
            <Row key={i}>
              {renderCol(entry1)}
              {renderCol(entry2)}
            </Row>
          );
        } else {
          results.push(
            <Row key={i}>
              {renderCol(entry1)}
            </Row>
          );
        }
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
      {results}
    </Container>
  );
}

export default SearchResultPage;
