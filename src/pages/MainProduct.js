import "slick-carousel/slick/slick.css";
import ProductSlide from "react-slick";
import { DEFAULT_SECTION, DEFAULT_CONTENTS, Inner } from "./common";
import styled from "styled-components";
import { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const H2 = styled.h2`
font-size: 30px;
font-weight: 700;
margin: 0 0 10px 0;
`
const Desc = styled.p`
font-size: 14px;
margin: 0 0 30px 0;
`

const SlideWrapper = styled.div`
position: relative;
margin: 0 -10px;
`

const SlideItm = styled.div`
`

const Figure = styled.figure`
margin: 0 10px 20px 10px;
`

const FigDescription = styled.p`
font-size: 18px;
padding: 10px 0;
`
const FigPrice = styled.p`
padding: 20px 0 0 0;
font-size: 14px;
`

const Img = styled.img`
max-width: 100%;
`

const Arrows = styled.ul`
font-size: 50px;
`

const ArrowLeft = styled.li`
position: absolute;
inset: 55% 0 0 50%;
transform: translate(-50%,-50%);
margin: 0 0 0 -700px;
`
const ArrowRight = styled.li`
position: absolute;
inset:55% 0 0 50%;
transform: translate(-50%,-50%);
margin: 0 0 0 700px;
`





const MainProduct = ({ DEFAULT_PRODUCT, DEFAULT_CONTENTS }) => {

    const slide = useRef(null);

    const option = {
        arrows: false,
        slidesToShow: 4
    }
    return (
        <DEFAULT_SECTION>
            <H2>{DEFAULT_CONTENTS[3].title}</H2>
            <Desc>{DEFAULT_CONTENTS[3].description}</Desc>
            <Inner>
                <SlideWrapper>
                    <ProductSlide {...option} ref={slide}>
                        {
                            DEFAULT_PRODUCT.map((itm, idx) => {
                                return (
                                    <SlideItm key={idx}>
                                        <Figure>
                                            <Img src={`${process.env.PUBLIC_URL}/assets/pro0${idx + 1}.avif`} alt={itm.description} />
                                        </Figure>
                                        <FigDescription>{itm.title}</FigDescription>
                                        <div>{itm.description}</div>
                                        <FigPrice>{itm.price}</FigPrice>
                                    </SlideItm>
                                )
                            })
                        }
                    </ProductSlide>
                    <Arrows>
                        <ArrowLeft><BsChevronLeft onClick={() => slide.current.slickPrev()} /></ArrowLeft>
                        <ArrowRight><BsChevronRight onClick={() => slide.current.slickNext()} /></ArrowRight>
                    </Arrows>
                </SlideWrapper>
            </Inner>
        </DEFAULT_SECTION>
    )
}

export default MainProduct;