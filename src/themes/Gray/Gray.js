import React from 'react'
import mainHeaderImage from './images/react.png'
import { Search } from 'styled-icons/feather'

const images = {
    mainHeaderImage
}

const icons = {
    Search: <Search />
}

const theme = {
    header: { backgroundColor: '#222' }
}

export { theme as Gray }
export const Gray = { ...theme, variants, images, icons }