/* eslint-env jest */

import { TimeoutError } from 'promise-toolbox'

import AbstractHandler from './abstract'

const TIMEOUT = 10e3

class TestHandler extends AbstractHandler {
  constructor(impl) {
    super({ url: 'test://' }, { timeout: TIMEOUT })

    Object.keys(impl).forEach(method => {
      this[`_${method}`] = impl[method]
    })
  }
}

describe('rename()', () => {
  it(`throws in case of timeout`, async () => {
    const testHandler = new TestHandler({
      rename: () => new Promise(() => {}),
    })

    const promise = testHandler.rename('oldPath', 'newPath')
    jest.advanceTimersByTime(TIMEOUT)
    await expect(promise).rejects.toThrowError(TimeoutError)
  })
})

describe('list()', () => {
  it(`throws in case of timeout`, async () => {
    const testHandler = new TestHandler({
      list: () => new Promise(() => {}),
    })

    const promise = testHandler.list()
    jest.advanceTimersByTime(TIMEOUT)
    await expect(promise).rejects.toThrowError(TimeoutError)
  })
})

describe('createReadStream()', () => {
  it(`throws in case of timeout`, async () => {
    const testHandler = new TestHandler({
      createReadStream: () => new Promise(() => {}),
    })

    const promise = testHandler.createReadStream('file')
    jest.advanceTimersByTime(TIMEOUT)
    await expect(promise).rejects.toThrowError(TimeoutError)
  })
})

describe('openFile()', () => {
  it(`throws in case of timeout`, async () => {
    const testHandler = new TestHandler({
      openFile: () => new Promise(() => {}),
    })

    const promise = testHandler.openFile('path')
    jest.advanceTimersByTime(TIMEOUT)
    await expect(promise).rejects.toThrowError(TimeoutError)
  })
})

describe('closeFile()', () => {
  it(`throws in case of timeout`, async () => {
    const testHandler = new TestHandler({
      closeFile: () => new Promise(() => {}),
    })

    const promise = testHandler.closeFile({ fd: undefined, path: '' })
    jest.advanceTimersByTime(TIMEOUT)
    await expect(promise).rejects.toThrowError(TimeoutError)
  })
})

describe('createOutputStream()', () => {
  it(`throws in case of timeout`, async () => {
    const testHandler = new TestHandler({
      createOutputStream: () => new Promise(() => {}),
    })

    const promise = testHandler.createOutputStream('File')
    jest.advanceTimersByTime(TIMEOUT)
    await expect(promise).rejects.toThrowError(TimeoutError)
  })
})

describe('unlink()', () => {
  it(`throws in case of timeout`, async () => {
    const testHandler = new TestHandler({
      unlink: () => new Promise(() => {}),
    })

    const promise = testHandler.unlink('')
    jest.advanceTimersByTime(TIMEOUT)
    await expect(promise).rejects.toThrowError(TimeoutError)
  })
})

describe('getSize()', () => {
  it(`throws in case of timeout`, async () => {
    const testHandler = new TestHandler({
      getSize: () => new Promise(() => {}),
    })

    const promise = testHandler.getSize('')
    jest.advanceTimersByTime(TIMEOUT)
    await expect(promise).rejects.toThrowError(TimeoutError)
  })
})