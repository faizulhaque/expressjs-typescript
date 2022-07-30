import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', function (req: Request, res: Response, next) {
  return res.json('success');
});

export const TestRoutes: Router = router;
