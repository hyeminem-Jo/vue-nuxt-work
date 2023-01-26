import { Router } from 'express';
const router = Router();

// import UserModel from '../models/user-model';

// app.METHOD 의 형태로 작성한 코드와 router.METHOD 의 형태라는 점만 다르다.
router.get('/login', function(req, res) {
  res.send('Login!!')
})

router.post('/signup', function(req, res) {
  res.send('Signup!')
})

export default router;