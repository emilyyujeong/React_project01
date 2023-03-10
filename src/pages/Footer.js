import React from 'react';

function Footer() {
    return (
        <>
            <style>
                {`
                footer {
                    background: #333;
                    color: #fff;
                }


            ul,
            ol,
            li {
              text-decoration: none;
              list-style: none;
            }


            .inner {
               width: 1200px;
               margin: 0 auto;
              }


            .top {
              display: flex;
              justify-content: space-between;
              padding: 30px 0;
             font-size: 14px;
            }

            .top>ul>li {
                line-height: 30px;
            }

            .bottom {
               
            }

            .bold {
              font-weight: 700;
              font-size: 18px;
            }

            .info {
                padding: 20px 0;
                font-size: 14px;
            }

            .info>ul li {
                line-height: 22px;

            }
            .copy {
                   padding: 30px 0
            }
          `}
            </style>

            <footer>
                <div className="inner">
                    <div className="top">
                        <ul>
                            <li className="bold">고객서비스</li>
                            <li>자주 묻는 질문</li>
                            <li>고객관리지원팀</li>
                            <li>나의 오더</li>
                            <li>주문 조회</li>
                            <li>교환 및 환불 규정</li>
                            <li>온라인 부티크 쇼핑</li>
                        </ul>
                        <ul>
                            <li className="bold">회사 소개</li>
                            <li>법인 정보</li>
                            <li>커리어</li>
                        </ul>
                        <ul>
                            <li className="bold">소셜 네트워크</li>
                            <li>인스타그램</li>
                            <li>페이스북</li>
                            <li>유튜브</li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <div className="address">
                            <div>
                                이엘씨에이한국(유) 대표: Teng, Hsiao-Hua (Catherine), 서울시 강남구 강남대로 382 (역삼동) 메리츠타워, 06232
                            </div>
                            <div className="info">
                                <ul>
                                    <li>
                                        사업자등록번호: 211-81-71889
                                    </li>
                                    <li>통신판매업신고번호: 강남-15737호</li>
                                    <li>고객관리지원팀: (02) 6971-3228 consumercare-kr@jomalone.com</li>
                                    <li>호스팅서비스 사업자: ㈜엘지유플러스</li>
                                </ul>
                            </div>
                        </div>
                        <div className="copy">
                            &copy; Jo Malone London 2021
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
