import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export cont BaseContainer = ({ children, flex = false, ...rest }) => {
    let Component {...rest}>{children}</Component>
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    as: PropTypes.string,
    children: PropTypes.node.isRequired
}