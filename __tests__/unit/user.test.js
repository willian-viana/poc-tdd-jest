const bcrypt = require('bcryptjs')

const truncate = require('../utils/truncate')
const factory = require('../factories')

describe('User', () => {
  beforeEach(async () => {
    truncate()
  })

  it('should encrypt user password', async () => {
    const user = await factory.create('User', {
      password: '12345678'
    })

    const hash = await bcrypt.compare(user.password, user.password_hash)

    expect(hash).toBe(true)
  })
})