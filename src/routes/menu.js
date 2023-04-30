import {Router} from 'express';
import { menuList } from '../controllers/menu';

const router = Router();

router.get('/', menuList)

export default router;