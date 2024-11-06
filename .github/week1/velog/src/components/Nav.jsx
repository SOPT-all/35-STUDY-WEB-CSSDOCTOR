import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    return(
        <nav>
            <left-nav>
                <Trending>
                    <FontAwesomeIcon icon={faArrowTrendUp} />
                    트렌딩
                </Trending>
                <Recent>
                    <FontAwesomeIcon icon={faClock} />
                    최신
                </Recent>
                <Feed>
                    <FontAwesomeIcon icon={faArrowTrendUp} />
                    피드
                </Feed>
            </left-nav>

            <right-nav>
                <Period></Period>
                <More></More>
            </right-nav>
        </nav>
    )
}

export default Nav