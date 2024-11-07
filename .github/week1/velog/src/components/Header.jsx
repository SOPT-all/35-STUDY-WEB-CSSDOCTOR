import React, { useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass, faCaretDown } from "@fortawesome/free-solid-svg-icons";


function Header() {
    const [openMyModal, setOpenMyModal] = useState(false);

    const dropMyModal = () => setOpenMyModal(!openMyModal);

    return (
        <>
            <Title>
                <div>
                    <Logo src="public/image/velog_logo.svg" alt="velog logo" />
                </div>

                <Right>
                    <Icon icon={faBell} />  
                    <Icon icon={faMagnifyingGlass} />
                    <NewPost type="button">새 글 작성</NewPost>
                    <Set onClick={dropMyModal}>
                        <Profile src="public/image/profile.PNG" />
                        <Dropdown icon={faCaretDown} />
                    </Set>
                </Right>

                {openMyModal && (
                    <MyModal>
                        <OptionMy>내 벨로그</OptionMy>
                        <Divider />
                        <OptionMy>임시 글</OptionMy>
                        <Divider />
                        <OptionMy>읽기 목록</OptionMy>
                        <Divider />
                        <OptionMy>설정</OptionMy>
                        <Divider />
                        <OptionMy>로그아웃</OptionMy>
                    </MyModal>
                )}
            </Title>
        </>
        
    )
}

export default Header


const Title = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    position: relative;
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
    background-color: #F8F9FA;
    border-width: 1px;
    border-color: #222529;
    border-radius: 15px;
    font-size: 0.7rem;
    padding: 3px 13px;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        transition: all 0.3s;  // 부드러운 효과
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

const MyModal = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 5;
    /* padding-right: 80px; */
    box-shadow: 0px 0px 5px lightgray;
`;

const OptionMy = styled.div`
    padding: 8px 80px 8px 10px;  
    font-size: 0.6rem;
    background-color: white;

    &:hover {
        background-color: #F8F9FA;
        cursor: pointer;
    }
`;

const Divider = styled.hr`
    /* width: 270%; */
    margin: 0;
    border: none;
    border-top: 1px solid #ececec;
`;