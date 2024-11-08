import React from 'react'
import styled from '@emotion/styled'


export const PostCard = ( {post} ) => {
  return (
    <Card>
        <Thumbnail src="../public/image/thumbnail.jpg" alt="thumbnail" />

        <Detail>
            <Up>
                <Title>{post.title}</Title>
                <Contents>{post.contents}</Contents>
            </Up>
            
            <Down>
                <Date>{post.date}</Date>
                <Dot>·</Dot>
                <Comment>{post.comment}개의 댓글</Comment>
            </Down>   
        </Detail>
        <Divider />
        <Profile>
            <Left>
                <Photo src="../public/image/profile.PNG" />
                <By>by</By>
                <Writer>{post.writer}</Writer>
            </Left>

            <Right>
                <Like>❤ {post.like}</Like>
            </Right>
        </Profile>
    </Card>
  )
}

export default PostCard

const Card = styled.div`
    box-shadow: 0px 0px 5px lightgray;
    width: 13rem;
    height: auto;
    border-radius: 0 0 0.2rem 0.2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-6px);
    }
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 115px;
    object-fit: cover;
    object-position: center;     /* 중앙에 사진을 고정 */
    
    &:hover {
        cursor: pointer;
    }
`;

const Detail = styled.div`
    padding: 0.8rem 0.7rem;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.h4`
    font-size: 0.7rem;
    margin: 0;
    color: #222529;
    white-space: nowrap;        /* 한 줄로 표시 */
    overflow: hidden;           /* 넘친 부분은 숨김 */
    text-overflow: ellipsis;    /* 말줄임표 표시 */
`;

const Contents = styled.p`
    font-size: 0.6rem;
    margin: 0;
    padding-top: 0.35rem;
    color: #4A5056;
    line-height: 1.4;
`;

const Up = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const Down = styled.div`
    display: flex;
    color: #878E95;
`;

const Date = styled.p`
    font-size: 0.6rem;
    margin: 0;
`;

const Dot = styled.p`
    font-size: 0.6rem;
    margin: 0 0.2rem;
`

const Comment = styled.p`
    font-size: 0.6rem;
    margin: 0;
`;

const Divider = styled.hr`
    margin: 0;
    border: none;
    border-top: 1px solid #ececec;
`;

const Profile = styled.div`
    padding: 0.3rem 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const Photo = styled.img`
    width: 1rem;
`;

const By = styled.p`
    font-size: 0.55rem;
    color: #878E95;
    padding-left: 0.3rem;
    margin: 0;
`

const Writer = styled.div`
    font-size: 0.55rem;
    font-weight: 500;
    padding-left: 0.3rem;
    color: #222529;
`;

const Right = styled.div`
    color: #222529;
`;

const Like = styled.div`
    font-size: 0.55rem;
    font-weight: 200;
`;
