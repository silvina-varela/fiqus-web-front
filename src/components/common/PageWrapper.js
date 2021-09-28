import React from 'react';
import styled from 'styled-components'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Tag from '../common/Tag'
import Button from '../common/Button'
import data from '../../content/content.json'

const styles = data.styles

const Wrapper = styled.div`
    position: relative;
    margin:0;
    padding:0;
    width:100%;
    min-height:100%;
`
const PageContainer = styled.section `
    width:100%;
    max-width:${styles.breakpoints.xl}px;
    min-width:${styles.breakpoints.xs}px;
    padding: 150px 50px;
    margin: 0 auto;
    min-height:100vh;
`
const PageWrapper = (props) => {
    return (
            <Wrapper>
                <Header></Header>
                <PageContainer>{props.children}
                <Tag type="services" theme={styles}></Tag>
                <Button type="btnPrimaryOrange" theme={styles} href=""></Button>
                <Button type="btnPrimaryOrangePurple" theme={styles} href=""></Button>
                <Button type="btnPrimaryWhite" theme={styles} href=""></Button>
                <Button type="btnPrimaryPurple" theme={styles} href=""></Button>
                <Button type="btnSecondary" theme={styles} href=""></Button>
                <Button type="btnLabeled" theme={styles} href=""></Button>
                </PageContainer>
                <Footer></Footer>
            </Wrapper>
    );
};

export default PageWrapper;