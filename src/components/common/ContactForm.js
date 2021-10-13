import React from 'react';
import Button from '../common/Button'
import styled from 'styled-components'
import data from '../../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"


const styles = data.styles

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    margin-bottom: 12px;
    border: 3px solid ${styles.colors.darkMainBg};
    box-shadow:  0px 4px 0px ${styles.colors.darkMainBg};
    border-radius: 13px;
    max-width: 52.55em;
    background: ${styles.colors.white};
    @media (min-width: ${styles.breakpoints.l}px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 30px 96px;
        max-width: 52.55em;
        margin: auto;
    }
`
const ContactHeading = styled.h3`
    font-size: 3.33em;
    font-weight:${styles.fontWeight.bold};
    text-align: center;
    margin-bottom: 40px;
    @media (min-width: ${styles.breakpoints.l}px) {
        margin-bottom: 26px;
        flex-basis: 100%;
    }
`
const ContactFormBlock = styled.div`
    @media (min-width: ${styles.breakpoints.l}px) {
        max-width: 23em;
        flex-basis: 50%;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 29px;
    position: relative;
    &:nth-last-of-type(2) {
        margin-bottom: 30px;
    }
    &:last-child {
        margin-bottom: 0;
        @media (min-width: ${styles.breakpoints.l}px) {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            &:nth-last-of-type(2) {
                margin-bottom: 22px;
            }
            a {
                width: max-content;
                margin-right: 14px;
            }
        }
    }
`
const Label = styled.label`
    font-size: 1em;
    font-weight:${styles.fontWeight.bold};
    margin-bottom: 8px;
`

const FieldContainer = styled.div`
    position: relative;
    &::after {
        content: url(${require('../../images/icon_form_error.svg').default});
        position: absolute; 
        height: 20px;
        width: 20px;
        right: 15px;
        top: 10px;
        @media (min-width: ${styles.breakpoints.l}px) {
            right: 20px;
        }
    }
`

const Field= styled.input`
    border: 2px solid ${styles.colors.black};
    border-radius: 12px;
    padding: 10px 45px 10px 16px;
    width: 100%;
    background: ${styles.colors.white};
    font-size: 1em;
    font-family: 'Rubik', sans-serif;
    &::placeholder {
        color: ${styles.colors.ultraLightGrey};
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        max-width: 20.38em;
    }
`
const TextArea= styled.textarea`
    border: 2px solid ${styles.colors.black};
    border-radius: 12px;
    padding: 10px 45px 10px 16px;
    width: 100%;
    background: ${styles.colors.white};
    font-size: 1.125em;
    font-family: 'Rubik', sans-serif;
    height: 130px;
    resize: none;    
    &::placeholder {
        color: ${styles.colors.ultraLightGrey};
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        max-width: 20.38em;
    }
`
const ErrorMessage= styled.p`
    color: ${styles.colors.orangeMain};
    font-weight:${styles.fontWeight.medium};
    font-size: .88em;
    font-size: .66em;
    margin-left: auto;
    margin-top: 5px;
    position: absolute;
    right: 6px;
    bottom: -22px;
`
const BtnSubmit = styled(Button)`
`
const FeedbackMessage= styled.p`
    color: ${styles.colors.orangeMain};
    font-weight:${styles.fontWeight.regular};
    font-size: .88em;
    margin-left: 0;
    margin-top: 15px;
    @media (min-width: ${styles.breakpoints.l}px) {
        margin-left: auto;
    }
    span {
        font-weight:${styles.fontWeight.bold};
        display: block;
    }
`
const ContactInfoBlock = styled.div`
    margin-top: 65px;
    @media (min-width: ${styles.breakpoints.l}px) {
        max-width: 15em;
        margin-top: 30px;
    }
`
const Email = styled(Link)`
    font-weight:${styles.fontWeight.bold};
    margin-bottom: 30px;
    display: block;
`
const OfficeListTitle = styled.h5`
    font-size: 1em;
    font-weight:${styles.fontWeight.bold};
`
const OfficeList = styled.ul`
    margin-left: 0;
`
const OfficeListItem = styled.li`
    list-style-type: none;
    margin-bottom: 30px;
    &:last-of-type {
        margin-bottom: 0;
    }
`

const ContactForm = () => {
    const intl = useIntl();

    return (
        <ContactContainer>
            <ContactHeading>Contacto</ContactHeading>
            <ContactFormBlock>
                <Form>
                    <FormGroup>
                        <Label htmlFor="nameField">Nombre* </Label>
                        <FieldContainer>
                            <Field name="nameField" type="text" placeholder="Nombre" />
                        </FieldContainer>
                        <ErrorMessage>Por favor, complete el campo requerido.</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="emailField">Email* </Label>
                        <FieldContainer>
                            <Field name="emailField" type="email" placeholder="E-mail" />
                        </FieldContainer>
                        <ErrorMessage>Por favor, complete el campo requerido.</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="textAreaField">Mensaje* </Label>
                        <FieldContainer>
                            <TextArea name="textAreaField" type="textarea" placeholder="Mensaje"  />
                        </FieldContainer>
                        <ErrorMessage>Por favor, complete el campo requerido.</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <BtnSubmit theme={styles} type="submit" value="enviar"></BtnSubmit>
                        <FeedbackMessage><span>Tu mensaje ha sido enviado.</span> Gracias por comunicarte con nostr@s</FeedbackMessage>
                    </FormGroup>
                </Form>
            </ContactFormBlock>
            <ContactInfoBlock>
                <Email>info@fiqus.com</Email>
                <OfficeListTitle>Sedes</OfficeListTitle>
                <OfficeList>
                    <OfficeListItem>14 de Julio 1268 Ciudad de Buenos Aires, Argentina</OfficeListItem>
                    <OfficeListItem>Av. Arrayanes 66, Local 7 Villa La Angostura, Neuquén, Argentina</OfficeListItem>
                </OfficeList>
            </ContactInfoBlock>
        </ContactContainer>
    );
};

export default ContactForm;