import React, { Component } from 'react'
import styled from 'styled-components'
import TableFooter from '@material-ui/core/TableFooter';
import Typography  from '@material-ui/core/Typography'
import { Instagram, Facebook, WhatsApp, LinkedIn, YouTube } from '@material-ui/icons';





const FooterContainer = styled(TableFooter)`
  background:white;
  color: #3f51b5;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 100px;
  border-top: 1px #3f51b5 solid;
`
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 5px;
  cursor: pointer;
`

export class Footer extends Component {
    render() {
        return (
                <FooterContainer>
                  <IconContainer>
            
                    <Facebook 
                      fontSize="large"
                    />
                    <Instagram 
                      fontSize="large"
                    />
                    <YouTube 
                      fontSize="large"
                    />
                    <LinkedIn 
                      fontSize="large"
                    />
                    <WhatsApp 
                      fontSize="large"
                    />
                 </IconContainer>
                 <Typography>Todos os direitos reservados...</Typography>
                 
                </FooterContainer>
            
        )
    }
}