import express from "express";
import {getLessons} from "../services";
import {GetLessonsDto} from "../dto";

export const lessonsRouter = express.Router();

lessonsRouter.get("/", async (req: express.Request<{}, {}, {}, GetLessonsDto>, res: express.Response) => {
    try {
        const lessons = await getLessons(req.query)
        res.json(lessons);
    } catch (error) {
        res.sendStatus(400)
    }
})
