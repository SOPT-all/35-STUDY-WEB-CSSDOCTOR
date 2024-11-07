import React from 'react';
import styled from '@emotion/styled';
import { PostCard } from './PostCard';
import data from '../assets/data.json';

const Main = () => {
    console.log(data);
    return (
        <Container>
            {data.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </Container>
  )
}

export default Main

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px 25px;
    margin-top: 1rem;
`;