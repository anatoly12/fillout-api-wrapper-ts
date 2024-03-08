import { Request, Response } from 'express';
import { fetchFilteredResponses } from '../services/responseService';

export const getFilteredResponses = async (req: Request, res: Response): Promise<void> => {
    try {
        const formId: string = req.params.formId;
        const filters = req.query.filters ? JSON.parse(req.query.filters as string) : null;
        const responses = await fetchFilteredResponses(formId, filters);
        res.json(responses);
    } catch (error) {
        const typedError = error as Error;
        res.status(500).json({ message: 'Error fetching filtered responses', error: typedError.message });
    }
};
