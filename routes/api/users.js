const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
  check('name', 'Tên không được bỏ trống').not().isEmpty(),
  check('email', 'Email không đúng định dạng').isEmail(),
  check('password', 'Password phải có ít nhất 6 ký tự').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // tìm kiếm email đã tồn tại hay chưa
    let user = await User.findOne({ email });
    // nếu tồn tại trả về thông báo lỗi
    if (user) {
      return res.status(400).json({ error: [{ msg: 'Tài khoản đã tồn tại' }] })
    }
    //lấy avartar từ gravatar
    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    });
    //khởi tạo user
    user = new User({
      name,
      email,
      avatar,
      password
    });
    // mã hõa password
    const dalt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    // lưu dữ liệu
    await user.save()
    // load lại trang chỉ lấy id user
    const payload = {
      user: {
        id: user.id
      }
    };
    
    jwt.sign(
      payload,config.get('jwtSecret'),{expiresIn:36000},(err,token)=>{
        if(err) throw err;
        res.json({token});
      }
    );
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
  res.send('User route')
});

module.exports = router;