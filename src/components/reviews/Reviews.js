import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../API';
import { Cont, Item, Name, ReviewText } from './Reviews.styled';

const Review = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      const response = await getReviews({ id: movieId, controller });
      setData(response);
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!data) return null;

  if (data.length === 0) {
    return <div>No reviews for this movie</div>;
  }

  return (
    <Cont>
      {data.map(review => (
        <Item key={review.id}>
          <Name>{review.author}</Name>
          <ReviewText>{review.content}</ReviewText>
        </Item>
      ))}
    </Cont>
  );
};

export default Review;
