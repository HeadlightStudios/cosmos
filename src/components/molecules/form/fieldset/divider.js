import styled from 'styled-components'

import { fonts, spacing, colors } from '@headlight/cosmos-tokens'

const StyledDivider = styled.div`
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: ${fonts.weight.medium};
  border-bottom: 1px solid ${colors.form.divider};
  padding-bottom: ${spacing.xsmall};
  margin-bottom: ${spacing.large};
  margin-top: 0;
  width: 100%;
  color: ${colors.text.default};
`

export default StyledDivider
