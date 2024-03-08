import { Router } from 'express';
import { getFilteredResponses } from '../controllers/responseController';

const router: Router = Router();

router.get('/:formId/filteredResponses', getFilteredResponses);

export default router;
