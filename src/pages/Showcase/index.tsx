import {Carousel, Col, Image, Row} from "antd";
import Container from "../../common/Container";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar } from "antd";
import Masonry from "react-masonry-component";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Showcase = () => {
    const photos = [
        {
            id: 1,
            url: '/img/1.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 2,
            url: '/img/2.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 3,
            url: '/img/3.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 4,
            url: '/img/4.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 5,
            url: '/img/5.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 6,
            url: '/img/6.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 7,
            url: '/img/7.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 8,
            url: '/img/8.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 9,
            url: '/img/9.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 10,
            url: '/img/10.png',
            alt: 'Image generated by Gpt'
        },
        {
            id: 11,
            url: '/img/Babblebots.png',
            alt: 'Image generated by Gpt'
        },


    ];
    return (
        <Container>
            <InfiniteScroll
                dataLength={photos.length}
                next={() => console.log("next")}
                hasMore={false}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>There is no more photo!</b>
                    </p>
                }
                loader={<p>Loading...</p>}
            >
                <Masonry
                    className="gallery"
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                >
                        <Row gutter={[24, 32]}>
                    {photos.map((photo, i) => (<Col span={8}>
                                <Image src={photo.url} alt={photo.alt} />
                    </Col>))}
                        </Row>
                </Masonry>
            </InfiniteScroll>
        </Container>
    );
};

export default Showcase;