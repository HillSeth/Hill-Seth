import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Outer = styled.header`
background: ${props => props.theme.header.backgroundColor};
margin-bottom: 1.45rem;
`

const Inner = styled.div`
margin: 0px auto;
max-width: 1000px;
padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
margin: 0px;
`

const StyledLink = styled(Link)`
color: gray;
text-decoration: none;
&:hover {
  color: cyan;
}
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <H1>
        <StyledLink to="/">
          {sitTitle}
        </StyledLink>
      </H1>
    </Inner>
  </Outer>
)

Header.propTypes = {
  sitTitle: PropTypes.string,
}

Header.defaultProps = {
  sitTitle: ``,
}

export {Header}