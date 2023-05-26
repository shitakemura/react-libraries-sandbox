// MEMO: https://testing-library.com/docs/react-testing-library/setup/#custom-render
import { ReactElement } from 'react'

import { RenderOptions, render } from '@testing-library/react'

import { AppProvider } from '@/providers/app'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wapper'>
) => render(ui, { wrapper: AppProvider, ...options })

export * from '@testing-library/react'

export { customRender as render }
