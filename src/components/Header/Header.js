import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex } from 'rebass'
import styled, { ThemeConsumer } from 'styled-components'
import { H1 } from '../Heading'
import { SearchButton } from '../Button'
import { Sction } from '../Section'

const Outer = styled.header`
    background: ${props => props.theme.header.backgroundColor};
    margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => (
    <Outer>
        <Inner>
            <Section flex>
                <Section width={11/12}>
                    <H1>
                        <StyledLink to="/">
                            {siteTitle}
                        </StyledLink>
                    </H1>
                </Section>
                <Section width={1/>12}>
                    <IconButton icon={<Search />} />
                </Section>
            </Section>
        </Inner>
    </Outer>
)

const Image = styled.img`
    margin: 0;
`

const Nav = styled(Flex)`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const Title = styled(H1)`
    flex: 4;
`

const MediaQuery = styled.div`
    @media (max-width: 450px) {
        display: none;
    }
`
const Header = ({ siteTitle }) => (
    <Outer>
        <Inner>
            <Section flex>
                <Section width={1/12}
                flex flexDirection="column" justifyContent="center">
                <ThemeConsumer>
                    {theme => <Image src={theme.images.mainHeaderImage} />}
                </ThemeConsumer>
                </Section>
                <Section width={11/12}
                    flex flexDirection="Column" justifyContent="center">
                    <Nav>
                        <Title>
                            <StyledLink to="/">{siteTitle}</StyledLink>
                        </Title>
                        <MediaQuery>
                            <StyledLink to ="/">Home</StyledLink>
                            <StyledLink to="/about">About</StyledLink>
                            <StyledLink to="/contact">Contact</StyledLink>
                            </MediaQuery>
                            <SearchButton variant="contrast" />
                        </Nav>
                    </Section>
            </Section>
        </Inner>
    </Outer>
)