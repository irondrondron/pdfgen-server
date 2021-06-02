import User from './User.js'
// import createPdfDocument from './pdf.js'

class PostService {
  async createUser(user) {
    const createdUser = await User.create({...user})
    return createdUser
  }
  async getAllUsers() {
    const users = await User.find()
    return users
  }
  async getOneUser(id) {
    if(!id) {
      throw new Error('ID not specified')
    }
    const user = await User.findById(id)
    return user
  }
  async deleteUser(id) {
    if(!id) {
      throw new Error('ID not specified')
    }
    const user = await User.findByIdAndDelete(id)
    return user
  }
  async createPdf(id) {
    if(!id) {
      throw new Error('ID not specified')
    }
    const user = await User.findById(id)
    // console.log(id);
    // console.log(createPdfDocument(user))
    // createPdfDocument(user)
    return user
  }
}

export default new PostService()