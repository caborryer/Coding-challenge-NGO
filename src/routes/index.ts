import { Router } from 'express';

const router: Router = Router();
import { humanitarianAidsController } from '../controllers/humanitarian-aids.controller';

router.get('/', humanitarianAidsController.index);

export default router;