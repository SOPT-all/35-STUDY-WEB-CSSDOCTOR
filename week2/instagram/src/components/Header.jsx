import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faBars, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faPaperPlane, faHeart, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faThreads } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
      <Container>
        <Top>
            <Logo src='/instagram.svg' />
        </Top>
        
        <Mid>
            <Home>
                <Icons icon={faHouse} />
                <span>홈</span>
            </Home>
            <Icons icon={faHouse} /> 
            <Icons icon={faMagnifyingGlass} />
            <Icons icon={faCompass} />
            <Icons icon={faFilm} />
            <Icons icon={faPaperPlane} />
            <Icons icon={faHeart} />
            <Icons icon={faSquarePlus} />
            <Profile src='/profile.png' />
        </Mid>

        <Bottom>
            <Icons icon={faThreads} />
            <Icons icon={faBars} />
        </Bottom>
        
      </Container>
    )
  }
  
export default Header

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 12px 20px 12px;
    width: 13.4%;
    height: 100vh;
    border-right: 1px solid #DBDBDB;
`;

const Top = styled.div`
    padding: 25px 12px 16px 12px;
    margin-bottom: 0.6rem;
`;

const Logo = styled.img`
    width: 6.45rem;
`;
const Mid = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 12px 16px 12px;
    gap: 0.6rem;
`;

const Home = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Icons = styled(FontAwesomeIcon)`
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    padding: 10px 0;
`;

const Profile = styled.img`
    width: 1.6rem;
    height: 1.6rem;
    padding: 10px 0;
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 25px 12px 40px 12px;
    gap: 0.6rem;
    margin-top: auto;  // 자동으로 아래로 붙도록 설정
`;