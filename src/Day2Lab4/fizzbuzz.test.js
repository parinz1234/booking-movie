import fizzbuzz from './fizzbuzz'

describe('Fizzbuzz', () => {
  it('Should return fizzbuzz when input is 30', () => {
    const result = fizzbuzz(30)
    expect(result).toEqual('fizz buzz')
  })

  it('Should return fizz when input is 3', () => {
    const result = fizzbuzz(3)
    expect(result).toEqual('fizz')
  })

  it('Should return buzz when input is 5', () => {
    const result = fizzbuzz(5)
    expect(result).toEqual('buzz')
  })

  it('Should return fizzbuzz when input is empty', () => {
    const result = fizzbuzz()
    expect(result).toEqual('fizz buzz')
  })

  it('Should return input value when input is match any case', () => {
    const result = fizzbuzz(7)
    expect(result).toEqual(7)
  })
})