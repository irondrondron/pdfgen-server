import UserService from './UserService.js'
import createPdfDocument from './pdf.js'

class UserController {
  async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body)
      res.json(user)
    }
    catch (err) {
      res.status(500).json(err)
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers()
      return res.json(users)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async getOneUser(req, res) {
    try {
      const user = await UserService.getOneUser(req.params.id)
      return res.json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await UserService.deleteUser(req.params.id)
      return res.json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async createPdf(req, res) {
    try {
      const user = await UserService.createPdf(req.body.userId)
      const createdPdf = await createPdfDocument(user)
      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', `attachment; filename=${user.firstname}_${user.lastname}.pdf`)
      createdPdf.pipe(res)
      return
    } catch (err) {
      res.status(500).json(err)
    }
  }
}


export default new UserController()