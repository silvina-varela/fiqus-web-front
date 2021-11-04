import React from 'react';
import styled from 'styled-components'
import data from '../../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import Button from '../common/Button'
import Img from "gatsby-image"

const styles = data.styles

const PostThumbnailWrapper = styled.div`
    margin-bottom: 50px;
    max-width: 320px;
    flex-basis: 100%;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 351px;
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        flex-basis: 33%;
        max-width: 300px;
        margin-bottom: 55px;
    }
` 

const PostThumbnailImage = styled.div`
    border-radius: 6px;
    margin-bottom: 10px;
    height: 230px;
    max-width: 320px;
    @media (min-width: ${styles.breakpoints.l}px) {
        height: 215px;
    }
`
const PostThumbnailTitle = styled.h3`
    font-size: 1.16em;
    line-height: 27px;
    color: ${styles.colors.darkMainBg};
    margin-bottom: 10px;    
    @media (min-width: ${styles.breakpoints.l}px) {
        font-weight: ${styles.fontWeight.bold};
        margin-bottom: 8px;
    }
`
const PostThumbnailDescription =styled.p`
    font-size: .88em;
    line-height: 20px;
    margin-bottom: 20px;
    color: ${styles.colors.darkGrey};
    @media (min-width: ${styles.breakpoints.l}px) {
        margin-bottom: 12px;
    }
`
const BtnContainer =  styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Btn =  styled(Button)`
    font-size: .88em;
    margin: 0;
    padding: 6px 12px;
    box-shadow: none;
    border-radius: 10px;
    &:hover {
        box-shadow: 0px 3px 0px ${styles.colors.lightGrey};
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        font-size: .77em;
        padding: 7px 15px;
    }
`

const PostThumbnail = (props) => {
    const intl = useIntl();

    return (
        <PostThumbnailWrapper>
            <PostThumbnailImage> 
                <Img
                    fluid = {props.fluid}
                    alt=""
                />
            </PostThumbnailImage>
            <PostThumbnailTitle>{props.postTitle}</PostThumbnailTitle>
            <PostThumbnailDescription>{props.postDescription}</PostThumbnailDescription>
            <BtnContainer>
                <Btn
                  type='btnSecondary'
                  theme={styles}
                  isLink
                  href={props.slug}
                  btnText='leer'
                />
            </BtnContainer>
        </PostThumbnailWrapper>
    );
};

export default PostThumbnail;