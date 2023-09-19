import { Router } from 'express';
import { submit } from '@controllers/student.controller';


const router = Router();

router.post('/sub', submit);

export default router;
