/* eslint-disable import/no-extraneous-dependencies */
// tests/setup.ts
import matchers from '@testing-library/jest-dom/matchers'
import { expect, beforeAll, afterAll, afterEach } from 'vitest'
import { server } from './mocks/server'

expect.extend(matchers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
