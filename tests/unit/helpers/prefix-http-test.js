import { expect } from 'chai'

import { describe, it } from 'mocha'
import { prefixHttp } from 'opensource-challenge-client/helpers/prefix-http'

describe('Unit | Helper | prefix http', function() {
  it('adds http://', function() {
    let result = prefixHttp(['www.puzzle.ch'])
    expect(result).to.equal('http://www.puzzle.ch')
  })

  it("doesn' add http:// when it is already in the url", function() {
    let result = prefixHttp(['http://www.puzzle.ch'])
    expect(result).to.equal('http://www.puzzle.ch')
  })

  it("doesn' add http:// when https:// is in the url", function() {
    let result = prefixHttp(['https://www.puzzle.ch'])
    expect(result).to.equal('https://www.puzzle.ch')
  })

  it('can handle empty urls', function() {
    let result = prefixHttp([])
    expect(result).to.equal('')
  })
})
