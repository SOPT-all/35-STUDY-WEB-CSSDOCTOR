import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass, faCaretDown } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <Container>
            <Title>
                <div>
                    <Logo src="public/image/velog_logo.svg" alt="velog logo" />
                </div>

                <Right>
                    <Icon icon={faBell} />  
                    <Icon icon={faMagnifyingGlass} />
                    <NewPost type="button">새 글 작성</NewPost>
                    <Set>
                        <Profile src="public/image/profile.PNG" />
                        <Dropdown icon={faCaretDown} />
                    </Set>
                </Right>
            </Title>
        </Container>
        
    )
}

export default Header

const Container = styled.div`
    margin: 0 33px;
`;

const Title = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

const Logo = styled.img`
    width: 3rem;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`;

const Icon = styled(FontAwesomeIcon)`
    width: 15px;
    height: 15px;
    font-size: 0.8rem;
    border-radius: 50%;
    cursor: pointer;
    padding: 7px;

    &:hover {
        background-color: #ebebeb;
    }
`;

const NewPost = styled.button`
    background-color: #f5f5f5;
    border-width: 1px;
    border-radius: 15px;
    font-size: 0.7rem;
    padding: 3px 13px;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        transition: all 0.3s;
    }
`;

const Set = styled.div`
    display: flex;
    align-items: center;
    color: grey;
    cursor: pointer;

    &:hover {
        filter: drop-shadow(0px 0px 5px lightgray);
        color: black;
        transition: all 0.1s;
    }
`;

const Profile = styled.img`
    width: 2rem;
    padding: 0 5px;

`;

const Dropdown = styled(FontAwesomeIcon)`
    width: 0.5rem;

`;