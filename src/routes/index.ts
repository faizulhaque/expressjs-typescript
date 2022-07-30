import { Router } from 'express';
import { TestRoutes } from './test';


const router: Router = Router();

router.use('/', TestRoutes);

export const MainRouter: Router = router;
