import React, {useState} from 'react';
import Button from '../common/Button'
import styled from 'styled-components'
import data from '../../content/content.json'
import { useIntl, Link } from "gatsby-plugin-react-intl"
import { useForm } from "react-hook-form";


const styles = data.styles

const ContactMainContainer = styled.div`
    position: relative;
    background: ${styles.colors.purplePrimary};
    min-height: 725px;
    padding-left: 20px;
    padding-right: 20px;
    @media (min-width: ${styles.breakpoints.m}px) {
        min-height: 465px;
    }
`
const ContactWrapper = styled.div`
    position: absolute;
    top: -115px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 35px 17px;
    margin: auto;
    margin-bottom: 12px;
    max-width: 320px;
    border: 3px solid ${styles.colors.darkMainBg};
    box-shadow:  0px 4px 0px ${styles.colors.darkMainBg};
    border-radius: 13px;
    background: ${styles.colors.white};
    @media (min-width: ${styles.breakpoints.m}px) {
        top: -163px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 37px 92px 39px 94px;
        margin: auto;
        max-width: calc(100% - 40px);
    }
    @media (min-width: ${styles.breakpoints.l}px) {
        max-width: 946px;
    }
`
const ContactHeading = styled.h2`
    font-size: 2.38em;
    font-weight:${styles.fontWeight.bold};
    text-align: center;
    margin-bottom: 38px;
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 3.33em;
        line-height: 64px;
        margin-bottom: 30px;
        flex-basis: 100%;
    }
`
const ContactFormBlock = styled.div`
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 367px;
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
    margin-bottom: 27px;
    position: relative;
    &:nth-last-of-type(2) {
        margin-bottom: 22px;
    }
    &:last-child {
        margin-bottom: 0;
        @media (min-width: ${styles.breakpoints.m}px) {
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
    ${props => {
        if (props.error) {
            return `
            &::after {
                content: url(${require('../../images/icon_form_error.svg').default});
                position: absolute; 
                height: 20px;
                width: 20px;
                right: 15px;
                top: 10px;
                @media (min-width: ${styles.breakpoints.m}px) {
                    right: 20px;
                }
            }
            `
        }
    }}
    
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
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 367px;
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
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 367px;
    }
`
const BtnSubmit = styled(Button)`
    max-width: max-content;
    margin-bottom: 0;
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
    bottom: -18px;
`

const FeedbackMessage= styled.p`
    color: ${styles.colors.darkMainBg};
    font-weight:${styles.fontWeight.regular};
    font-size: .88em;
    margin-left: 0;
    margin-top: 15px;
    @media (min-width: ${styles.breakpoints.m}px) {
        margin-left: auto;
    }
`
const FeedbackMessageTitle= styled.span`
    color: ${styles.colors.greenMain};
    font-weight:${styles.fontWeight.bold};
    display: block;
`

const ContactInfoBlock = styled.div`
    margin-top: 65px;
    @media (min-width: ${styles.breakpoints.m}px) {
        max-width: 15em;
        margin-top: 28px;
    }
`
const Email = styled(Link)`
    font-size: .88em;
    font-weight:${styles.fontWeight.bold};
    margin-bottom: 28px;
    display: block;
    text-decoration: none;
    color: ${styles.colors.darkMainBg};
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 1em;
        margin-bottom: 30px;
    }
`
const OfficeListTitle = styled.h3`
    font-size: .88em;
    font-weight:${styles.fontWeight.bold};
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 1em;
        margin-bottom: 4px;
    }
`
const OfficeList = styled.ul`
    margin-left: 0;
`
const OfficeListItem = styled.li`
    font-size: .88em;
    list-style-type: none;
    margin-bottom: 23px;
    line-height: 22px;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media (min-width: ${styles.breakpoints.m}px) {
        font-size: 1em;
        line-height: 26px;
    }
`

const ContactForm = () => {
    const intl = useIntl();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [emailSent, setEmailSent] = useState(false);

    const onSubmit = (data) => {
        setEmailSent(false);

        console.log(data);
        // send email
        // if success
            setEmailSent(true);
        // if not success 
            // do something

        // then() clear form
        reset({
            nameField: '',
            emailField: '',
            textAreaField: ''
        }, {
            keepSubmitCount: true,
            keepIsSubmitted: true
        });

    }

    return (
        <ContactMainContainer>
            <ContactWrapper>
                <ContactHeading>{intl.formatMessage({id: 'contactForm.title'})}</ContactHeading>
                <ContactFormBlock>
                    <Form onSubmit={handleSubmit(onSubmit)}  >
                        <FormGroup>
                            <Label htmlFor="nameField">{intl.formatMessage({id: 'contactForm.nameField'})}* </Label>
                            <FieldContainer error={errors.nameField}>
                                <Field 
                                    name="nameField" 
                                    type="text" 
                                    placeholder={intl.formatMessage({id: 'contactForm.nameField'})} 
                                    {...register("nameField", { required: true })} />
                            </FieldContainer>
                            {errors.nameField && 
                                <ErrorMessage>{intl.formatMessage({id: 'contactForm.requiredFieldError'})}</ErrorMessage>
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="emailField">{intl.formatMessage({id: 'contactForm.emailField'})}* </Label>
                            <FieldContainer error={errors.emailField}>
                                <Field 
                                    name="emailField" 
                                    type="email" 
                                    placeholder={intl.formatMessage({id: 'contactForm.emailField'})} 
                                    {...register("emailField", { required: true })}/>
                            </FieldContainer>
                            {errors.emailField && 
                                <ErrorMessage>{intl.formatMessage({id: 'contactForm.requiredFieldError'})}</ErrorMessage>
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="textAreaField">{intl.formatMessage({id: 'contactForm.textAreaField'})}* </Label>
                            <FieldContainer error={errors.textAreaField}>
                                <TextArea 
                                    name="textAreaField" 
                                    type="textarea" 
                                    placeholder={intl.formatMessage({id: 'contactForm.textAreaField'})}  
                                    {...register("textAreaField", { required: true })}/>
                            </FieldContainer>
                            {errors.textAreaField && 
                                <ErrorMessage>{intl.formatMessage({id: 'contactForm.requiredFieldError'})}</ErrorMessage>
                            }                    </FormGroup>
                        <FormGroup>
                            <BtnSubmit theme={styles} btnText={intl.formatMessage({id: 'button.send'})} onButtonClick={handleSubmit(onSubmit)}></BtnSubmit>
                            {emailSent &&
                                <FeedbackMessage><FeedbackMessageTitle>{intl.formatMessage({id: 'contactForm.messageSent'})}</FeedbackMessageTitle> {intl.formatMessage({id: 'contactForm.thankYou'})}</FeedbackMessage>
                            }
                        </FormGroup>
                    </Form>
                </ContactFormBlock>
                <ContactInfoBlock>
                    <Email>{intl.formatMessage({id: 'contactForm.email'})}</Email>
                    <OfficeListTitle>{intl.formatMessage({id: 'contactForm.sedes'})}</OfficeListTitle>
                    <OfficeList>
                        <OfficeListItem>{intl.formatMessage({id: 'contactForm.office1'})}</OfficeListItem>
                        <OfficeListItem>{intl.formatMessage({id: 'contactForm.office2'})}</OfficeListItem>
                    </OfficeList>
                </ContactInfoBlock>
            </ContactWrapper>
        </ContactMainContainer>
    );
};

export default ContactForm;