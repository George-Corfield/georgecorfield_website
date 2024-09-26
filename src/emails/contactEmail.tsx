import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
  } from "@react-email/components";

import { Tailwind } from "@react-email/tailwind"

type contactEmailProps = {
    msg: string;
    senderEmail: string;
}

export default function contactEmail({
    msg, senderEmail
}: contactEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from portfolio website</Preview>
            <Body style={main}>
            <Container style={container}>
                <Heading style={heading}>You've got a new message!</Heading>
                <Section>
                <Text style={paragraph}>Message from: <b>{senderEmail}</b></Text>
                <Text style={paragraph}>{msg}</Text>
                </Section>
                <Section style={footer}>
                </Section>
            </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: '#f4f4f7',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };
  
  const container = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  };
  
  const heading = {
    color: '#333333',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };
  
  const paragraph = {
    fontSize: '16px',
    color: '#555555',
    lineHeight: '1.5',
    marginBottom: '15px',
  };
  
  const footer = {
    borderTop: '1px solid #dddddd',
    marginTop: '30px',
    paddingTop: '20px',
  };
  
  const footerText = {
    color: '#888888',
    fontSize: '12px',
  };