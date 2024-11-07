import React, {useState} from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faClock, faRss, faEllipsisVertical, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    const [openPeriodModal, setOpenPeriodModal] = useState(false);  // 모달의 열림, 닫힘
    const [openMoreModal, setOpenMoreModal] = useState(false);  // 더보기 버튼 모달

    const dropPeriodModal = () => setOpenPeriodModal(!openPeriodModal);
    const dropMoreModal = () => setOpenMoreModal(!openMoreModal);


    return(
        <Container>
            <LeftNav>
                <Trending>
                    <Icon icon={faArrowTrendUp} />
                    <Span>트렌딩</Span>
                </Trending>
                <Recent>
                    <Icon icon={faClock} />
                    <Span>최신</Span>
                </Recent>
                <Feed>
                    <Icon icon={faRss} />
                    <Span>피드</Span>
                </Feed>
            </LeftNav>

            <RightNav>
                <Period onClick={dropPeriodModal}>
                    이번 주
                    <Dropdown icon={faCaretDown} />
                </Period>

                <More>
                    <MoreIcon onClick={dropMoreModal} icon={faEllipsisVertical} />
                </More>
            </RightNav>

            {/* 모달이 열리면 표시 */}
            {openPeriodModal && (
                <PeriodModal>
                    <OptionPeriod>오늘</OptionPeriod>
                    <Divider />
                    <OptionPeriod style={{ color: "#55B589" }}>이번 주</OptionPeriod>
                    <Divider />
                    <OptionPeriod>이번 달</OptionPeriod>
                    <Divider />
                    <OptionPeriod>올해</OptionPeriod>
                </PeriodModal>
            )}

            {openMoreModal && (
                <MoreModal>
                    <OptionMore>공지사항</OptionMore>
                    <Divider />
                    <OptionMore>태그 목록</OptionMore>
                    <Divider />
                    <OptionMore>서비스 정책</OptionMore>
                    <Divider />
                    <OptionMore>Slack</OptionMore>
                    <Divider />
                    <OptionMore>문의</OptionMore>
                </MoreModal>
            )}
        </Container>
    )
}

export default Nav

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    position: relative;
`;

const LeftNav = styled.div`
    display: flex;
    gap: 15px;
    color: #878E95;
`;

const Trending = styled.div`
    display: flex;
    gap: 7px;
    cursor: pointer;
    color: #222529;
`;

const Icon = styled(FontAwesomeIcon)`
    width: 0.8rem;
    height: 0.8rem;
`;

const Span = styled.span`
    font-size: 0.8rem;
`;

const Recent = styled.div`
    display: flex;
    gap: 7px;
    cursor: pointer;
`;

const Feed = styled.div`
    display: flex;
    gap: 7px;
    cursor: pointer;
`;

const RightNav = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
`;

const Period = styled.div`
    cursor: pointer;
    font-size: 0.6rem;
    font-weight: bold;
    padding: 4px 7px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #4A5056;
    box-shadow: 0px 0px 5px lightgray;
    background-color: white;

    &:hover {
        color: #757A7F;
    }
`;

const Dropdown = styled(FontAwesomeIcon)`
    width: 0.5rem;
`;

const More = styled.div`
    display: flex;
`;

const MoreIcon = styled(FontAwesomeIcon)`
    color: #878E95;
    cursor: pointer;
    width: 0.2rem;
`;

const PeriodModal = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 5;
    box-shadow: 0px 0px 5px lightgray;
`;

const OptionPeriod = styled.div`
    padding: 8px 80px 8px 10px;  
    font-size: 0.6rem;
    background-color: white;
    font-weight: bold;

    &:hover {
        background-color: #F8F9FA;
        cursor: pointer;
    }
`;

const Divider = styled.hr`
    margin: 0;
    border: none;
    border-top: 1px solid #ececec;
`;

const MoreModal = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 5;
    box-shadow: 0px 0px 5px lightgray;
`;

const OptionMore = styled.div`
    padding: 8px 63px 8px 10px;  
    font-size: 0.6rem;
    background-color: white;
    font-weight: bold;

    &:hover {
        background-color: #F8F9FA;
        cursor: pointer;
    }
`;