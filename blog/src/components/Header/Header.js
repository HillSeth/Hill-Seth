import { Search } from 'styled-icons/feather'
import { H1 } from '../Heading'
import { IcontButton } from '../Button'
import { Section } from '../Section'

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